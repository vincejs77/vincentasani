<template>
	<Teleport to="body">
		<Transition
			enter-active-class="transition-opacity duration-300 ease-out"
			leave-active-class="transition-opacity duration-200 ease-in"
			enter-from-class="opacity-0"
			leave-to-class="opacity-0"
		>
			<div v-if="target" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" aria-hidden="true" @click="close" />
		</Transition>

		<Transition
			enter-active-class="transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
			leave-active-class="transition duration-200 ease-in"
			enter-from-class="translate-y-full opacity-0 sm:translate-y-6 sm:scale-95"
			leave-to-class="translate-y-full opacity-0 sm:translate-y-6 sm:scale-95"
			@after-leave="expanded = false"
		>
			<div v-if="target" class="pointer-events-none fixed inset-0 z-50 flex items-end justify-center sm:items-center" :class="expanded ? 'sm:p-4' : 'sm:p-6'">
			<div
				ref="windowEl"
				role="dialog"
				aria-modal="true"
				:aria-label="`${ui.browser.preview} — ${target.name}`"
				class="pointer-events-auto flex w-full flex-col overflow-hidden border border-default bg-default shadow-2xl shadow-black/50 transition-[width,height,border-radius] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
				:class="expanded ? 'h-dvh rounded-none sm:h-full sm:rounded-2xl' : 'h-[92dvh] rounded-t-2xl sm:h-[min(82dvh,780px)] sm:w-[min(100%,820px)] sm:rounded-2xl'"
			>
				<!-- Barre d'outils façon Safari -->
				<div class="relative flex h-12 shrink-0 items-center gap-3 border-b border-default bg-elevated/80 px-4 backdrop-blur-xl">
					<div class="group flex shrink-0 items-center gap-2">
						<button type="button" :aria-label="ui.browser.close" :title="ui.browser.close" :class="[dotClass, 'bg-[#ff5f57]']" @click="close">
							<UIcon name="i-lucide-x" :class="glyphClass" />
						</button>
						<button type="button" :aria-label="ui.browser.minimize" :title="ui.browser.minimize" :class="[dotClass, 'bg-[#febc2e]']" @click="close">
							<UIcon name="i-lucide-minus" :class="glyphClass" />
						</button>
						<button
							type="button"
							:aria-label="expanded ? ui.browser.restore : ui.browser.expand"
							:title="expanded ? ui.browser.restore : ui.browser.expand"
							:class="[dotClass, 'bg-[#28c840]']"
							@click="expanded = !expanded"
						>
							<UIcon :name="expanded ? 'i-lucide-minimize-2' : 'i-lucide-maximize-2'" :class="glyphClass" />
						</button>
					</div>

					<!-- Barre d'adresse -->
					<div class="flex h-8 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-lg bg-muted px-3 text-xs text-muted">
						<UIcon name="i-lucide-lock" class="size-3 shrink-0" />
						<span class="truncate">
							<span class="text-highlighted">{{ address.host }}</span>{{ address.path }}
						</span>
					</div>

					<div class="flex shrink-0 items-center gap-1">
						<a
							:href="target.url"
							target="_blank"
							rel="noopener noreferrer"
							:aria-label="`${ui.browser.openOn} ${address.host}`"
							:title="`${ui.browser.openOn} ${address.host}`"
							:class="toolClass"
						>
							<UIcon name="i-lucide-external-link" class="size-4" />
						</a>
						<button ref="closeBtn" type="button" :aria-label="ui.browser.close" :title="ui.browser.close" :class="toolClass" @click="close">
							<UIcon name="i-lucide-x" class="size-4.5" />
						</button>
					</div>

					<!-- Barre de progression de chargement -->
					<div
						class="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-blue-500 transition-[transform,opacity] ease-out"
						:class="loading ? 'duration-[1500ms]' : 'opacity-0 duration-300'"
						:style="{ transform: `scaleX(${loading ? 0.8 : 1})` }"
					/>
				</div>

				<!-- Contenu -->
				<div class="min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-color:var(--ui-border-accented)_transparent] [scrollbar-width:thin]">
					<PortfolioGithubPreview v-if="target.name === 'GitHub'" :url="target.url" @loaded="loading = false" />
					<PortfolioLinkedinPreview v-else-if="target.name === 'LinkedIn'" :url="target.url" @loaded="loading = false" />
				</div>
			</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang="ts">
const { ui } = useLang();
const { target, close } = useBrowserWindow();

const expanded = ref(false);
const loading = ref(false);
const windowEl = ref<HTMLElement | null>(null);
const closeBtn = ref<HTMLButtonElement | null>(null);

const dotClass = "flex size-3 cursor-pointer items-center justify-center rounded-full ring-1 ring-black/20 ring-inset";
const glyphClass = "size-2 text-black/60 opacity-0 transition-opacity group-hover:opacity-100";
const toolClass = "flex size-8 cursor-pointer items-center justify-center rounded-lg text-muted transition-colors hover:bg-muted hover:text-highlighted";

const address = computed(() => {
	if (!target.value) return { host: "", path: "" };
	const u = new URL(target.value.url);
	return { host: u.host.replace(/^www\./, ""), path: u.pathname.replace(/\/$/, "") };
});

let previousFocus: HTMLElement | null = null;

watch(target, async (value, old) => {
	if (!import.meta.client) return;
	if (value) {
		if (!old) previousFocus = document.activeElement as HTMLElement | null;
		loading.value = true;
		document.documentElement.style.overflow = "hidden";
		document.addEventListener("keydown", onKeydown);
		await nextTick();
		closeBtn.value?.focus();
	} else {
		document.documentElement.style.overflow = "";
		document.removeEventListener("keydown", onKeydown);
		previousFocus?.focus();
		previousFocus = null;
	}
});

// Garde le focus clavier à l'intérieur de la fenêtre ; Échap la ferme.
const onKeydown = (e: KeyboardEvent) => {
	if (e.key === "Escape") {
		e.preventDefault();
		close();
		return;
	}
	if (e.key !== "Tab" || !windowEl.value) return;
	const focusables = windowEl.value.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
	const first = focusables[0];
	const last = focusables[focusables.length - 1];
	if (!first || !last) return;
	if (e.shiftKey && document.activeElement === first) {
		e.preventDefault();
		last.focus();
	} else if (!e.shiftKey && document.activeElement === last) {
		e.preventDefault();
		first.focus();
	}
};

onBeforeUnmount(() => {
	if (!import.meta.client) return;
	document.documentElement.style.overflow = "";
	document.removeEventListener("keydown", onKeydown);
});
</script>
