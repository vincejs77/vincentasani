// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// typescript: {
	// 	tsConfig: {
	// 		compilerOptions: {
	// 			lib: ["es2020", "esnext"],
	// 			module: "commonjs",
	// 			target: "es2020"
	// 		}
	// 	}
	// },
	// ssr: false,
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
	css: ["~/assets/styles/utils/fonts.scss", "~/assets/styles/main.scss"],
	app: {
		pageTransition: { name: "slide-down", mode: "out-in" },
		head: {
			title: "Home - Vincent ASANI",
			meta: [
				// { "http-equiv": "Content-Security-Policy", content: "img-src 'selft' admin.institutfrancaisgoma.org :;" },
				{ charset: "utf-16" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "description", content: "I am a software engineer based in Goma, DRC, creating quality web sites and applications." },
				{ name: "format-detection", content: "telephone=no" },
				// Social
				{ property: "og:title", content: "Hello ! it's Vincent Asani" },
				{
					property: "og:description",
					content: "I am a software engineer based in Goma, DRC, creating quality web sites and applications."
				},
				{ property: "og:url", content: "https://vincentasani.vercel.app/img/cover.png" },
				{
					property: "og:image",
					content: "https://vincentasani.vercel.app/img/cover.png"
				},
				{ name: "twitter:title", content: "Hello ! it's Vincent Asani" },
				{
					name: "twitter:description",
					content: "I am a software engineer based in Goma, DRC, creating quality web sites and applications."
				},
				{
					name: "twitter:image",
					content: "https://vincentasani.vercel.app/img/cover.png"
				},
				{ name: "twitter:card", content: "summary_large_image" }
			],

			link: [
				{
					rel: "me",
					href: "https://twitter.com/vincejs77"
				},
				{ rel: "icon", type: "image/x-icon", href: "/img/favicons/favicon.ico" },
				{
					rel: "apple-touch-icon",
					sizes: "76x76",
					href: "/img/favicons/apple-touch-icon.png"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/img/favicons/favicon-32x32.png"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/img/favicons/favicon-16x16.png"
				},

				{
					rel: "mask-icon",
					href: "/img/favicons/safari-pinned-tab.svg",
					color: "#5bbad5"
				}
			],
			script: [{ src: "https://polyfill.io/v3/polyfill.min.js" }],
			noscript: [{ children: "Javascript est désactivé" }]
		}
	},
	modules: [
		"@nuxthq/ui",
		"@nuxtjs/color-mode",
		"@nuxtjs/sanity",
		"@nuxt/content",
		[
			"@pinia/nuxt",
			{
				autoImports: ["defineStore", "acceptHMRUpdate"]
			}
		]
	],

	// build: { transpile: ["aos", "vue3-lottie", "gsap", "@nuxthq/ui"] },
	content: {
		highlight: {
			theme: {
				default: "github-light",
				dark: "github-dark",
				sepia: "monokai"
			},
			preload: ["js", "css", "html"]
		}
	},
	runtimeConfig: {
		sanity: {
			token: process.env.NUXT_SANITY_TOKEN
		}
	},
	sanity: {
		projectId: "ims5v334",
		dataset: "production"
	},
	plugins: [
		{ src: "~/plugins/vercel.ts", mode: "client" },
		{ src: "@/plugins/aos", ssr: false, mode: "client" }
	]
});
