<template>
	<div id="v-default-layout" class="v-default-layout relative min-h-screen bg-default text-default">
		<!-- Quadrillage inspiré de agent-magicui : cadre vertical, lignes intérieures, lignes horizontales entre les sections (hachures : MagicHatchGutters) -->
		<div class="relative mx-auto min-h-screen max-w-3xl border-x border-default">
			<div aria-hidden="true" class="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 border-r border-default sm:w-6" />
			<div aria-hidden="true" class="pointer-events-none absolute inset-y-0 right-0 z-10 w-4 border-l border-default sm:w-6" />

			<header class="relative flex h-14 items-center justify-between border-b border-default px-8 sm:px-12">
				<div aria-hidden="true" class="absolute inset-0 overflow-hidden text-highlighted">
					<MagicFlickeringGrid class="[mask-image:linear-gradient(to_bottom,black,transparent)]" />
				</div>
				<NuxtLink to="/" class="relative text-sm font-semibold tracking-tight text-highlighted">{{ resume.name }}</NuxtLink>
				<MagicLangSwitch class="relative" />
			</header>

			<div class="relative pb-24">
				<slot />
			</div>
		</div>
		<MagicDock />
	</div>
</template>

<script setup lang="ts">
const { locale, resume } = useLang();

useHead({ htmlAttrs: { lang: locale } });
</script>
