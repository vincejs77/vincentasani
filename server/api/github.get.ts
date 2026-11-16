// Profil GitHub affiché dans la fenêtre « navigateur » du Dock.
// GitHub interdit l'affichage de ses pages en iframe (X-Frame-Options: deny) : on reconstruit l'aperçu côté serveur.
// - profil, étoiles et activité récente : API publique
// - graphe de contributions : page publique github.com/users/<login>/contributions (pas d'API sans jeton)
// - achievements : page publique du profil (pas d'API du tout)
// Réponse mise en cache 1 h pour rester loin de la limite de 60 requêtes/heure de l'API sans jeton.

const USERNAME = "vincejs77";
const HEADERS = { Accept: "application/vnd.github+json", "User-Agent": "vincentasani.me" };

type GithubUser = {
	login: string;
	name: string | null;
	avatar_url: string;
	html_url: string;
	bio: string | null;
	location: string | null;
	public_repos: number;
};

type GithubEvent = {
	type: string;
	created_at: string;
	repo: { name: string };
	payload: { action?: string; ref_type?: string };
};

type ContributionDay = { date: string; count: number; level: number };
type Achievement = { slug: string; name: string; image: string; tier: string | null; count: number | null };
type ActivityItem = { type: string; action: string | null; refType: string | null; repo: string; count: number; date: string };

// Les cases du calendrier portent la date et le niveau ; le nombre exact est dans l'infobulle associée (for="<id>").
async function fetchContributions() {
	const html = await $fetch<string>(`https://github.com/users/${USERNAME}/contributions`, {
		headers: { "User-Agent": "Mozilla/5.0 (compatible; vincentasani.me)" },
		responseType: "text"
	});

	const counts = new Map<string, number>();
	for (const [, id, text] of html.matchAll(/<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
		const n = text!.match(/^([\d,]+) contributions?/);
		counts.set(id!, n ? Number(n[1]!.replace(/,/g, "")) : 0);
	}

	const days: ContributionDay[] = [];
	for (const [tag] of html.matchAll(/<td[^>]*ContributionCalendar-day[^>]*>/g)) {
		const date = tag.match(/data-date="([^"]+)"/)?.[1];
		const level = tag.match(/data-level="(\d)"/)?.[1];
		const id = tag.match(/\bid="([^"]+)"/)?.[1];
		if (date && level) days.push({ date, level: Number(level), count: (id && counts.get(id)) || 0 });
	}
	days.sort((a, b) => a.date.localeCompare(b.date));

	const total = html.match(/([\d,]+)\s+contributions?\s+in the last year/)?.[1];
	return { total: total ? Number(total.replace(/,/g, "")) : days.reduce((s, d) => s + d.count, 0), days };
}

// Nombre de dépôts mis en favori (onglet « Stars » du profil) : 1 par page, le numéro de la dernière page donne le total.
async function fetchStarred() {
	const res = await $fetch.raw(`https://api.github.com/users/${USERNAME}/starred`, { headers: HEADERS, query: { per_page: 1 } });
	const last = res.headers.get("link")?.match(/[?&]page=(\d+)>;\s*rel="last"/)?.[1];
	return last ? Number(last) : Array.isArray(res._data) ? res._data.length : 0;
}

// Badges de la barre latérale du profil : <a href="…?achievement=<slug>…"><img alt="Achievement: <nom>"> [<span …--<palier>>x2</span>]</a>
async function fetchAchievements() {
	const html = await $fetch<string>(`https://github.com/${USERNAME}`, {
		headers: { "User-Agent": "Mozilla/5.0 (compatible; vincentasani.me)" },
		responseType: "text"
	});
	const seen = new Map<string, Achievement>();
	for (const [block, slug] of html.matchAll(/<a[^>]*\?achievement=([\w-]+)[^>]*>[\s\S]*?<\/a>/g)) {
		if (seen.has(slug!)) continue;
		const image = block.match(/<img[^>]*src="([^"]+)"/)?.[1];
		const name = block.match(/alt="Achievement: ([^"]+)"/)?.[1];
		if (!image || !name) continue;
		const tier = block.match(/achievement-tier-label--(\w+)/)?.[1] ?? null;
		const count = block.match(/>x(\d+)</)?.[1];
		seen.set(slug!, { slug: slug!, name, image, tier, count: count ? Number(count) : null });
	}
	return [...seen.values()];
}

// Regroupe les événements consécutifs identiques (ex. 4 pushs d'affilée sur le même dépôt).
async function fetchActivity() {
	const events = await $fetch<GithubEvent[]>(`https://api.github.com/users/${USERNAME}/events/public`, { headers: HEADERS, query: { per_page: 50 } });
	const items: ActivityItem[] = [];
	for (const e of events) {
		const item = { type: e.type, action: e.payload.action ?? null, refType: e.payload.ref_type ?? null, repo: e.repo.name, count: 1, date: e.created_at };
		const prev = items.at(-1);
		if (prev && prev.type === item.type && prev.repo === item.repo && prev.action === item.action && prev.refType === item.refType) prev.count++;
		else items.push(item);
	}
	return items.slice(0, 8);
}

export default defineCachedEventHandler(
	async () => {
		const [user, starred, achievements, contributions, activity] = await Promise.all([
			$fetch<GithubUser>(`https://api.github.com/users/${USERNAME}`, { headers: HEADERS }),
			fetchStarred().catch(() => null),
			fetchAchievements().catch(() => [] as Achievement[]),
			fetchContributions().catch(() => null),
			fetchActivity().catch(() => [] as ActivityItem[])
		]);

		return {
			login: user.login,
			name: user.name,
			avatarUrl: user.avatar_url,
			url: user.html_url,
			bio: user.bio,
			location: user.location,
			publicRepos: user.public_repos,
			starred,
			achievements,
			contributions,
			activity
		};
	},
	{ name: "github-profile-v3", maxAge: 60 * 60, swr: true }
);
