/** @type {import('vite').UserConfig} */

import legacy from "@vitejs/plugin-legacy";
import { SplitVendorChunkCahe } from "vite";

export default {
	plugins: [
		legacy({
			targets: ["defaults", "not IE 11"],
			polyfills: true
		})
	]
};
