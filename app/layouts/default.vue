<template>
	<div id="v-default-layout" class="v-default-layout relative min-h-screen bg-default text-default">
		<div class="absolute inset-x-0 top-0 z-0 h-[100px] overflow-hidden text-highlighted">
			<MagicFlickeringGrid class="[mask-image:linear-gradient(to_bottom,black,transparent)]" />
		</div>
		<div class="relative z-10 mx-auto max-w-2xl px-6 py-12 pb-24 sm:py-24">
			<div class="absolute top-4 right-6 sm:top-8">
				<MagicLangSwitch />
			</div>
			<slot />
		</div>
		<MagicDock />
	</div>
</template>

<script setup lang="ts">
const { locale } = useLang();

useHead({ htmlAttrs: { lang: locale } });
</script>
