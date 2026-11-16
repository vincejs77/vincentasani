// Images Sanity optimisées par le CDN Sanity : redimensionnement à la taille d'affichage,
// compression, et format moderne (AVIF/WebP) négocié selon le navigateur avec auto=format.
// Doc : https://www.sanity.io/docs/image-urls

export interface SanityImageAsset {
	url: string;
	extension?: string;
	dimensions?: { width: number; height: number };
}

// Projection GROQ à utiliser à la place de `asset->` : ne ramène que les champs utiles
// (le document asset complet contient palette, EXIF, blurhash... qui alourdissent la page).
export const SANITY_ASSET_FIELDS = "{url, extension, \"dimensions\": metadata.dimensions{width, height}}";

interface UrlOptions {
	width?: number;
	height?: number;
	quality?: number;
	fit?: "max" | "crop" | "clip" | "fill" | "min" | "scale";
	// Format imposé (ex. "jpg" pour les aperçus réseaux sociaux) ; sinon auto=format
	format?: "jpg" | "png" | "webp";
}

// GIF (animations) et SVG (vectoriel) sont servis tels quels : une transformation les aplatirait
const PASSTHROUGH = new Set(["gif", "svg"]);

export function sanityImageUrl(asset: SanityImageAsset | null | undefined, opts: UrlOptions = {}): string {
	if (!asset?.url) return "";
	if (asset.extension && PASSTHROUGH.has(asset.extension)) return asset.url;

	const params = new URLSearchParams();
	if (opts.width) params.set("w", String(Math.round(opts.width)));
	if (opts.height) params.set("h", String(Math.round(opts.height)));
	params.set("fit", opts.fit ?? "max");
	params.set("q", String(opts.quality ?? 75));
	if (opts.format) params.set("fm", opts.format);
	else params.set("auto", "format");

	return `${asset.url}?${params}`;
}

// Largeurs candidates du srcset : du petit mobile au 2x de la colonne la plus large (672px)
const DEFAULT_WIDTHS = [320, 480, 640, 800, 960, 1152, 1344];

interface ResponsiveOptions {
	// Attribut `sizes` : largeur d'affichage CSS de l'image selon le viewport
	sizes: string;
	widths?: number[];
	quality?: number;
}

// Attributs <img> responsives : src, srcset, sizes et dimensions intrinsèques (évite le décalage de mise en page)
export function sanityImageAttrs(asset: SanityImageAsset | null | undefined, opts: ResponsiveOptions) {
	if (!asset?.url) return { src: "" };

	const width = asset.dimensions?.width;
	const height = asset.dimensions?.height;
	const dims = width && height ? { width, height } : {};

	if (asset.extension && PASSTHROUGH.has(asset.extension)) return { src: asset.url, ...dims };

	// Jamais de largeur supérieure à l'original : Sanity n'agrandit pas, le descripteur mentirait
	const candidates = opts.widths ?? DEFAULT_WIDTHS;
	let widths = width ? candidates.filter((w) => w < width) : candidates;
	if (width && (widths.length === 0 || width <= candidates[candidates.length - 1]!)) widths = [...widths, width];

	const url = (w: number) => sanityImageUrl(asset, { width: w, quality: opts.quality });
	// src de repli (navigateurs sans srcset) : une taille intermédiaire
	const fallback = widths.find((w) => w >= 800) ?? widths[widths.length - 1]!;

	return {
		src: url(fallback),
		srcset: widths.map((w) => `${url(w)} ${w}w`).join(", "),
		sizes: opts.sizes,
		...dims
	};
}

// Valeurs `sizes` selon la colonne où l'image est affichée (gouttières du layout : px-6 mobile, px-12 dès sm)
export const IMAGE_SIZES = {
	// Pleine largeur du conteneur (max-w-3xl, 672px de contenu)
	container: "(min-width: 768px) 672px, (min-width: 640px) calc(100vw - 96px), calc(100vw - 48px)",
	// Colonne de lecture d'un article (max-w-xl, 576px)
	prose: "(min-width: 672px) 576px, (min-width: 640px) calc(100vw - 96px), calc(100vw - 48px)",
	// Carte article : demi-colonne dès md
	card: "(min-width: 768px) 320px, (min-width: 640px) calc(100vw - 96px), calc(100vw - 48px)"
};
