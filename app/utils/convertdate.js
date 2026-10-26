export const convertDate__index = (date, type, lang) => {
	if (type == "dmy") {
		return new Date(date).toLocaleDateString(lang, {
			month: "long",
			day: "numeric",
			year: "numeric",
			hour: "numeric",
			minute: "numeric"
		});
	} else {
		return new Date(date).toLocaleDateString(lang, {
			day: "numeric"
		});
	}
};
