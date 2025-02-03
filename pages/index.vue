<template>
  <div class="v-index">
    <section class="v-wrapper relative">
      <UContainer class="relative z-10 py-32">
        <p class="mb-8 text-sm font-semibold uppercase">👋 Bonjour</p>
        <h1
          class="text-3xl font-black leading-[1.4] text-gray-950 dark:text-gray-200 sm:text-5xl sm:leading-[1.2] md:-mt-2"
        >
          C'est
          <span class="text-gray-800 dark:text-gray-400">Vincent Asani</span>
        </h1>

        <div class="max-w-[500px]">
          <div class="mt-8 text-gray-500 dark:text-gray-400">
            <span class="relative font-semibold text-gray-700 dark:text-gray-300"
              >Ingénieur logiciel polyvalent —
            </span>
            Basé à Goma, en RDC, avec une expertise approfondie dans les domaines de la
            technologie, de l'innovation et du développement d'entreprise.
          </div>

          <div class="mt-8 flex items-center justify-between space-x-2">
            <div class="flex items-center justify-start space-x-2">
              <img src="/img/svg/available.svg" alt="Available to work" class="w-8" />
              <span
                class="flex justify-start text-sm font-medium text-gray-700 dark:text-gray-200"
                >Disponible <span class="ml-1 -hidden sm:block"></span>
              </span>
            </div>
            <div>
              <UtilsSimpleBtn :link="'/about'" :text="'À propos de moi'" />
            </div>
          </div>
        </div>

        <div
          class="absolute -bottom-[50px] left-4 flex items-center justify-center lg:left-auto lg:right-6 lg:top-1/2 lg:-translate-y-1/2"
        >
          <div class="relative w-[110px] sm:w-[120px]">
            <div class="circle-text relative animate-spin-slow text-sm">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <defs>
                  <path
                    id="circle"
                    d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text font-size="17">
                  <textPath xlink:href="#circle">• SCROLL DOWN • TO SEE • MORE</textPath>
                </text>
              </svg>
            </div>
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div class="animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
      <div class="grid-pattern grid-pattern--dark hero hidden dark:block"></div>
      <div class="grid-pattern grid-pattern--white hero block dark:hidden"></div>
    </section>

    <section class="v-wrapper text-md relative dark:text-gray-300">
      <UContainer
        class="relative z-20 grid grid-cols-1 gap-6 pb-16 pt-32 md:grid-cols-1 md:gap-8"
      >
        <h2
          class="text-2xl font-black leading-[1.4] dark:text-gray-200 sm:text-4xl sm:leading-[1.3] md:mt-2"
        >
          Éveillez
          <span
            class="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
            >votre curiosité </span
          >!
        </h2>
        <div class="-mt-4 max-w-sm">
          <p class="text-md text-gray-700 dark:text-gray-400">
            Plongez dans des articles sur l'IA, la VR/AR et les concepts de développement
            Web de pointe !
          </p>
        </div>
      </UContainer>
    </section>

    <section class="v-wrapper text-md relative dark:text-gray-300">
      <UContainer
        class="relative z-20 grid grid-cols-1 gap-6 pb-16 pt-0 md:grid-cols-1 md:gap-8"
      >
        <div class="-m-4 mb-12 flex flex-wrap">
          <BaseArticleCard :key="item" v-for="item in data_articles" v-bind="item" />
        </div>
        <div class="-m-2 flex flex-wrap md:justify-center">
          <div class="w-full p-2 md:w-auto">
            <NuxtLink
              class="text-md block w-full rounded-full bg-gray-900 px-12 py-3.5 text-center font-bold text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-600"
              to="/articles"
              >Lire plus d'articles !</NuxtLink
            >
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup>
const query = groq`*[_type == "article"]{_id,title,_updatedAt,date,slug,"imageUrl":image.asset->,categorie->,content}`;
const [{ data: data_articles, refresh: refresh_articles }] = await Promise.all([
  useSanityQuery(query),
]);
</script>
