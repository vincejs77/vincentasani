<template>
  <div
    id="v-default-layout"
    class="v-default-layout text-lg h-full overflow-hidden bg-white dark:bg-gray-950 text-gray-950 dark:text-gray-200"
  >
    <Navbar />
    <div class="pt-[68px] v-default-layout--main min-h-screen">
      <slot />
    </div>
    <Footer />
  </div>
</template>
<script setup></script>
