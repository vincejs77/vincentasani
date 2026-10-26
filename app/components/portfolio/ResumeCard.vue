<template>
	<div class="grid w-full grid-cols-1 gap-2">
		<component
			:is="expandable ? 'button' : href ? 'a' : 'div'"
			v-bind="rootAttrs"
			class="group flex w-full items-center justify-between gap-x-3 text-left"
		>
			<div class="flex min-w-0 flex-1 items-center gap-x-3">
				<span
					class="flex size-8 flex-none items-center justify-center overflow-hidden rounded-full border border-default text-xs font-semibold text-muted shadow ring-2 ring-default md:size-10"
					:class="logoUrl ? 'bg-white' : 'bg-muted'"
				>
					<img v-if="logoUrl" :src="logoUrl" :alt="company" class="size-full object-contain" />
					<UIcon v-else-if="logoIcon" :name="logoIcon" class="size-4 md:size-5" />
					<span v-else>{{ initials }}</span>
				</span>
				<div class="flex min-w-0 flex-1 flex-col gap-0.5">
					<div class="flex items-center gap-2 font-semibold leading-none text-highlighted">
						<span class="truncate">{{ company }}</span>
						<span v-if="expandable" class="relative inline-flex size-3.5 flex-none items-center">
							<UIcon
								name="i-lucide-chevron-right"
								class="absolute size-3.5 text-muted transition-all duration-300 ease-out"
								:class="open ? 'opacity-0' : 'opacity-0 group-hover:translate-x-1 group-hover:opacity-100'"
							/>
							<UIcon
								name="i-lucide-chevron-down"
								class="absolute size-3.5 text-muted transition-all duration-200"
								:class="open ? 'rotate-180 opacity-100' : 'opacity-0'"
							/>
						</span>
						<UIcon
							v-else-if="href"
							name="i-lucide-arrow-up-right"
							class="size-3.5 flex-none -translate-x-2 text-muted opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
						/>
					</div>
					<div class="text-sm text-muted">
						{{ title }}<template v-if="location"> · {{ location }}</template>
					</div>
				</div>
			</div>
			<div class="flex flex-none items-center gap-1 text-right text-xs tabular-nums text-muted">
				<span>{{ start }}<template v-if="end"> - {{ end }}</template></span>
			</div>
		</component>

		<div
			v-if="expandable"
			:id="panelId"
			role="region"
			class="grid text-sm transition-[grid-template-rows,opacity] duration-300 ease-out"
			:class="open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
		>
			<div class="overflow-hidden">
				<ul class="ml-11 list-disc space-y-1.5 pt-2 pl-4 text-muted md:ml-13">
					<li v-for="line in description" :key="line">{{ line }}</li>
				</ul>
				<a
					v-if="href"
					:href="href"
					target="_blank"
					rel="noopener noreferrer"
					class="mt-3 ml-11 inline-flex items-center gap-1 text-xs font-medium text-highlighted underline-offset-4 hover:underline md:ml-13"
				>
					{{ ui.visitSite }}
					<UIcon name="i-lucide-arrow-up-right" class="size-3" />
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	company: string;
	title: string;
	location?: string;
	href?: string;
	logoUrl?: string;
	logoIcon?: string;
	start: string;
	end?: string;
	description?: string[];
}>();

const { ui } = useLang();

const open = ref(false);
const panelId = useId();

const expandable = computed(() => !!props.description?.length);

const initials = computed(() =>
	props.company
		.split(/[\s/]+/)
		.filter((w) => /^[A-Za-zÀ-ÿ]/.test(w))
		.slice(0, 2)
		.map((w) => w[0]!.toUpperCase())
		.join("")
);

const rootAttrs = computed(() => {
	if (expandable.value) {
		return {
			type: "button",
			"aria-expanded": open.value,
			"aria-controls": panelId,
			class: "cursor-pointer",
			onClick: () => (open.value = !open.value)
		};
	}
	if (props.href) return { href: props.href, target: "_blank", rel: "noopener noreferrer" };
	return {};
});
</script>
