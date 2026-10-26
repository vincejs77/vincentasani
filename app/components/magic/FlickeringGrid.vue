<template>
	<div ref="container" class="h-full w-full">
		<canvas ref="canvas" class="pointer-events-none" />
	</div>
</template>

<script setup lang="ts">
// Port Vue du composant FlickeringGrid de Magic UI.
const props = withDefaults(
	defineProps<{
		squareSize?: number;
		gridGap?: number;
		flickerChance?: number;
		maxOpacity?: number;
	}>(),
	{ squareSize: 2, gridGap: 2, flickerChance: 0.25, maxOpacity: 0.2 }
);

const container = ref<HTMLDivElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);

let frame = 0;
let resizeObserver: ResizeObserver | null = null;
let visibilityObserver: IntersectionObserver | null = null;
let inView = false;

onMounted(() => {
	const cvs = canvas.value;
	const box = container.value;
	const ctx = cvs?.getContext("2d");
	if (!cvs || !box || !ctx) return;

	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	let cols = 0;
	let rows = 0;
	let dpr = 1;
	let squares = new Float32Array(0);

	const setup = () => {
		const { width, height } = box.getBoundingClientRect();
		dpr = window.devicePixelRatio || 1;
		cvs.width = width * dpr;
		cvs.height = height * dpr;
		cvs.style.width = `${width}px`;
		cvs.style.height = `${height}px`;
		cols = Math.ceil(width / (props.squareSize + props.gridGap));
		rows = Math.ceil(height / (props.squareSize + props.gridGap));
		squares = new Float32Array(cols * rows);
		for (let i = 0; i < squares.length; i++) squares[i] = Math.random() * props.maxOpacity;
	};

	const draw = () => {
		// La couleur suit le thème : on la relit à chaque frame via la couleur du texte du conteneur.
		const rgb = getComputedStyle(box).color.match(/\d+(\.\d+)?/g)?.slice(0, 3).join(",") ?? "0,0,0";
		ctx.clearRect(0, 0, cvs.width, cvs.height);
		for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {
				ctx.fillStyle = `rgba(${rgb},${squares[i * rows + j]})`;
				ctx.fillRect(
					i * (props.squareSize + props.gridGap) * dpr,
					j * (props.squareSize + props.gridGap) * dpr,
					props.squareSize * dpr,
					props.squareSize * dpr
				);
			}
		}
	};

	let last = 0;
	const loop = (time: number) => {
		if (!inView) return;
		const delta = (time - last) / 1000;
		last = time;
		for (let i = 0; i < squares.length; i++) {
			if (Math.random() < props.flickerChance * delta) squares[i] = Math.random() * props.maxOpacity;
		}
		draw();
		frame = requestAnimationFrame(loop);
	};

	setup();
	draw();

	resizeObserver = new ResizeObserver(() => {
		setup();
		draw();
	});
	resizeObserver.observe(box);

	if (reduceMotion) return;
	visibilityObserver = new IntersectionObserver(([entry]) => {
		inView = !!entry?.isIntersecting;
		cancelAnimationFrame(frame);
		if (inView) {
			last = performance.now();
			frame = requestAnimationFrame(loop);
		}
	});
	visibilityObserver.observe(cvs);
});

onBeforeUnmount(() => {
	cancelAnimationFrame(frame);
	resizeObserver?.disconnect();
	visibilityObserver?.disconnect();
});
</script>
