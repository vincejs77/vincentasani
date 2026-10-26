// Données du portfolio — source : public/docs/CV - Vincent ASANI - Aug 2026.pdf
// Les textes traduits s'écrivent { fr: "...", en: "..." } ; useLang() renvoie la version de la langue active.
// Les champs `summary` acceptent du HTML simple (liens, gras).

export const LOCALES = ["fr", "en"] as const;
export type Locale = (typeof LOCALES)[number];

type L<T = string> = Record<Locale, T>;

// Remplace récursivement chaque { fr, en } par la valeur de la langue choisie
export type Localized<T> = T extends L<infer U>
	? Localized<U>
	: T extends readonly (infer A)[]
		? Localized<A>[]
		: T extends object
			? { [K in keyof T]: Localized<T[K]> }
			: T;

const isLocalized = (value: object): value is L<unknown> => {
	const keys = Object.keys(value);
	return keys.length === LOCALES.length && LOCALES.every((l) => keys.includes(l));
};

export function localize<T>(value: T, locale: Locale): Localized<T> {
	if (Array.isArray(value)) return value.map((v) => localize(v, locale)) as Localized<T>;
	if (value && typeof value === "object") {
		if (isLocalized(value)) return localize(value[locale], locale) as Localized<T>;
		return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, localize(v, locale)])) as Localized<T>;
	}
	return value as Localized<T>;
}

const PRESENT: L = { fr: "Présent", en: "Present" };

export const RESUME = {
	name: "Vincent Asani",
	firstName: "Vincent",
	initials: "VA",
	avatarUrl: "/img/me/avatar.jpg",
	location: { fr: "Kinshasa, RDC", en: "Kinshasa, DRC" },
	url: "https://www.vincentasani.me",
	cvUrl: "/docs/CV - Vincent ASANI - Aug 2026.pdf",
	description: {
		fr: "Je conçois des produits numériques utiles et j'accompagne les équipes dans leur transformation digitale.",
		en: "I build useful digital products and help teams through their digital transformation."
	},
	summary: {
		fr: `Ingénieur logiciel polyvalent et chef de projet, avec une expertise en technologie, innovation et développement d'entreprise. Je suis aujourd'hui <a href="#work">Responsable informatique à l'Institut français de RDC</a>, où je pilote la transformation numérique de l'institution. Avant cela, j'ai <a href="#work">dirigé la technologie chez Wito XR Studio</a>, <a href="#events">coordonné EclosionHack 2024</a> et porté l'<a href="#events">AR/VR Africa Metathon</a> en RDC. Je suis diplômé en <a href="#education">informatique de l'Université Catholique de Bukavu</a>.`,
		en: `Versatile software engineer and project manager with deep expertise in technology, innovation and business development. I'm currently <a href="#work">Head of IT at the Institut français de RDC</a>, where I lead the institution's digital transformation. Before that, I <a href="#work">led technology at Wito XR Studio</a>, <a href="#events">coordinated EclosionHack 2024</a> and ran the <a href="#events">AR/VR Africa Metathon</a> in the DRC. I hold a <a href="#education">degree in Computer Science from the Université Catholique de Bukavu</a>.`
	},

	// Textes de l'interface (titres de sections, boutons…)
	ui: {
		greeting: { fr: "Salut, moi c'est", en: "Hi, I'm" },
		role: { fr: "Ingénieur logiciel", en: "Software Engineer" },
		available: { fr: "Disponible pour de nouveaux projets", en: "Available for new projects" },
		about: { fr: "À propos", en: "About" },
		work: { fr: "Expérience professionnelle", en: "Work Experience" },
		education: { fr: "Formation", en: "Education" },
		skills: { fr: "Compétences", en: "Skills" },
		languages: { fr: "Langues", en: "Languages" },
		visitSite: { fr: "Voir le site", en: "Visit website" },
		website: { fr: "Plateforme web", en: "Web platform" },
		source: { fr: "Code", en: "Source" },
		open: { fr: "Ouvrir", en: "Open" },
		theme: { fr: "Thème", en: "Theme" },
		switchTheme: { fr: "Changer de thème", en: "Toggle theme" },
		language: { fr: "Langue", en: "Language" },
		projects: {
			label: { fr: "Mes projets", en: "My Projects" },
			title: { fr: "Découvrez mes réalisations", en: "Check out my latest work" },
			text: {
				fr: "Le portail web unifié de l'Institut français de RDC, que j'ai conçu et développé de bout en bout.",
				en: "The unified web portal of the Institut français de RDC, which I designed and built end to end."
			}
		},
		events: {
			label: { fr: "Communauté", en: "Community" },
			title: { fr: "J'aime fédérer les talents", en: "I like bringing talent together" },
			text: {
				fr: "Au-delà du code, je conçois et j'anime des programmes qui révèlent les talents tech et créatifs en RDC : hackathons, bootcamps et incubateurs.",
				en: "Beyond code, I design and run programs that surface tech and creative talent in the DRC: hackathons, bootcamps and incubators."
			}
		},
		contact: {
			label: { fr: "Contact", en: "Contact" },
			title: { fr: "Restons en contact", en: "Get in Touch" },
			before: { fr: "Une question, un projet ? Écrivez-moi à", en: "Have a question or a project? Email me at" },
			or: { fr: "ou sur", en: "or reach out on" },
			after: { fr: ", je réponds dès que possible.", en: ", and I'll get back to you as soon as I can." },
			cv: { fr: "Télécharger mon CV", en: "Download my resume" }
		}
	},

	contact: {
		email: "hello@vincentasani.me",
		social: [
			{ name: "GitHub", url: "https://github.com/vincejs77", icon: "i-simple-icons-github" },
			{ name: "LinkedIn", url: "https://www.linkedin.com/in/vincent-asani-93673b182/", icon: "i-simple-icons-linkedin" }
		]
	},

	navbar: [
		{ to: "/", icon: "i-lucide-house", label: { fr: "Accueil", en: "Home" } },
		{ to: "/articles", icon: "i-lucide-notebook-pen", label: { fr: "Articles", en: "Blog" } }
	],

	skills: [
		{ name: "Nuxt.js", icon: "i-logos-nuxt-icon" },
		{ name: "Vue.js", icon: "i-logos-vue" },
		{ name: "Next.js", icon: "i-logos-nextjs-icon" },
		{ name: "React", icon: "i-logos-react" },
		{ name: "Node.js", icon: "i-logos-nodejs-icon" },
		{ name: "JavaScript", icon: "i-logos-javascript" },
		{ name: "PHP", icon: "i-logos-php" },
		{ name: "Python", icon: "i-logos-python" },
		{ name: "Tailwind CSS", icon: "i-logos-tailwindcss-icon" },
		{ name: "PostgreSQL", icon: "i-logos-postgresql" },
		{ name: "MySQL", icon: "i-logos-mysql-icon" },
		{ name: "MongoDB", icon: "i-logos-mongodb-icon" },
		{ name: "Sanity", icon: "i-logos-sanity" },
		{ name: "WordPress", icon: "i-logos-wordpress-icon" },
		{ name: "Git", icon: "i-logos-git-icon" },
		{ name: "Terraform", icon: "i-logos-terraform-icon" },
		{ name: "Ansible", icon: "i-logos-ansible" },
		{ name: "Grafana", icon: "i-logos-grafana" },
		{ name: "Linux", icon: "i-logos-linux-tux" },
		{ name: "Figma", icon: "i-logos-figma" },
		{ name: "Microsoft 365", icon: "i-logos-microsoft-icon" },
		{ name: { fr: "Intégration IA / LLM", en: "AI / LLM integration" }, icon: "i-lucide-sparkles" }
	],

	languages: [
		{ name: { fr: "Français", en: "French" }, level: { fr: "Courant — professionnel", en: "Fluent — professional" } },
		{ name: "Swahili", level: { fr: "Langue maternelle", en: "Native" } },
		{ name: { fr: "Anglais", en: "English" }, level: { fr: "Intermédiaire — professionnel", en: "Intermediate — professional" } }
	],

	work: [
		{
			company: { fr: "Institut français de RDC", en: "Institut français de RDC" },
			logoUrl: "/img/logos/ifrdc.png",
			title: { fr: "Responsable informatique", en: "Head of IT" },
			location: "Kinshasa",
			href: "https://www.ifrdc.org",
			start: { fr: "Avr. 2025", en: "Apr 2025" },
			end: PRESENT,
			description: {
				fr: [
					"Conception et développement du portail web unifié de l'IF RDC couvrant quatre antennes : architecture, front-end, back-end et mise en production",
					"Pilotage de la transformation numérique de l'institution et des décisions techniques",
					"Gestion des prestataires et cadrage des besoins",
					"Infrastructure, administration Microsoft 365 et Entra ID, sécurité des données et plan de continuité d'activité",
					"Formation du personnel aux outils numériques"
				],
				en: [
					"Designed and built the unified IF DRC web portal covering four branches: architecture, front-end and back-end development, production rollout",
					"Led the institution's digital transformation and owned technical decision-making",
					"Managed vendor relationships and scoped requirements",
					"Run infrastructure, Microsoft 365 and Entra ID administration, data security and the business continuity plan",
					"Trained staff on digital tools"
				]
			}
		},
		{
			company: "Find Solution Technology",
			logoUrl: "/img/logos/find-solution-technology.png",
			title: { fr: "Développeur Full-stack", en: "Full-stack Developer" },
			location: "Goma",
			start: { fr: "Juin 2023", en: "Jun 2023" },
			end: PRESENT,
			description: {
				fr: [
					"Conception et déploiement d'applications métier pour des clients entreprises, du cadrage à la production",
					"Développement front-end et back-end, intégration d'API tierces, conception de schémas de bases de données",
					"Gestion de projets clients et supervision d'équipes techniques pour garantir les délais",
					"Conseil technique et support utilisateurs"
				],
				en: [
					"Build and deploy business applications for enterprise clients, from requirements to production",
					"Develop front-end and back-end features, integrate third-party APIs, design database schemas",
					"Manage client projects and supervise technical teams to ensure on-time delivery",
					"Provide technical advice and user support"
				]
			}
		},
		{
			company: { fr: "Ambassade de France en RDC", en: "Embassy of France in the DRC" },
			logoUrl: "/img/logos/ambassade-france.png",
			title: { fr: "Coordinateur de programme — FEF Création", en: "Program Coordinator — FEF Création" },
			location: "Goma",
			start: { fr: "Oct. 2023", en: "Oct 2023" },
			end: { fr: "Déc. 2024", en: "Dec 2024" },
			description: {
				fr: [
					"Sélection de projets à impact social dans les Industries Culturelles et Créatives : analyse des candidatures, évaluation de la faisabilité technique, arbitrages finaux",
					"Conception et animation d'un programme d'incubation pour entrepreneurs culturels, centré sur les modèles économiques et les technologies émergentes (XR, IA)",
					"Coordination d'EclosionHack 2024, hackathon national réunissant développeurs et porteurs de projets",
					"Formations sur les outils d'IA et le marketing digital"
				],
				en: [
					"Selected social-impact projects in the Cultural and Creative Industries: reviewed applications, assessed technical feasibility, made final calls",
					"Designed and ran an incubation program for cultural entrepreneurs, centered on business models and emerging tech (XR, AI)",
					"Coordinated EclosionHack 2024, a national hackathon bringing together developers and project leads",
					"Delivered training sessions on AI tools and digital marketing"
				]
			}
		},
		{
			company: "Wito XR Studio",
			logoUrl: "/img/logos/wito-xr-studio.png",
			title: { fr: "Directeur technique", en: "Director of Technology" },
			location: "Goma",
			start: { fr: "Oct. 2022", en: "Oct 2022" },
			end: { fr: "Déc. 2024", en: "Dec 2024" },
			description: {
				fr: [
					"Direction du développement d'applications VR/AR : roadmap technique et priorisation des fonctionnalités",
					"Intégration de solutions tierces (authentification, gestion de contenu, API externes)",
					"Administration de serveurs Linux et déploiements cloud",
					"Formation des équipes aux outils collaboratifs et d'IA"
				],
				en: [
					"Led VR/AR application development: set the technical roadmap and prioritized features",
					"Integrated third-party solutions (authentication, content management, external APIs)",
					"Administered Linux servers and cloud deployments",
					"Trained teams on collaborative and AI tools"
				]
			}
		},
		{
			company: "AR/VR Africa Metathon 2022",
			logoIcon: "i-logos-meta-icon",
			title: "Country Lead",
			location: "Goma",
			start: { fr: "Sept. 2022", en: "Sep 2022" },
			end: { fr: "Avr. 2023", en: "Apr 2023" },
			description: {
				fr: [
					"Programme soutenu par Meta, Blackrhino VR et IMISI 3D pour révéler les talents africains des technologies immersives",
					"Organisation de hackathons en présentiel et en ligne à travers la RDC",
					"Accompagnement des lauréats pendant un bootcamp de trois mois pour développer leur MVP",
					"Développement de partenariats locaux et coordination des formations pré-hackathon"
				],
				en: [
					"Program backed by Meta, Blackrhino VR and IMISI 3D to surface African talent in immersive technologies",
					"Organized in-person and virtual hackathons across the DRC",
					"Supported winners through a three-month MVP development bootcamp",
					"Built local partnerships and coordinated pre-hackathon training"
				]
			}
		},
		{
			company: "Freelance",
			logoIcon: "i-lucide-briefcase",
			title: { fr: "Ingénieur logiciel & administrateur réseau", en: "Software Engineer & Network Administrator" },
			location: "Bukavu",
			start: { fr: "Mars 2017", en: "Mar 2017" },
			end: { fr: "Août 2022", en: "Aug 2022" },
			description: {
				fr: [
					"Développement d'applications web : sites institutionnels, ERP légers",
					"Conception et déploiement de systèmes d'information complets",
					"Administration réseau (TCP/IP, VLAN, VPN, PPPoE) et sécurité"
				],
				en: [
					"Built web applications: institutional sites, lightweight ERPs",
					"Designed and deployed complete information systems",
					"Network administration (TCP/IP, VLAN, VPN, PPPoE) and security"
				]
			}
		}
	],

	education: [
		{
			company: "Université Catholique de Bukavu",
			logoUrl: "/img/logos/ucbukavu.png",
			title: {
				fr: "Licence en informatique (cursus de 5 ans)",
				en: "Bachelor's degree in Computer Science (5-year program)"
			},
			location: "Bukavu",
			href: "https://www.ucbukavu.ac.cd",
			start: "2016",
			end: "2021"
		}
	],

	projects: [
		{
			title: { fr: "Portail web IF RDC", en: "IF DRC web portal" },
			dates: { fr: "Avr. 2025 — Présent", en: "Apr 2025 — Present" },
			href: "https://www.ifrdc.org",
			image: "/img/projects/ifrdc.png",
			description: {
				fr: "Portail web unifié de l'Institut français de RDC, regroupant ses quatre antennes. Architecture, développement front-end et back-end, puis mise en production.",
				en: "Unified web portal for the Institut français de RDC, covering its four branches. Architecture, front-end and back-end development, then production rollout."
			},
			technologies: [] as string[]
		}
	],

	events: [
		{
			title: "EclosionHack 2024",
			dates: "2024",
			location: { fr: "RDC", en: "DRC" },
			icon: "i-lucide-trophy",
			description: {
				fr: "Coordination d'un hackathon national réunissant développeurs et porteurs de projets, dans le cadre du programme FEF Création de l'Ambassade de France.",
				en: "Coordinated a national hackathon bringing together developers and project leads, as part of the French Embassy's FEF Création program."
			}
		},
		{
			title: { fr: "Incubateur FEF Création", en: "FEF Création Incubator" },
			dates: { fr: "Oct. 2023 — Déc. 2024", en: "Oct 2023 — Dec 2024" },
			location: { fr: "Goma, RDC", en: "Goma, DRC" },
			icon: "i-lucide-rocket",
			description: {
				fr: "Conception et animation d'un programme d'incubation pour entrepreneurs culturels, centré sur les modèles économiques et les technologies émergentes (XR, IA).",
				en: "Designed and ran an incubation program for cultural entrepreneurs, centered on business models and emerging tech (XR, AI)."
			}
		},
		{
			title: "AR/VR Africa Metathon 2022",
			dates: { fr: "Sept. 2022 — Avr. 2023", en: "Sep 2022 — Apr 2023" },
			location: { fr: "Goma, RDC", en: "Goma, DRC" },
			icon: "i-lucide-glasses",
			description: {
				fr: "Country Lead d'un programme soutenu par Meta, Blackrhino VR et IMISI 3D : hackathons en présentiel et en ligne, puis bootcamp de trois mois pour faire émerger les MVP des lauréats.",
				en: "Country Lead for a program backed by Meta, Blackrhino VR and IMISI 3D: in-person and virtual hackathons, followed by a three-month bootcamp to help winners ship their MVPs."
			}
		}
	]
};

export type Resume = Localized<typeof RESUME>;
