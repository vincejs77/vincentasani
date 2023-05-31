/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./*.{js,vue,ts}", "./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],

	theme: {
		extend: {
			fontFamily: {
				sans: ["Satoshi", "Arial", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"]
			},
			colors: {
				transparent: "transparent",
				current: "currentColor"
			}
		}
	},
	corePlugins: {
		aspectRatio: false
	},
	plugins: [
		// ...
		require("@tailwindcss/aspect-ratio")
	]
};
