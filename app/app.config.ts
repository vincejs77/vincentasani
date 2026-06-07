export default defineAppConfig({
	ui: {
		container: {
			base: "max-w-4xl"
		},
		button: {
			slots: {
				base: "focus:outline-none focus-visible:outline-none focus-visible:ring-0 ring-0 shadow-none focus-visible:shadow-none"
			}
		}
	}
});
