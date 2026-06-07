<template>
  <NuxtLink
    class="relative group inline-block font-heading font-medium hover:text-blue text-base overflow-hidden"
    :to="link"
  >
    <p class="text-base font-semibold mb-0 gradient-text">
      {{ text }}
    </p>
    <div v-if="svg !== null" class="w-auto p-1">
      <component :is="svg" class="icon h-4 w-4 flex-shrink-0" aria-hidden="true" />
    </div>
    <div
      class="absolute w-full transform -translate-x-0 group-hover:block hidden h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 transition ease-in-out duration-500"
    ></div>
    <div
      class="w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gray-300 dark:bg-gray-700 transition ease-in-out duration-500"
    ></div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  text: String,
  link: String,
  svg: {
    type: Function,
    default: null,
  },
});
</script>
