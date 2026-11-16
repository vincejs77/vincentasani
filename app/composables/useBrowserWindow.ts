// Fenêtre « navigateur » partagée : le Dock l'ouvre, le layout l'affiche (MagicBrowserWindow).
export type BrowserTarget = { name: string; url: string; icon: string };

export const useBrowserWindow = () => {
	const target = useState<BrowserTarget | null>("v-browser-window", () => null);

	const open = (value: BrowserTarget) => {
		target.value = value;
	};

	const close = () => {
		target.value = null;
	};

	return { target, open, close };
};
