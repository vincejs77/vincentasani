import { defineCollection, defineContentConfig } from "@nuxt/content";

const codeBlocks = defineCollection({
	type: "page",
	source: "code_blocks/**"
});

export default defineContentConfig({
	collections: {
		code_blocks: codeBlocks
	}
});
