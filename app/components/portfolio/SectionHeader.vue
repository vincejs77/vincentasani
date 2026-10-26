<template>
	<div class="flex flex-col items-center justify-center gap-y-4">
		<div class="flex w-full items-center">
			<div class="h-px flex-1 bg-linear-to-r from-transparent from-5% via-(--ui-border) via-95% to-transparent" />
			<div class="z-10 rounded-xl border border-default bg-inverted px-4 py-1">
				<span class="text-sm font-medium text-inverted">{{ label }}</span>
			</div>
			<div class="h-px flex-1 bg-linear-to-l from-transparent from-5% via-(--ui-border) via-95% to-transparent" />
		</div>
		<div class="flex flex-col items-center justify-center gap-y-3">
			<h2 class="text-center text-3xl font-bold tracking-tighter text-highlighted sm:text-4xl">{{ title }}</h2>
			<p class="text-center text-balance text-muted md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
				<slot />
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{ label: string; title: string }>();
</script>
