// Traductions des articles Sanity, stockées dans server/assets/articles/<locale>/<id>.json
// Format : { title, blocks: { [blockKey]: children[] } } — seuls les spans de texte sont traduits,
// la page fusionne ces blocs dans le contenu Sanity (images, styles et liens restent ceux de Sanity).

export interface ArticleTranslation {
	title: string;
	blocks: Record<string, { _key: string; _type: string; marks?: string[]; text: string }[]>;
}

const LOCALES = ["fr", "en"];

export const getArticleLocale = (event: Parameters<typeof getRouterParam>[0]) => {
	const locale = getRouterParam(event, "locale");
	if (!locale || !LOCALES.includes(locale)) throw createError({ statusCode: 400, statusMessage: "Unknown locale" });
	return locale;
};

export const translationStorage = () => useStorage("assets:server");
