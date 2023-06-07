<template>
  <div class="v-index dark:text-white relative z-20">
    <div class="v-wrapper relative">
      <UContainer class="py-28 relative z-10">
        <div class="max-w-full">
          <div
            class="mb-4 text-gray-500 dark:text-gray-300 text-sm uppercase font-medium"
          >
            <span>✌️ About me</span>
          </div>
          <h1
            class="text-gray-800 dark:text-gray-200 leading-[1.5] sm:leading-[1.3] text-3xl sm:text-5xl font-black"
          >
            My greatest satisfaction is to bring a
            <span class="gradient-text">positive idea </span> to life.
          </h1>

          <div class="text-sm mt-8 v-box p-4 md:p-6 scrolling-wrapper overflow-x-auto">
            <ContentRenderer :value="data_codes">
              <!-- <h1>{{ data_codes.title }}</h1> -->
              <ContentRendererMarkdown :value="data_codes" />
            </ContentRenderer>
          </div>

          <div class="mt-12 relative w-full">
            <UtilsImageCarousel />
          </div>
        </div>
      </UContainer>
    </div>
    <section class="hidden v-wrapper dark:text-gray-300 text-md">
      <UContainer class="pt-0 pb-8 grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8">
        <div
          data-aos="fade-up"
          data-aos-duration="4000"
          class="relative v-box flex flex-col justify-between"
        ></div>
      </UContainer>
    </section>
  </div>
</template>

<script setup>
const myTechStack = [
  {
    name: "Node",
    img: "/img/tech_stack/nodejs.svg",
  },
  {
    name: "Nuxt",
    img: "/img/tech_stack/nuxtjs.svg",
  },
  {
    name: "Vue",
    img: "/img/tech_stack/vuejs.svg",
  },
  {
    name: "TypeScript",
    img: "/img/tech_stack/typescript.svg",
  },

  {
    name: "JavaScript",
    img: "/img/tech_stack/js.svg",
  },
];

const { data: data_codes } = await useAsyncData("page-data", () =>
  queryContent("code_blocks", "about_intro").findOne()
);
</script>
