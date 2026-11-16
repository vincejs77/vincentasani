<template>
	<!-- LinkedIn bloque l'affichage en iframe et n'a pas d'API publique : aperçu construit à partir de app/data/resume.ts -->
	<div class="pb-8">
		<div class="h-28 bg-gradient-to-br from-[#0a66c2] via-[#004182] to-neutral-900 sm:h-36" />
		<div class="relative mx-auto w-full max-w-3xl">
			<img
				:src="resume.avatarUrl"
				:alt="resume.name"
				width="128"
				height="128"
				class="absolute -top-12 left-5 size-24 rounded-full border-4 border-(--ui-bg) object-cover sm:left-8 sm:size-28"
			/>
		</div>

		<div class="mx-auto max-w-3xl space-y-8 px-5 pt-16 sm:px-8">
			<header class="space-y-1">
				<h2 class="text-2xl font-semibold tracking-tight text-highlighted">{{ resume.name }}</h2>
				<p class="text-default">{{ headline }}</p>
				<p class="inline-flex items-center gap-1.5 pt-1 text-sm text-muted">
					<UIcon name="i-lucide-map-pin" class="size-4" />{{ resume.location }}
				</p>
			</header>

			<section class="space-y-4">
				<h3 class="text-sm font-semibold text-highlighted">{{ ui.work }}</h3>
				<ul class="space-y-4">
					<li v-for="job in resume.work" :key="`${job.company}-${job.start}`" class="flex gap-3">
						<span class="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-default bg-elevated">
							<img v-if="'logoUrl' in job && job.logoUrl" :src="job.logoUrl" :alt="job.company" width="40" height="40" loading="lazy" class="size-full object-contain" />
							<UIcon v-else name="i-lucide-briefcase" class="size-5 text-muted" />
						</span>
						<div class="min-w-0">
							<p class="font-medium text-highlighted">{{ job.title }}</p>
							<p class="text-sm text-default">{{ job.company }}</p>
							<p class="text-xs text-muted">{{ job.start }} — {{ job.end }}<template v-if="'location' in job && job.location"> · {{ job.location }}</template></p>
						</div>
					</li>
				</ul>
			</section>

			<section class="space-y-4">
				<h3 class="text-sm font-semibold text-highlighted">{{ ui.education }}</h3>
				<ul class="space-y-4">
					<li v-for="school in resume.education" :key="school.company" class="flex gap-3">
						<span class="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-default bg-elevated">
							<img :src="school.logoUrl" :alt="school.company" width="40" height="40" loading="lazy" class="size-full object-contain" />
						</span>
						<div class="min-w-0">
							<p class="font-medium text-highlighted">{{ school.company }}</p>
							<p class="text-sm text-default">{{ school.title }}</p>
							<p class="text-xs text-muted">{{ school.start }} — {{ school.end }}</p>
						</div>
					</li>
				</ul>
			</section>

			<section class="space-y-3">
				<h3 class="text-sm font-semibold text-highlighted">{{ ui.skills }}</h3>
				<div class="flex flex-wrap gap-1.5">
					<span v-for="skill in resume.skills" :key="skill.name" class="rounded-full border border-default px-2.5 py-0.5 text-xs text-default">{{ skill.name }}</span>
				</div>
			</section>

			<div class="flex justify-center pt-2">
				<a
					:href="url"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-full bg-[#0a66c2] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#004182]"
				>
					<UIcon name="i-simple-icons-linkedin" class="size-4" />
					{{ ui.browser.fullProfile }}
					<UIcon name="i-lucide-arrow-up-right" class="size-4" />
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{ url: string }>();
const emit = defineEmits<{ loaded: [] }>();

const { resume, ui } = useLang();

const headline = computed(() => {
	const current = resume.value.work[0];
	return current ? `${current.title} · ${current.company}` : resume.value.ui.role;
});

onMounted(() => emit("loaded"));
</script>
