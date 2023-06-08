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

          <div class="text-sm mt-8 v-box p-4 md:p-4 scrolling-wrapper overflow-x-auto">
            <ContentRenderer :value="data_codes">
              <!-- <h1>{{ data_codes.title }}</h1> -->
              <ContentRendererMarkdown :value="data_codes" />
            </ContentRenderer>
          </div>

          <div class="mt-12 relative w-full">
            <UtilsImageCarousel />
          </div>

          <div class="mt-12 flex justify-between">
            <div
              class="text-gray-600 dark:text-gray-400 max-w-[585px] space-y-4 text-lg font-medium"
            >
              <p class="text-gray-800 dark:text-gray-300">
                The incredible ability of technology to improve our daily lives has driven
                me to become a Software Engineer.
              </p>
              <p class="text-base">
                My goal is to create exceptional experiences for users and contribute to a
                more inclusive and accessible digital world. I am passionate about the
                latest technological advancements and enjoy integrating them innovatively
                into my projects.
              </p>
            </div>
            <div class="w-[200px] pl-6">
              <h3 class="text-md font-bold">Let's connect</h3>
              <div
                class="mt-4 space-y-4 text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                <div>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <span>
                      <img class="w-6 sm:w-8" src="/img/socials/discord.svg" alt="" />
                    </span>
                    <span>Discord</span>
                  </a>
                </div>
                <div>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <span>
                      <img class="w-6 sm:w-8" src="/img/socials/twitter.svg" alt="" />
                    </span>
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-[585px] mt-12">
            <h2 class="text-xl font-bold">🧰 My tech stack</h2>
            <p class="text-md text-gray-600 dark:text-gray-400 mt-4 mb-8">
              <span class="font-medium">Multifaceted</span> and Javascript enthusiast. I
              specialize in Nuxt, Vue, Node with TypeScript. Also interested in
              generatives AI APIs and AR/VR development on web.
            </p>
            <div class="-mt-2 flex justify-between w-full">
              <div class="w-full flex justify-start flex-nowrap overflow-hidden">
                <UtilsInfiniteVerticalScroll>
                  <div :key="tech" v-for="tech in myTechStack" class="cb-tagreel-item">
                    <div
                      class="rounded-md mr-3 mt-3 text-gray-700 dark:text-gray-300 v-box pl-0 pr-0 py-1 flex justify-center items-center space-x-2"
                    >
                      <div class="w-8">
                        <img :src="tech.img" :alt="tech.name" class="w-7 rounded-md" />
                      </div>
                    </div>
                  </div>
                </UtilsInfiniteVerticalScroll>
              </div>
              <div class="group rounded-md mr-0 mt-3 v-button pl-3 pr-4 py-1.5">
                <a
                  href="https://github.com/vincejs77"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex justify-start items-center space-x-2"
                >
                  <span
                    class="text-sm font-medium whitespace-nowrap group-hover:text-white"
                  >
                    My GitHub</span
                  >
                </a>
              </div>
            </div>
          </div>

          <div class="max-w-[585px] mt-12">
            <h2 class="text-xl font-bold">⏰ Currenlty</h2>
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

  {
    name: "Vite JS",
    img: "/img/tech_stack/vitejs.svg",
  },

  {
    name: "VS Code",
    img: "/img/tech_stack/vs.svg",
  },
];

const { data: data_codes } = await useAsyncData("page-data", () =>
  queryContent("code_blocks", "about_intro").findOne()
);
</script>
