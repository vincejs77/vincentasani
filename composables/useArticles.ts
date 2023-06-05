export const useArticles = async (query: any) => {
	const [{ data, refresh, pending, error }] = await Promise.all([useSanityQuery(query)]);
	return data.value;
};
