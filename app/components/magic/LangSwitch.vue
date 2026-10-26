<template>
	<div
		role="radiogroup"
		:aria-label="ui.language"
		class="relative inline-flex h-8 items-center rounded-full border border-default bg-default/90 p-0.5 text-xs font-medium shadow-[0_0_10px_3px] shadow-black/5 backdrop-blur-3xl dark:bg-elevated/90 dark:shadow-white/5"
	>
		<span
			aria-hidden="true"
			class="absolute top-0.5 bottom-0.5 left-0.5 w-9 rounded-full bg-inverted transition-transform duration-300 ease-out"
			:style="{ transform: `translateX(${locales.indexOf(locale) * 100}%)` }"
		/>
		<button
			v-for="code in locales"
			:key="code"
			type="button"
			role="radio"
			:aria-checked="locale === code"
			:lang="code"
			class="relative z-10 h-full w-9 cursor-pointer rounded-full uppercase transition-colors duration-300"
			:class="locale === code ? 'text-inverted' : 'text-muted hover:text-highlighted'"
			@click="setLocale(code)"
		>
			{{ code }}
		</button>
	</div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale, ui } = useLang();
</script>
