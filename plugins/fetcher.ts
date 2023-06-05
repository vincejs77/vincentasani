export default defineNuxtPlugin({
	name: "fetcher",
	enforce: "default",
	async setup(nuxtApp) {
		const fetchArticles = async (query: any) => {
			const [{ data: data_articles, refresh: refresh_articles, pending: pending_articles, error: error_articles }] = await Promise.all([useSanityQuery(query)]);
			return data_articles.value;
		};
		return {
			provide: {
				fetchArticles
			}
		};
	}
});
