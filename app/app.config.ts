export default defineAppConfig({
	ui: {
		colors: {
			primary: "blue",
			neutral: "neutral"
		},
		container: {
			// Contenu aligné à l'intérieur des gouttières hachurées du layout
			base: "max-w-3xl px-8 sm:px-12 lg:px-12"
		},
		button: {
			slots: {
				base: "focus:outline-none focus-visible:outline-none focus-visible:ring-0 ring-0 shadow-none focus-visible:shadow-none"
			}
		}
	}
});
