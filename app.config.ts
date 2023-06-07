export default defineAppConfig({
	ui: {
		container: {
			constrained: "max-w-4xl"
		},
		theme: {
			extend: {
				fontFamily: {
					sans: ["Satoshi", "Arial", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"]
				}
			}
		}
	}
});
