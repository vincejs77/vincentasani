<template>
	<main class="relative flex flex-col divide-y divide-(--ui-border)">
		<section id="hero" class="px-8 pt-12 pb-10 sm:px-12 sm:pt-16 sm:pb-12">
			<div class="mx-auto w-full max-w-3xl space-y-8">
				<div class="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
					<div class="order-2 flex flex-col gap-2 md:order-1">
						<MagicBlurFade :delay="BLUR_FADE_DELAY" :y-offset="8" blur="8px">
							<h1 class="text-3xl font-semibold tracking-tighter text-highlighted sm:text-4xl lg:text-5xl">
								{{ ui.greeting }} <span class="whitespace-nowrap">{{ DATA.firstName }} 👋</span>
							</h1>
						</MagicBlurFade>
						<MagicBlurFade :delay="BLUR_FADE_DELAY * 2" :y-offset="8" blur="8px">
							<p class="max-w-[600px] text-muted md:text-lg lg:text-xl">{{ DATA.description }}</p>
						</MagicBlurFade>
						<MagicBlurFade :delay="BLUR_FADE_DELAY * 3">
							<div class="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
								<span class="inline-flex items-center gap-1.5">
									<UIcon name="i-lucide-map-pin" class="size-4" />
									{{ DATA.location }}
								</span>
								<span class="inline-flex items-center gap-1.5">
									<span class="relative flex size-2">
										<span class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
										<span class="relative inline-flex size-2 rounded-full bg-emerald-500" />
									</span>
									{{ ui.available }}
								</span>
							</div>
						</MagicBlurFade>
					</div>
					<MagicBlurFade :delay="BLUR_FADE_DELAY" class="order-1 md:order-2">
						<span
							class="relative flex size-24 shrink-0 overflow-hidden rounded-full border border-default shadow-lg ring-4 ring-(--ui-bg-muted) md:size-32"
						>
							<img :src="DATA.avatarUrl" :alt="DATA.name" class="size-full object-cover" />
						</span>
					</MagicBlurFade>
				</div>
			</div>
		</section>

		<section id="about" class="scroll-mt-4 px-8 py-10 sm:px-12 sm:py-12">
			<div class="flex min-h-0 flex-col gap-y-4">
				<MagicBlurFade :delay="BLUR_FADE_DELAY * 3">
					<h2 class="text-xl font-bold text-highlighted">{{ ui.about }}</h2>
				</MagicBlurFade>
				<MagicBlurFade :delay="BLUR_FADE_DELAY * 4">
					<!-- Contenu statique issu de app/data/resume.ts -->
					<p class="prose-links leading-relaxed text-pretty text-muted" v-html="DATA.summary" />
				</MagicBlurFade>
			</div>
		</section>

		<section id="work" class="scroll-mt-4 px-8 py-10 sm:px-12 sm:py-12">
			<div class="flex min-h-0 flex-col gap-y-6">
				<MagicBlurFade :delay="BLUR_FADE_DELAY * 5">
					<h2 class="text-xl font-bold text-highlighted">{{ ui.work }}</h2>
				</MagicBlurFade>
				<MagicBlurFade :delay="BLUR_FADE_DELAY * 6">
					<div class="grid w-full grid-cols-1 gap-6">
						<PortfolioResumeCard v-for="work in DATA.work" :key="work.logoUrl ?? work.company" v-bind="work" />
					</div>
				</MagicBlurFade>
			</div>
		</section>

		<section id="education" class="scroll-mt-4 px-8 py-10 sm:px-12 sm:py-12">
			<div class="flex min-h-0 flex-col gap-y-6">
				<MagicBlurFade :delay="BLUR_FADE_DELAY * 7" in-view>
					<h2 class="text-xl font-bold text-highlighted">{{ ui.education }}</h2>
				</MagicBlurFade>
				<div class="flex flex-col gap-8">
					<MagicBlurFade
						v-for="(education, id) in DATA.education"
						:key="education.company"
						:delay="BLUR_FADE_DELAY * 8 + id * 0.05"
						in-view
					>
						<PortfolioResumeCard v-bind="education" />
					</MagicBlurFade>
				</div>
			</div>
		</section>

		<section id="skills" class="scroll-mt-4 px-8 py-10 sm:px-12 sm:py-12">
			<div class="flex min-h-0 flex-col gap-y-4">
				<MagicBlurFade :delay="BLUR_FADE_DELAY * 9" in-view>
					<h2 class="text-xl font-bold text-highlighted">{{ ui.skills }}</h2>
				</MagicBlurFade>
				<div class="flex flex-wrap gap-2">
					<MagicBlurFade
						v-for="(skill, id) in DATA.skills"
						:key="skill.icon"
						:delay="BLUR_FADE_DELAY * 10 + id * 0.05"
						in-view
					>
						<div
							class="flex h-8 w-fit items-center gap-2 rounded-xl border border-default bg-default px-4 ring-2 ring-(--ui-border)/20"
						>
							<UIcon :name="skill.icon" class="size-4" />
							<span class="text-sm font-medium text-highlighted">{{ skill.name }}</span>
						</div>
					</MagicBlurFade>
				</div>
			</div>
		</section>

		<section id="languages" class="scroll-mt-4 px-8 py-10 sm:px-12 sm:py-12">
			<div class="flex min-h-0 flex-col gap-y-4">
				<MagicBlurFade :delay="BLUR_FADE_DELAY * 11" in-view>
					<h2 class="text-xl font-bold text-highlighted">{{ ui.languages }}</h2>
				</MagicBlurFade>
				<div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
					<MagicBlurFade
						v-for="(language, id) in DATA.languages"
						:key="id"
						:delay="BLUR_FADE_DELAY * 12 + id * 0.05"
						in-view
					>
						<div class="flex h-full flex-col gap-0.5 rounded-xl border border-default px-4 py-3">
							<span class="text-sm font-semibold text-highlighted">{{ language.name }}</span>
							<span class="text-xs text-muted">{{ language.level }}</span>
						</div>
					</MagicBlurFade>
				</div>
			</div>
		</section>

		<section id="projects" class="relative scroll-mt-4 px-8 py-10 sm:px-12 sm:py-12">
			<MagicHatchGutters />
			<MagicBlurFade :delay="BLUR_FADE_DELAY * 13" in-view>
				<div class="flex min-h-0 flex-col gap-y-8">
					<PortfolioSectionHeader :label="ui.projects.label" :title="ui.projects.title">
						{{ ui.projects.text }}
					</PortfolioSectionHeader>
					<div
						class="mx-auto grid w-full max-w-[800px] auto-rows-fr grid-cols-1 gap-3"
						:class="{ 'sm:grid-cols-2': DATA.projects.length > 1 }"
					>
						<MagicBlurFade
							v-for="(project, id) in DATA.projects"
							:key="id"
							:delay="BLUR_FADE_DELAY * 14 + id * 0.05"
							class="h-full"
							in-view
						>
							<PortfolioProjectCard v-bind="project" />
						</MagicBlurFade>
					</div>
				</div>
			</MagicBlurFade>
		</section>

		<section id="events" class="relative scroll-mt-4 px-8 py-10 sm:px-12 sm:py-12">
			<MagicHatchGutters />
			<MagicBlurFade :delay="BLUR_FADE_DELAY * 15" in-view>
				<div class="flex min-h-0 w-full flex-col gap-y-8">
					<PortfolioSectionHeader :label="ui.events.label" :title="ui.events.title">
						{{ ui.events.text }}
					</PortfolioSectionHeader>
					<ol class="flex w-full flex-col p-4">
						<li
							v-for="(event, id) in DATA.events"
							:key="id"
							class="relative flex w-full items-start gap-10"
							:class="id < DATA.events.length - 1 ? 'pb-8' : ''"
						>
							<div class="relative flex shrink-0 items-start justify-center self-stretch">
								<div
									v-if="id < DATA.events.length - 1"
									class="absolute top-0 left-1/2 h-[calc(100%+2rem)] w-px -translate-x-1/2 bg-border"
								/>
								<span
									class="relative z-10 flex size-10 items-center justify-center rounded-full border border-default bg-default text-highlighted shadow ring-2 ring-default"
								>
									<UIcon :name="event.icon" class="size-5" />
								</span>
							</div>
							<div class="flex min-w-0 flex-1 flex-col justify-start gap-2">
								<time class="text-xs text-muted">{{ event.dates }}</time>
								<h3 class="leading-none font-semibold text-highlighted">{{ event.title }}</h3>
								<p class="text-sm text-muted">{{ event.location }}</p>
								<p class="text-sm leading-relaxed break-words text-muted">{{ event.description }}</p>
							</div>
						</li>
					</ol>
				</div>
			</MagicBlurFade>
		</section>

		<section id="contact" class="scroll-mt-4 px-8 py-10 sm:px-12 sm:py-12">
			<MagicBlurFade :delay="BLUR_FADE_DELAY * 16" in-view>
				<div class="relative rounded-xl border border-default p-10">
					<div
						class="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border border-default bg-inverted px-4 py-1"
					>
						<span class="text-sm font-medium text-inverted">{{ ui.contact.label }}</span>
					</div>
					<div class="absolute inset-0 h-1/2 overflow-hidden rounded-xl text-highlighted">
						<MagicFlickeringGrid class="[mask-image:linear-gradient(to_bottom,black,transparent)]" />
					</div>
					<div class="relative flex flex-col items-center gap-4 text-center">
						<h2 class="text-3xl font-bold tracking-tighter text-highlighted sm:text-5xl">{{ ui.contact.title }}</h2>
						<p class="mx-auto max-w-lg text-balance text-muted">
							{{ ui.contact.before }}
							<a :href="`mailto:${DATA.contact.email}`" :class="linkClass">{{ DATA.contact.email }}</a>
							{{ ui.contact.or }}
							<a :href="linkedin" target="_blank" rel="noopener noreferrer" :class="linkClass">LinkedIn</a
							>{{ ui.contact.after }}
						</p>
						<a
							:href="encodeURI(DATA.cvUrl)"
							target="_blank"
							rel="noopener noreferrer"
							class="mt-2 inline-flex items-center gap-2 rounded-xl border border-default bg-default px-4 py-2 text-sm font-medium text-highlighted transition-colors hover:bg-muted"
						>
							<UIcon name="i-lucide-file-down" class="size-4" />
							{{ ui.contact.cv }}
						</a>
					</div>
				</div>
			</MagicBlurFade>
		</section>
	</main>
</template>

<script setup lang="ts">
const { resume: DATA, ui } = useLang();

const BLUR_FADE_DELAY = 0.04;

const linkClass = "text-blue-500 underline-offset-4 hover:underline";
const linkedin = computed(() => DATA.value.contact.social.find((s) => s.name === "LinkedIn")?.url);

useHead({ title: () => `${DATA.value.name} — ${ui.value.role}` });
</script>
