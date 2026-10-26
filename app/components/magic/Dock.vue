<template>
	<div class="pointer-events-none fixed inset-x-0 bottom-4 z-30">
		<nav
			class="pointer-events-auto relative mx-auto flex h-14 w-fit items-end gap-2 rounded-full border border-default bg-default/90 p-2 shadow-[0_0_10px_3px] shadow-black/5 backdrop-blur-3xl dark:bg-elevated/90 dark:shadow-white/5"
			@mousemove="mouseX = $event.clientX"
			@mouseleave="mouseX = null"
		>
			<UTooltip v-for="item in resume.navbar" :key="item.to" :text="item.label">
				<NuxtLink :to="item.to" :aria-label="item.label">
					<span :ref="setIcon" :style="iconStyle(iconIndex(item.to))" :class="itemClass">
						<UIcon :name="item.icon" class="size-5" />
					</span>
				</NuxtLink>
			</UTooltip>

			<div role="none" class="m-auto h-2/3 w-px shrink-0 bg-border" />

			<UTooltip v-for="social in resume.contact.social" :key="social.name" :text="social.name">
				<a :href="social.url" :aria-label="social.name" target="_blank" rel="noopener noreferrer">
					<span :ref="setIcon" :style="iconStyle(iconIndex(social.url))" :class="itemClass">
						<UIcon :name="social.icon" class="size-5" />
					</span>
				</a>
			</UTooltip>
		</nav>
	</div>
</template>

<script setup lang="ts">
const { resume } = useLang();

// Effet de grossissement du Dock Magic UI : chaque icône grandit selon sa distance au curseur.
const BASE_SIZE = 40;
const MAX_SIZE = 56;
const DISTANCE = 140;

const itemClass =
	"flex items-center justify-center rounded-full border border-default bg-default text-muted transition-[width,height,color,background-color] duration-150 ease-out hover:bg-muted hover:text-highlighted";

const keys = [...resume.value.navbar.map((i) => i.to), ...resume.value.contact.social.map((s) => s.url)];
const iconIndex = (key: string) => keys.indexOf(key);

const mouseX = ref<number | null>(null);
const icons: HTMLElement[] = [];
const centers = ref<number[]>([]);

const setIcon = (el: unknown) => {
	if (el instanceof HTMLElement && !icons.includes(el)) icons.push(el);
};

// Les centres sont mesurés à l'entrée du curseur pour éviter que l'agrandissement ne fausse les distances.
watch(mouseX, (x, prev) => {
	if (x !== null && prev === null) {
		centers.value = icons.map((el) => {
			const r = el.getBoundingClientRect();
			return r.left + r.width / 2;
		});
	}
});

const iconStyle = (index: number) => {
	let size = BASE_SIZE;
	const center = centers.value[index];
	if (mouseX.value !== null && center !== undefined) {
		const d = Math.abs(mouseX.value - center);
		if (d < DISTANCE) size = BASE_SIZE + (MAX_SIZE - BASE_SIZE) * Math.cos((d / DISTANCE) * (Math.PI / 2));
	}
	return { width: `${size}px`, height: `${size}px` };
};
</script>
