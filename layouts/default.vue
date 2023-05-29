<template>
  <div
    id="v-default-layout"
    class="v-default-layout h-full overflow-hidden bg-white dark:bg-black"
  >
    <Navbar />
    <div class="v-default-layout--main min-h-screen">
      <slot />
    </div>
    <Footer />
  </div>
</template>
<script setup></script>
