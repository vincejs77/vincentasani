// Traduction complète d'un article ; null si l'article n'existe pas dans cette langue
export default defineEventHandler(async (event) => {
	const locale = getArticleLocale(event);
	const id = getRouterParam(event, "id") ?? "";
	if (!/^[\w-]+$/.test(id)) throw createError({ statusCode: 400, statusMessage: "Invalid article id" });

	return (await translationStorage().getItem<ArticleTranslation>(`articles:${locale}:${id}.json`)) ?? null;
});
