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
			<div class="grid gap-3 sm:grid-cols-2">
				<div v-for="i in 4" :key="i" class="h-28 rounded-xl bg-muted" />
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

			<section class="space-y-3">
				<h3 class="text-sm font-semibold text-highlighted">{{ ui.browser.recentRepos }}</h3>
				<div class="grid gap-3 sm:grid-cols-2">
					<a
						v-for="repo in data.repos"
						:key="repo.name"
						:href="repo.url"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex flex-col gap-2 rounded-xl border border-default p-4 transition-colors hover:bg-elevated"
					>
						<span class="flex items-center gap-2 font-medium text-highlighted">
							<UIcon name="i-lucide-book-marked" class="size-4 shrink-0 text-muted" />
							<span class="truncate group-hover:underline">{{ repo.name }}</span>
						</span>
						<p class="line-clamp-2 flex-1 text-sm text-muted">{{ repo.description || "—" }}</p>
						<span class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
							<span v-if="repo.language" class="inline-flex items-center gap-1.5">
								<span class="size-2.5 rounded-full" :style="{ background: languageColor(repo.language) }" />{{ repo.language }}
							</span>
							<span v-if="repo.stars" class="inline-flex items-center gap-1"><UIcon name="i-lucide-star" class="size-3.5" />{{ repo.stars }}</span>
							<span v-if="repo.forks" class="inline-flex items-center gap-1"><UIcon name="i-lucide-git-fork" class="size-3.5" />{{ repo.forks }}</span>
							<span>{{ ui.browser.updated }} {{ formatDate(repo.pushedAt) }}</span>
						</span>
					</a>
				</div>
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
const { data, status, error } = useLazyFetch("/api/github", { key: "github-profile", server: false });

watch(status, (s) => (s === "success" || s === "error") && emit("loaded"), { immediate: true });

const ctaClass = "inline-flex items-center gap-2 rounded-xl border border-default bg-default px-4 py-2 text-sm font-medium text-highlighted transition-colors hover:bg-muted";

const formatDate = (iso: string) => new Date(iso).toLocaleDateString(locale.value, { month: "short", year: "numeric" });

// Couleurs officielles de GitHub Linguist pour les langages courants
const COLORS: Record<string, string> = {
	JavaScript: "#f1e05a",
	TypeScript: "#3178c6",
	Vue: "#41b883",
	PHP: "#4F5D95",
	Python: "#3572A5",
	HTML: "#e34c26",
	CSS: "#563d7c",
	SCSS: "#c6538c",
	Shell: "#89e051",
	Dart: "#00B4AB",
	Java: "#b07219",
	"C#": "#178600",
	Go: "#00ADD8",
	Blade: "#f7523f",
	HCL: "#844FBA"
};
const languageColor = (lang: string) => COLORS[lang] ?? "#8b949e";
</script>
