<template>
  <div id="v-app" class="dark v-app">
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
