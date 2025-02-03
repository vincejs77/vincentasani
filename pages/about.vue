<template>
  <div class="v-index relative z-20 dark:text-white">
    <div class="v-wrapper relative">
      <UContainer class="relative z-10 py-28">
        <div class="max-w-full">
          <div
            class="mb-4 text-sm font-medium uppercase text-gray-500 dark:text-gray-300"
          >
            <span>✌️ À propos de moi</span>
          </div>
          <h1
            class="text-3xl font-black leading-[1.5] text-gray-800 dark:text-gray-200 sm:text-5xl sm:leading-[1.3]"
          >
            Ma plus grande satisfaction est de donner vie à une
            <span class="gradient-text"> idée positive</span>.
          </h1>

          <div class="v-box scrolling-wrapper mt-8 overflow-x-auto p-4 text-sm md:p-4">
            <ContentRenderer :value="data_codes">
              <!-- <h1>{{ data_codes.title }}</h1> -->
              <ContentRendererMarkdown :value="data_codes" />
            </ContentRenderer>
          </div>

          <div class="relative mt-12 w-full">
            <UtilsImageCarousel />
          </div>

          <div class="mt-12 sm:flex sm:justify-between">
            <div
              class="max-w-[585px] space-y-4 text-lg font-medium text-gray-600 dark:text-gray-400"
            >
              <p class="text-gray-800 dark:text-gray-300">
                L’incroyable capacité de la technologie à améliorer notre vie quotidienne
                m’a motivé à devenir ingénieur logiciel.
              </p>
              <p class="text-base">
                Mon objectif est de créer des expériences exceptionnelles pour les
                utilisateurs et de contribuer à un monde numérique plus inclusif et
                accessible. Je suis passionné par les dernières avancées technologiques et
                j'aime les intégrer de manière innovante dans mes projets.
              </p>

              <p>J'ai également une expertise en développement des affaires.</p>
            </div>
            <div class="mt-8 w-[200px] sm:mt-0 sm:pl-6">
              <!-- <h3 class="text-sm font-bold">Connectons-nous</h3> -->
              <div
                class="mt-2 flex space-x-6 text-sm font-medium text-gray-600 dark:text-gray-400 sm:flex-col sm:justify-start sm:space-x-0 sm:space-y-4"
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
          <div class="mt-12 max-w-[585px]">
            <h2 class="text-xl font-bold">🧰 My tech stack</h2>
            <p class="text-md mb-8 mt-8 text-gray-600 dark:text-gray-400">
              <span class="font-medium text-gray-700 dark:text-gray-200">Polyvalent</span>
              et passionné de JavaScript, spécialisé dans
              <span class="font-medium">Nuxt</span>, <span class="font-medium">Vue</span>,
              <span class="font-medium">Node</span> with
              <span class="font-medium">TypeScript</span>. Deeply interested in generative
              Profondément intéressé par les API d'IA génératives et le développement de
              réalité virtuelle basé sur le Web à l'aide d
              <span class="font-medium">A-Frame</span> et
              <span class="font-medium">ThreeJS</span>.
            </p>

            <div class="-mt-2 flex w-full justify-between">
              <div class="flex w-full flex-nowrap justify-start overflow-hidden">
                <UtilsInfiniteVerticalScroll>
                  <div :key="tech" v-for="tech in myTechStack" class="cb-tagreel-item">
                    <div
                      class="v-box mr-3 mt-3 flex items-center justify-center space-x-2 rounded-md py-1 pl-0 pr-0 text-gray-700 dark:text-gray-300"
                    >
                      <div class="w-8">
                        <img :src="tech.img" :alt="tech.name" class="w-7 rounded-md" />
                      </div>
                    </div>
                  </div>
                </UtilsInfiniteVerticalScroll>
              </div>
              <div
                class="v-button group mr-0 mt-3 rounded-md bg-gray-900 py-1.5 pl-3 pr-4"
              >
                <a
                  href="https://github.com/vincejs77"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-start space-x-2"
                >
                  <span
                    class="whitespace-nowrap text-sm font-medium group-hover:text-white"
                  >
                    My GitHub</span
                  >
                </a>
              </div>
            </div>
            <div class="mt-8">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Ce site web a été créé avec Nuxt3, Nuxt-content & Sanity, NodeJs,
                TailwindCSS, GSAP et LottieFiles

                <span class="gradient-text font-medium">
                  <a
                    href="https://github.com/vincejs77/vincentasani"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><span class="v-underline-animation">Visitez le dépôt github.</span>
                  </a>
                </span>
              </p>
            </div>
          </div>

          <div class="mt-10 max-w-[585px]">
            <div>
              <h2 class="text-xl font-bold">⏰ Actuellement</h2>
              <p class="text-md mb-8 mt-8 text-gray-600 dark:text-gray-400">
                Je travaille et j'apprends tous les jours... J'aime la simplicité et je ne
                suis pas parfait mais toujours vrai.
                <span class="font-medium"
                  >Quelle que soit la taille d'un projet, je travaille avec mon cerveau et
                  mon cœur.</span
                >
              </p>
              <div class="flex items-center justify-start space-x-2">
                <img src="/img/svg/available.svg" alt="Available to work" class="w-8" />
                <span
                  class="flex justify-start text-sm font-medium text-gray-700 dark:text-gray-200"
                  >Disponible <span class="-hidden ml-1 sm:block"> pour travailler</span>
                </span>
              </div>
            </div>
            <div class="mt-10">
              <div
                class="flex flex-col justify-start space-x-0 space-y-6 sm:flex-row sm:items-center sm:space-x-10 sm:space-y-0"
              >
                <div class="flex items-center justify-start space-x-4">
                  <div class="v-box rounded-xl p-3 dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="h-4 w-4"
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
                    <h3 class="font-bold text-gray-700 dark:text-gray-200">Je vis à</h3>
                    <p class="text-gray-500 dark:text-gray-400">Goma - DRC</p>
                  </div>
                </div>

                <div class="flex items-center justify-start space-x-4">
                  <div class="v-box rounded-xl p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="h-4 w-4 dark:text-gray-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-700 dark:text-gray-200">
                      Directeur Technique
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">
                      chez
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
    <section class="v-wrapper text-md hidden dark:text-gray-300">
      <UContainer class="grid grid-cols-1 gap-6 pb-8 pt-0 md:grid-cols-1 md:gap-8">
        <div class="v-box relative flex flex-col justify-between"></div>
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
