// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-06-07",
	css: ["~/assets/css/main.css", "~/assets/styles/utils/fonts.scss", "~/assets/styles/main.scss"],
	app: {
		pageTransition: { name: "slide-down", mode: "out-in" },
		head: {
			title: "Home - Vincent ASANI",
			meta: [
				{ charset: "utf-16" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "description", content: "I am a software engineer based in Goma, DRC, creating quality web sites and applications." },
				{ name: "format-detection", content: "telephone=no" },
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
			noscript: [{ children: "Javascript est désactivé" }]
		}
	},
	modules: ["@nuxt/ui", "@nuxtjs/sanity", "@nuxt/content", "@pinia/nuxt", "@vercel/analytics/nuxt"],
	colorMode: {
		preference: "dark",
		fallback: "light",
		storageKey: "v-color-mode"
	},
	runtimeConfig: {
		sanity: {
			token: process.env.NUXT_SANITY_TOKEN
		}
	},
	sanity: {
		projectId: "ims5v334",
		dataset: "production",
		apiVersion: "2024-01-01"
	},
	nitro: {
		preset: "vercel"
	},
	content: {
		experimental: {
			sqliteConnector: "native"
		}
	},
	vite: {
		optimizeDeps: {
			include: [
				"@nuxtjs/sanity > @sanity/visual-editing > react",
				"@nuxtjs/sanity > @sanity/visual-editing > react/jsx-runtime",
				"@nuxtjs/sanity > @sanity/visual-editing > react-dom",
				"@nuxtjs/sanity > @sanity/visual-editing > react-dom/client",
				"@nuxtjs/sanity > @sanity/visual-editing > react-compiler-runtime",
				"@nuxtjs/sanity > @sanity/visual-editing > react-is",
				"@sanity/client"
			]
		}
	}
});
