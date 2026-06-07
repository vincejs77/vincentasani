export default defineNuxtPlugin(() => {
	const colorMode = useColorMode();

	const toggleTheme = () => {
		colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
	};

	return {
		provide: {
			toggleTheme
		}
	};
});
