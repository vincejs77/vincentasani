// Profil GitHub affiché dans la fenêtre « navigateur » du Dock.
// GitHub interdit l'affichage de ses pages en iframe (X-Frame-Options: deny) : on passe donc par l'API publique.
// Réponse mise en cache 1 h côté serveur pour rester loin de la limite de 60 requêtes/heure sans jeton.

const USERNAME = "vincejs77";

type GithubUser = {
	login: string;
	name: string | null;
	avatar_url: string;
	html_url: string;
	bio: string | null;
	company: string | null;
	location: string | null;
	public_repos: number;
	followers: number;
	following: number;
};

type GithubRepo = {
	name: string;
	description: string | null;
	html_url: string;
	language: string | null;
	stargazers_count: number;
	forks_count: number;
	pushed_at: string;
	fork: boolean;
	archived: boolean;
};

export default defineCachedEventHandler(
	async () => {
		const headers = { Accept: "application/vnd.github+json", "User-Agent": "vincentasani.me" };
		const [user, repos] = await Promise.all([
			$fetch<GithubUser>(`https://api.github.com/users/${USERNAME}`, { headers }),
			$fetch<GithubRepo[]>(`https://api.github.com/users/${USERNAME}/repos`, { headers, query: { sort: "pushed", per_page: 30 } })
		]);

		return {
			login: user.login,
			name: user.name,
			avatarUrl: user.avatar_url,
			url: user.html_url,
			bio: user.bio,
			company: user.company,
			location: user.location,
			publicRepos: user.public_repos,
			followers: user.followers,
			following: user.following,
			repos: repos
				.filter((r) => !r.fork && !r.archived)
				.slice(0, 6)
				.map((r) => ({
					name: r.name,
					description: r.description,
					url: r.html_url,
					language: r.language,
					stars: r.stargazers_count,
					forks: r.forks_count,
					pushedAt: r.pushed_at
				}))
		};
	},
	{ name: "github-profile", maxAge: 60 * 60, swr: true }
);
