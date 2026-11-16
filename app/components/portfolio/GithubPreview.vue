<template>
	<div class="mx-auto w-full max-w-3xl p-5 sm:p-8">
		<!-- Squelette de chargement -->
		<div v-if="status === 'pending' || status === 'idle'" class="animate-pulse space-y-6">
			<div class="flex items-center gap-4">
				<div class="size-20 rounded-full bg-muted" />
				<div class="flex-1 space-y-2">
					<div class="h-5 w-40 rounded bg-muted" />
					<div class="h-4 w-24 rounded bg-muted" />
				</div>
			</div>
			<div class="h-36 rounded-xl bg-muted" />
			<div class="space-y-2">
				<div v-for="i in 4" :key="i" class="h-6 rounded bg-muted" />
			</div>
		</div>

		<div v-else-if="error || !data" class="flex flex-col items-center gap-4 py-16 text-center">
			<UIcon name="i-simple-icons-github" class="size-10 text-muted" />
			<p class="text-muted">{{ ui.browser.error }}</p>
			<a :href="url" target="_blank" rel="noopener noreferrer" :class="ctaClass">
				{{ ui.browser.openOn }} github.com
				<UIcon name="i-lucide-arrow-up-right" class="size-4" />
			</a>
		</div>

		<div v-else class="space-y-8">
			<header class="flex flex-col gap-5 sm:flex-row sm:items-center">
				<img :src="data.avatarUrl" :alt="data.name ?? data.login" width="96" height="96" class="size-20 rounded-full border border-default sm:size-24" />
				<div class="min-w-0 flex-1 space-y-1">
					<h2 class="text-2xl font-semibold tracking-tight text-highlighted">{{ data.name ?? data.login }}</h2>
					<p class="text-muted">{{ data.login }}</p>
					<p v-if="data.bio" class="text-sm text-default">{{ data.bio }}</p>
					<div class="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-sm text-muted">
						<span v-if="data.location" class="inline-flex items-center gap-1.5">
							<UIcon name="i-lucide-map-pin" class="size-4" />{{ data.location }}
						</span>
						<span class="inline-flex items-center gap-1.5">
							<UIcon name="i-lucide-book-marked" class="size-4" />
							<strong class="text-highlighted">{{ data.publicRepos }}</strong> {{ ui.browser.repositories }}
						</span>
						<span class="inline-flex items-center gap-1.5">
							<UIcon name="i-lucide-users" class="size-4" />
							<strong class="text-highlighted">{{ data.followers }}</strong> {{ ui.browser.followers }} ·
							<strong class="text-highlighted">{{ data.following }}</strong> {{ ui.browser.following }}
						</span>
					</div>
				</div>
			</header>

			<!-- Graphe de contributions (12 derniers mois) -->
			<section v-if="graph" class="space-y-3">
				<h3 class="text-sm font-semibold text-highlighted">
					{{ graph.total.toLocaleString(locale) }} {{ ui.browser.contributionsYear }}
				</h3>
				<div class="rounded-xl border border-default p-4">
					<div ref="graphEl" class="overflow-x-auto pb-1 [scrollbar-width:none]">
						<div class="relative pt-5" :style="{ minWidth: `${graph.weeks * MIN_STEP}px` }">
							<span
								v-for="m in graph.months"
								:key="m.week"
								class="absolute top-0 text-[11px] text-muted"
								:style="{ left: `${(m.week / graph.weeks) * 100}%` }"
								>{{ m.label }}</span
							>
							<div class="grid grid-flow-col gap-[3px]" :style="{ gridTemplateRows: 'repeat(7, auto)', gridTemplateColumns: `repeat(${graph.weeks}, 1fr)` }">
								<template v-for="(day, i) in graph.cells" :key="i">
									<span v-if="!day" class="aspect-square" />
									<span v-else class="aspect-square rounded-[2px]" :style="{ background: LEVELS[day.level] }" :title="dayLabel(day)" />
								</template>
							</div>
						</div>
					</div>
					<div class="mt-3 flex items-center justify-end gap-1 text-[11px] text-muted">
						{{ ui.browser.less }}
						<span v-for="color in LEVELS" :key="color" class="size-2.5 rounded-[2px]" :style="{ background: color }" />
						{{ ui.browser.more }}
					</div>
				</div>
			</section>

			<!-- Activité publique récente -->
			<section v-if="data.activity?.length" class="space-y-3">
				<h3 class="text-sm font-semibold text-highlighted">{{ ui.browser.recentActivity }}</h3>
				<ol class="relative space-y-1 border-l border-default pl-5">
					<li v-for="(item, i) in data.activity" :key="i" class="relative">
						<span class="absolute top-2 -left-[31px] flex size-5 items-center justify-center rounded-full border border-default bg-default">
							<UIcon :name="ICONS[item.type] ?? 'i-lucide-activity'" class="size-3 text-muted" />
						</span>
						<a
							:href="`https://github.com/${item.repo}`"
							target="_blank"
							rel="noopener noreferrer"
							class="flex flex-wrap items-baseline gap-x-2 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-elevated"
						>
							<span class="text-muted">{{ eventLabel(item) }}</span>
							<span class="font-medium text-highlighted">{{ repoName(item.repo) }}</span>
							<span v-if="item.count > 1" class="rounded-full bg-muted px-1.5 text-xs text-default">×{{ item.count }}</span>
							<span class="ml-auto text-xs text-muted">{{ formatDate(item.date) }}</span>
						</a>
					</li>
				</ol>
			</section>

			<div class="flex justify-center pt-2">
				<a :href="url" target="_blank" rel="noopener noreferrer" :class="ctaClass">
					<UIcon name="i-simple-icons-github" class="size-4" />
					{{ ui.browser.openOn }} github.com
					<UIcon name="i-lucide-arrow-up-right" class="size-4" />
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{ url: string }>();
const emit = defineEmits<{ loaded: [] }>();

const { locale, ui } = useLang();

// Clé fixe : la réponse reste en mémoire, la fenêtre se rouvre instantanément.
const { data, status, error } = useLazyFetch("/api/github", { key: "github-activity", server: false });

type Profile = NonNullable<typeof data.value>;
type ContributionDay = NonNullable<Profile["contributions"]>["days"][number];
type ActivityItem = Profile["activity"][number];

watch(status, (s) => (s === "success" || s === "error") && emit("loaded"), { immediate: true });

const ctaClass = "inline-flex items-center gap-2 rounded-xl border border-default bg-default px-4 py-2 text-sm font-medium text-highlighted transition-colors hover:bg-muted";

// Graphe : une colonne par semaine (dimanche → samedi), comme sur GitHub.
// Les cases s'étirent pour remplir la largeur ; en dessous de MIN_STEP px par semaine, le graphe défile.
const MIN_STEP = 12;
const LEVELS = ["var(--ui-bg-muted)", "#0e4429", "#006d32", "#26a641", "#39d353"];

const graph = computed(() => {
	const c = data.value?.contributions;
	if (!c?.days.length) return null;
	const cells: (ContributionDay | null)[] = [...Array(new Date(c.days[0]!.date).getUTCDay()).fill(null), ...c.days];

	const weeks = Math.ceil(cells.length / 7);
	const months: { week: number; label: string }[] = [];
	for (let week = 0; week < weeks; week++) {
		const day = cells.slice(week * 7, week * 7 + 7).find(Boolean);
		if (!day) continue;
		const d = new Date(day.date);
		const prev = months.at(-1);
		const label = d.toLocaleDateString(locale.value, { month: "short", timeZone: "UTC" });
		if (prev?.label === label) continue;
		// Pas d'étiquette coincée contre la précédente (mois incomplet en début de graphe)
		if (prev && week - prev.week < 3) months.pop();
		months.push({ week, label });
	}
	// Une étiquette collée au bord droit déborderait du graphe : on la retire.
	if (months.length && months.at(-1)!.week > weeks - 3) months.pop();
	return { total: c.total, cells, months, weeks };
});

const dayLabel = (day: ContributionDay) => {
	const date = new Date(day.date).toLocaleDateString(locale.value, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
	if (!day.count) return `${ui.value.browser.noContribution} — ${date}`;
	return `${day.count} ${day.count > 1 ? ui.value.browser.contributionsWord : ui.value.browser.contribution} — ${date}`;
};

// Le graphe défile sur petit écran : on montre d'abord les semaines les plus récentes.
const graphEl = ref<HTMLElement | null>(null);
watch(graphEl, (el) => el && (el.scrollLeft = el.scrollWidth));

// Activité récente
const ICONS: Record<string, string> = {
	PushEvent: "i-lucide-git-commit-horizontal",
	CreateEvent: "i-lucide-git-branch-plus",
	DeleteEvent: "i-lucide-trash-2",
	PullRequestEvent: "i-lucide-git-pull-request",
	PullRequestReviewEvent: "i-lucide-eye",
	IssuesEvent: "i-lucide-circle-dot",
	IssueCommentEvent: "i-lucide-message-square",
	WatchEvent: "i-lucide-star",
	ForkEvent: "i-lucide-git-fork",
	ReleaseEvent: "i-lucide-tag",
	PublicEvent: "i-lucide-globe"
};

const eventLabel = (item: ActivityItem) => {
	const labels = ui.value.browser.events;
	if (item.type === "CreateEvent" && item.refType === "repository") return labels.NewRepo;
	return labels[item.type] ?? labels.default;
};

const repoName = (repo: string) => (data.value && repo.startsWith(`${data.value.login}/`) ? repo.slice(data.value.login.length + 1) : repo);

const formatDate = (iso: string) => new Date(iso).toLocaleDateString(locale.value, { day: "numeric", month: "short" });
</script>
