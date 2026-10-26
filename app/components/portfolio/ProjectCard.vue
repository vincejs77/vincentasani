<template>
	<div
		class="flex h-full flex-col overflow-hidden rounded-xl border border-default transition-all duration-200 hover:ring-2 hover:ring-(--ui-bg-muted)"
	>
		<div class="relative shrink-0">
			<component :is="href ? 'a' : 'div'" v-bind="href ? linkAttrs(href) : {}" class="block">
				<img v-if="image" :src="image" :alt="title" class="h-48 w-full object-cover object-top" />
				<div v-else class="relative h-48 w-full overflow-hidden bg-muted text-highlighted">
					<MagicFlickeringGrid
						class="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]"
						:square-size="3"
						:grid-gap="5"
						:max-opacity="0.25"
					/>
					<div class="absolute inset-0 flex items-center justify-center">
						<span
							class="flex size-16 items-center justify-center rounded-2xl border border-default bg-default shadow-lg ring-4 ring-(--ui-bg-muted)"
						>
							<UIcon :name="icon || 'i-lucide-code-xml'" class="size-7" />
						</span>
					</div>
				</div>
			</component>
			<div v-if="href || source" class="absolute top-2 right-2 flex flex-wrap gap-2">
				<a v-if="href" v-bind="linkAttrs(href)" :class="pillClass">
					<UIcon name="i-lucide-globe" class="size-3" />
					{{ ui.website }}
				</a>
				<a v-if="source" v-bind="linkAttrs(source)" :class="pillClass">
					<UIcon name="i-simple-icons-github" class="size-3" />
					{{ ui.source }}
				</a>
			</div>
		</div>

		<div class="flex flex-1 flex-col gap-3 p-6">
			<div class="flex items-start justify-between gap-2">
				<div class="flex flex-col gap-1">
					<h3 class="font-semibold text-highlighted">{{ title }}</h3>
					<time class="text-xs text-muted">{{ dates }}</time>
				</div>
				<a
					v-if="href"
					v-bind="linkAttrs(href)"
					:aria-label="`${ui.open} ${title}`"
					class="rounded-sm text-muted transition-colors hover:text-highlighted"
				>
					<UIcon name="i-lucide-arrow-up-right" class="size-4" />
				</a>
			</div>
			<p class="flex-1 text-xs leading-relaxed text-pretty text-muted">{{ description }}</p>
			<div v-if="technologies.length" class="mt-auto flex flex-wrap gap-1">
				<span
					v-for="tech in technologies"
					:key="tech"
					class="inline-flex h-6 w-fit items-center rounded-md border border-default px-2 text-[11px] font-medium text-highlighted"
				>
					{{ tech }}
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		title: string;
		dates: string;
		description: string;
		href?: string;
		source?: string;
		image?: string;
		icon?: string;
		technologies?: string[];
	}>(),
	{ technologies: () => [] }
);

const { ui } = useLang();

const pillClass =
	"flex items-center gap-1.5 rounded-md bg-black px-2.5 py-0.5 text-xs font-semibold text-white shadow transition-colors hover:bg-black/90";

const linkAttrs = (url: string) => ({ href: url, target: "_blank", rel: "noopener noreferrer" });
</script>
