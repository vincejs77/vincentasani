#!/usr/bin/env node
// Compresse et redimensionne des images pour le web (sharp).
//
// Usage :
//   node scripts/optimize-images.mjs <fichier...> [options]
//
// Options :
//   --width N      largeur max (px)            --height N     hauteur max (px)
//   --fit F        inside (défaut) | cover     --format F     webp (défaut) | avif | jpeg | png
//   --quality N    qualité 1-100 (défaut : 80) --lossless     WebP sans perte (logos, aplats)
//   --out P        fichier de sortie (un seul fichier en entrée)
//
// Par défaut la sortie est écrite à côté de la source avec la nouvelle extension
// (photo.jpg -> photo.webp). Si la sortie est la source elle-même (ex. --format png
// sur un .png), le fichier n'est remplacé que si le résultat est plus léger.
// Règle pratique : viser 2x la taille d'affichage CSS (écrans haute densité).
//
// Exemples :
//   node scripts/optimize-images.mjs public/img/me/photo.jpg --height 600
//   node scripts/optimize-images.mjs public/img/logos/acme.png --width 96 --lossless
//   node scripts/optimize-images.mjs public/img/og.png --format png

import { readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseArgs } from "node:util";
import sharp from "sharp";

const { values: opts, positionals: files } = parseArgs({
	allowPositionals: true,
	options: {
		width: { type: "string" },
		height: { type: "string" },
		fit: { type: "string", default: "inside" },
		format: { type: "string", default: "webp" },
		quality: { type: "string", default: "80" },
		lossless: { type: "boolean", default: false },
		out: { type: "string" }
	}
});

if (!files.length) {
	console.error("Usage : node scripts/optimize-images.mjs <fichier...> [--width N] [--height N] [--format webp] [--quality 80]");
	process.exit(1);
}
if (opts.out && files.length > 1) {
	console.error("--out n'accepte qu'un seul fichier en entrée");
	process.exit(1);
}

const EXT = { webp: ".webp", avif: ".avif", jpeg: ".jpg", jpg: ".jpg", png: ".png" };
const format = opts.format === "jpg" ? "jpeg" : opts.format;
if (!EXT[format]) {
	console.error(`Format inconnu : ${opts.format}`);
	process.exit(1);
}
const quality = Number(opts.quality);
const kb = (n) => `${(n / 1024).toFixed(1)} Ko`;

function encode(pipeline) {
	switch (format) {
		case "webp":
			return pipeline.webp(opts.lossless ? { lossless: true, effort: 6 } : { quality, effort: 6, smartSubsample: true });
		case "avif":
			return pipeline.avif({ quality, effort: 9, lossless: opts.lossless });
		case "jpeg":
			return pipeline.jpeg({ quality, mozjpeg: true, progressive: true });
		case "png":
			// Palette 8 bits (libimagequant) : énorme gain sur les captures et aplats
			return pipeline.png({ palette: !opts.lossless, quality, effort: 10, compressionLevel: 9 });
	}
}

for (const file of files) {
	const input = await readFile(file);
	const out = opts.out ?? path.join(path.dirname(file), path.basename(file, path.extname(file)) + EXT[format]);

	// rotate() applique l'orientation EXIF ; sharp supprime les métadonnées (EXIF, GPS...) par défaut
	let pipeline = sharp(input).rotate();
	if (opts.width || opts.height) {
		pipeline = pipeline.resize({
			width: opts.width ? Number(opts.width) : undefined,
			height: opts.height ? Number(opts.height) : undefined,
			fit: opts.fit,
			withoutEnlargement: true
		});
	}

	const { data, info } = await encode(pipeline).toBuffer({ resolveWithObject: true });
	const sameFile = path.resolve(out) === path.resolve(file);

	if (sameFile && data.length >= input.length) {
		console.log(`= ${file} déjà optimal (${kb(input.length)})`);
		continue;
	}

	await writeFile(out, data);
	const gain = Math.round((1 - data.length / input.length) * 100);
	console.log(`✓ ${file} (${kb(input.length)}) -> ${out} ${info.width}x${info.height} (${kb((await stat(out)).size)}, -${gain}%)`);
}
