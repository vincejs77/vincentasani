<template>
	<component
		:is="as"
		ref="el"
		:style="{
			opacity: visible ? 1 : 0,
			filter: visible ? 'blur(0px)' : `blur(${blur})`,
			transform: visible ? 'translateY(0)' : `translateY(${-yOffset}px)`,
			transition: `opacity ${duration}s ease-out ${delay}s, filter ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`
		}"
	>
		<slot />
	</component>
</template>

<script setup lang="ts">
// Port Vue du composant BlurFade de Magic UI : flou + fondu + léger glissement à l'apparition.
const props = withDefaults(
	defineProps<{
		as?: string;
		delay?: number;
		duration?: number;
		yOffset?: number;
		blur?: string;
		inView?: boolean;
	}>(),
	{ as: "div", delay: 0, duration: 0.4, yOffset: 6, blur: "6px", inView: false }
);

const el = ref<HTMLElement | null>(null);
const visible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
	if (!props.inView || !("IntersectionObserver" in window)) {
		requestAnimationFrame(() => (visible.value = true));
		return;
	}
	observer = new IntersectionObserver(
		([entry]) => {
			if (entry?.isIntersecting) {
				visible.value = true;
				observer?.disconnect();
			}
		},
		{ rootMargin: "-50px" }
	);
	if (el.value) observer.observe(el.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>
