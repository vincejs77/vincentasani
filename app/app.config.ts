export default defineAppConfig({
	ui: {
		colors: {
			primary: "blue",
			neutral: "neutral"
		},
		container: {
			// Le layout fournit déjà la largeur (max-w-2xl) et les marges latérales
			base: "max-w-2xl px-0 sm:px-0 lg:px-0"
		},
		button: {
			slots: {
				base: "focus:outline-none focus-visible:outline-none focus-visible:ring-0 ring-0 shadow-none focus-visible:shadow-none"
			}
		}
	}
});
