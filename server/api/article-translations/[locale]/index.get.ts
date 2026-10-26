// Titres traduits de tous les articles disponibles dans une langue : { [articleId]: title }
export default defineEventHandler(async (event) => {
	const locale = getArticleLocale(event);
	const storage = translationStorage();
	const prefix = `articles:${locale}:`;
	const keys = (await storage.getKeys(prefix)).filter((key) => key.endsWith(".json"));

	const entries = await Promise.all(
		keys.map(async (key) => {
			const translation = await storage.getItem<ArticleTranslation>(key);
			return [key.slice(prefix.length, -".json".length), translation?.title] as const;
		})
	);

	return Object.fromEntries(entries.filter(([, title]) => title));
});
