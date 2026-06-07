<template>
	<UApp>
		<div id="v-app" class="v-app">
			<div class="fixed left-0 right-0 top-0 z-[9999] h-1 bg-gray-900">
				<NuxtLoadingIndicator :color="false" :height="h" />
			</div>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</div>
	</UApp>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const globalStore = useGlobalStore();

const h = 2;

nuxtApp.hook("page:start", () => {
	globalStore.$state.isLoadingPage = true;
});

nuxtApp.hook("page:finish", () => {
	globalStore.$state.isLoadingPage = false;
});
</script>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(0.1rem);
}
</style>
