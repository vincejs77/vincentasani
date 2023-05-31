import { useStorage } from "@vueuse/core";
let themeStorage = useStorage("v-color-mode", "dark");

export default defineNuxtPlugin({
	name: "theme",
	enforce: "default",
	async setup(nuxtApp) {
		const toggleTheme = async () => {
			if (themeStorage.value == "dark") {
				themeStorage.value = "light";
				useColorMode().preference = themeStorage.value;
			} else {
				themeStorage.value = "dark";
				useColorMode().preference = themeStorage.value;
			}
		};

		return {
			provide: {
				toggleTheme
			}
		};
	}
});
