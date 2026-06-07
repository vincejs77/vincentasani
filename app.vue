<template>
  <div id="v-app" class="v-app">
    <div class="bg-bluegray-200 top-0 h-1 z-[9999] fixed left-0 right-0">
      <NuxtLoadingIndicator color="false" :height="h" />
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~/store/global";
const nuxtApp = useNuxtApp();

const h = 2;
const color = new Boolean(false);

nuxtApp.hook("page:start", () => {
  useGlobalStore().$state.isLoadingPage = true;
  // commit update
});

nuxtApp.hook("page:finish", () => {
  useGlobalStore().$state.isLoadingPage = false;
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.1rem);
}
</style>
