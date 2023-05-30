// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxthq/ui", "@nuxtjs/color-mode"],
	colorMode: {
		preference: "dark", // default value of $colorMode.preference
		fallback: "light", // fallback value if not system preference found
		hid: "nuxt-color-mode-script",
		globalName: "__NUXT_COLOR_MODE__",
		componentName: "ColorScheme",
		classPrefix: "",
		classSuffix: "",
		storageKey: "v-color-mode"
	},
	css: ["~/assets/styles/utils/fonts.scss", "~/assets/styles/main.scss"]
});
