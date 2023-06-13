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
            My greatest satisfaction is bringing a
            <span class="gradient-text"> positive idea </span> to life.
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

          <div class="mt-12 sm:flex sm:justify-between">
            <div
              class="text-gray-600 dark:text-gray-400 max-w-[585px] space-y-4 text-lg font-medium"
            >
              <p class="text-gray-800 dark:text-gray-300">
                The incredible ability of technology to enhance our daily lives has
                motivated me to become a software engineer.
              </p>
              <p class="text-base">
                My goal is to create exceptional experiences for users and contribute to a
                more inclusive and accessible digital world. I am passionate about the
                latest technological advancements and enjoy integrating them in innovative
                ways into my projects.
              </p>
            </div>
            <div class="w-[200px] mt-8 sm:mt-0 sm:pl-6">
              <!-- <h3 class="text-sm font-bold">Connectons-nous</h3> -->
              <div
                class="flex sm:justify-start sm:flex-col space-x-6 sm:space-x-0 mt-2 sm:space-y-4 text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                <div>
                  <a
                    href="https://discordapp.com/users/VincentAsani#7134"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <img class="w-6 sm:w-8" src="/img/socials/discord.svg" alt="" />
                    </span>
                    <span>Discord</span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://twitter.com/vincejs77"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
            <p class="text-md text-gray-600 dark:text-gray-400 mt-8 mb-8">
              <span class="font-medium text-gray-700 dark:text-gray-200">Versatile</span>
              and JavaScript enthusiast. I specialize in
              <span class="font-medium">Nuxt</span>, <span class="font-medium">Vue</span>,
              <span class="font-medium">Node</span> with
              <span class="font-medium">TypeScript</span>. I'm also deeply interested in
              generative AI APIs and web-based VR development with
              <span class="font-medium">A-Frame</span> and
              <span class="font-medium">ThreeJS</span>.
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
              <div
                class="group rounded-md mr-0 mt-3 v-button bg-gray-900 pl-3 pr-4 py-1.5"
              >
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
            <div class="mt-8">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                This website is made with Nuxt3, GSAP, AOS, Nuxt-content & Sanity, NodeJs.
                TailwindCSS, OpenGraph and LottieFiles.

                <span class="gradient-text font-medium">
                  <a
                    href="https://github.com/vincejs77/vincentasani"
                    zz="_blank"
                    rel="noopener noreferrer"
                    ><span class="v-underline-animation">Visit the github repo.</span>
                  </a>
                </span>
              </p>
            </div>
          </div>

          <div class="max-w-[585px] mt-10">
            <div>
              <h2 class="text-xl font-bold">⏰ Currently</h2>
              <p class="text-md text-gray-600 dark:text-gray-400 mt-8 mb-8">
                I work and learn every day ... I like simplicity and I'm not perfect but
                still real.
                <span class="font-medium"
                  >Whatever the size of a project, I work with my brain and my
                  heart.</span
                >
              </p>
              <div class="flex justify-start items-center space-x-2">
                <img src="/img/svg/available.svg" alt="Available to work" class="w-8" />
                <span
                  class="flex justify-start text-sm font-medium text-gray-700 dark:text-gray-200"
                  >Available <span class="-hidden sm:block ml-1"> to work</span>
                </span>
              </div>
            </div>
            <div class="mt-10">
              <div
                class="sm:space-y-0 space-y-6 space-x-0 sm:space-x-10 flex justify-start sm:flex-row flex-col sm:items-center"
              >
                <div class="flex justify-start items-center space-x-4">
                  <div class="v-box p-3 rounded-xl dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-gray-700 dark:text-gray-200 font-bold">Live in</h3>
                    <p class="text-gray-500 dark:text-gray-400">Goma - DRC</p>
                  </div>
                </div>

                <div class="flex justify-start items-center space-x-4">
                  <div class="v-box p-3 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-4 h-4 dark:text-gray-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-gray-700 dark:text-gray-200 font-bold">
                      CTO & Creative Director
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">
                      at
                      <span class="gradient-text font-medium">
                        <a
                          href="http://www.witoxr.studio/"
                          target="_blank"
                          rel="noopener noreferrer"
                          ><span class="v-underline-animation">Wito XR Studio</span>
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </div>
    <section class="hidden v-wrapper dark:text-gray-300 text-md">
      <UContainer class="pt-0 pb-8 grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8">
        <div class="relative v-box flex flex-col justify-between"></div>
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
