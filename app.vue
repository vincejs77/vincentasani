<template>
  <div id="v-app" class="v-app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
onBeforeMount(() => {
  const appMainDiv = ref();
});
</script>
