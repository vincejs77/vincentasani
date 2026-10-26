// Applique les traductions locales (server/assets/articles) aux articles venant de Sanity.

interface TranslatedSpan {
	_key: string;
	_type: string;
	marks?: string[];
	text: string;
}

interface ArticleTranslation {
	title: string;
	blocks: Record<string, TranslatedSpan[]>;
}

// Titres traduits de tous les articles dans la langue active : { [articleId]: title }
export const useArticleTitles = () => {
	const { locale } = useLang();
	const { data } = useFetch(() => `/api/article-translations/${locale.value}`, {
		key: computed(() => `article-titles-${locale.value}`),
		default: () => ({}) as Record<string, string>
	});

	const titleOf = (article: { _id: string; title: string }) => data.value?.[article._id] ?? article.title;
	return { titleOf };
};

// Traduction complète d'un article ; `translated` vaut true quand une version traduite est affichée
export const useArticleTranslation = <T extends { _id: string; title: string; content?: any[] }>(article: Ref<T | undefined>) => {
	const { locale } = useLang();
	const { data } = useFetch<ArticleTranslation | null>(
		() => (article.value ? `/api/article-translations/${locale.value}/${article.value._id}` : ""),
		{ key: computed(() => `article-${locale.value}-${article.value?._id}`), default: () => null, immediate: !!article.value }
	);

	const translated = computed(() => !!data.value);
	const localized = computed(() => {
		const original = article.value;
		const translation = data.value;
		if (!original || !translation) return original;
		return {
			...original,
			title: translation.title,
			content: original.content?.map((block) =>
				block._type === "block" && translation.blocks[block._key] ? { ...block, children: translation.blocks[block._key] } : block
			)
		};
	});

	return { article: localized, translated };
};
