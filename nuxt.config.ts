// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-06-07",
	css: ["~/assets/css/main.css", "~/assets/styles/utils/fonts.scss", "~/assets/styles/main.scss"],
	app: {
		pageTransition: { name: "slide-down", mode: "out-in" },
		head: {
			title: "Vincent Asani — Ingénieur logiciel",
			meta: [
				{ charset: "utf-16" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "description", content: "Ingénieur logiciel et chef de projet basé à Kinshasa, RDC. Je conçois des produits numériques utiles et j'accompagne la transformation digitale des organisations." },
				{ name: "format-detection", content: "telephone=no" },
				{ property: "og:title", content: "Hello ! it's Vincent Asani" },
				{
					property: "og:description",
					content: "Ingénieur logiciel et chef de projet basé à Kinshasa, RDC. Je conçois des produits numériques utiles et j'accompagne la transformation digitale des organisations."
				},
				{ property: "og:url", content: "https://vincentasani.vercel.app/img/cover.png" },
				{
					property: "og:image",
					content: "https://vincentasani.vercel.app/img/cover.png"
				},
				{ name: "twitter:title", content: "Hello ! it's Vincent Asani" },
				{
					name: "twitter:description",
					content: "Ingénieur logiciel et chef de projet basé à Kinshasa, RDC. Je conçois des produits numériques utiles et j'accompagne la transformation digitale des organisations."
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
		// Dark par défaut pour tout visiteur ; la clé a été renommée pour ignorer les anciens choix « light »/« system » enregistrés
		preference: "dark",
		fallback: "dark",
		storageKey: "v-theme"
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
	fonts: {
		families: [
			// Satoshi est déjà chargée via fonts.scss — évite la double résolution
			{ name: "Satoshi", provider: "none" },
			{ name: "Geist", provider: "google", weights: [400, 500, 600, 700] }
		],
		experimental: {
			// Empêche fontaine de fetcher main.css comme fichier de police
			disableLocalFallbacks: true
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
