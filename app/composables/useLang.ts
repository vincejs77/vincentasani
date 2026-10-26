import { LOCALES, RESUME, localize, type Locale } from "~/data/resume";

// Langue du site : mémorisée dans un cookie pour que le rendu serveur soit déjà dans la bonne langue.
export const useLang = () => {
	const cookie = useCookie<Locale>("v-lang", { maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
	const locale = useState<Locale>("v-lang", () => (LOCALES.includes(cookie.value) ? cookie.value : "fr"));

	const setLocale = (value: Locale) => {
		locale.value = value;
		cookie.value = value;
	};

	const resume = computed(() => localize(RESUME, locale.value));
	const ui = computed(() => resume.value.ui);

	return { locale, locales: LOCALES, setLocale, resume, ui };
};
