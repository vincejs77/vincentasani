<template>
  <div class="v-index">
    <section class="v-wrapper dark:text-gray-300 text-lg">
      <UContainer class="py-16">
        <p class="mb-4"></p>
        <h1 class="text-4xl sm:text-6xl font-black dark:text-white">
          Details make perfection and perfection is not a detail
        </h1>

        <div class="mt-8">
          <span class="mr-10 relative text-gray-600 dark:text-gray-300 font-semibold"
            >Leonardo da Vinci
            <div
              class="w-6 h-1 bg-gray-400 absolute -right-7 top-1/2 -translate-y-1/2"
            ></div>
          </span>
          the beauty and accomplishment of a work depends only on the quality of its
          details.
        </div>
      </UContainer>
    </section>
    <section class="v-wrapper dark:text-gray-300 text-lg">
      <UContainer class="pt-8 pb-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div class="v-box flex flex-col justify-between">
          <div>
            <h2 class="text-xl font-bold">About me</h2>
          </div>
          <div>
            <p>
              I am a software engineer based in Goma, DRC, creating quality web sites and
              applications.
            </p>
          </div>
        </div>
        <div class="v-box flex flex-col justify-between">
          <div class="flex justify-start space-x-4 flex-wrap">
            <img
              src="/img/tech_stack/js.svg"
              alt="JAVASCRIPT"
              class="w-12 bg-gray-800 bg-opacity-50 rounded-md"
            />
            <img
              src="/img/tech_stack/typescript.svg"
              alt="typescript"
              class="w-12 bg-gray-800 bg-opacity-50 rounded-md"
            /><img
              src="/img/tech_stack/nuxtjs.svg"
              alt="nuxtjs"
              class="w-12 bg-gray-800 bg-opacity-50 rounded-md"
            /><img
              src="/img/tech_stack/vuejs.svg"
              alt="vuejs"
              class="w-12 bg-gray-800 bg-opacity-50 rounded-md"
            /><img
              src="/img/tech_stack/tailwind.svg"
              alt="tailwind"
              class="w-12 bg-gray-800 bg-opacity-50 rounded-md"
            />
          </div>
          <div>
            <h2 class="text-lg font-bold">My tech stack</h2>
            <p class="text-sm text-gray-400 mt-2">Desing & code</p>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup></script>
