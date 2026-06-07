import { defineComponent } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component(
		"Vue3Lottie",
		defineComponent({ render: () => null })
	);
});
