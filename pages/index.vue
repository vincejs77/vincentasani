<template>
  <div class="v-index">
    <section class="v-wrapper relative dark:text-gray-300 text-lg">
      <UContainer class="py-24 relative z-10">
        <p class="mb-4"></p>
        <h1
          class="text-animation-3 md:-mt-2 leading-[1.4] sm:leading-[1.3] text-4xl sm:text-6xl font-black dark:text-gray-200"
        >
          Details make perfection
          <span class="text-gray-800 dark:text-gray-400"
            >and perfection is not a detail</span
          >
        </h1>

        <div class="mt-8 text-gray-500 dark:text-gray-400">
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
      <div
        class="dark:block hidden opacity-70 grid-pattern grid-pattern--dark hero"
      ></div>
      <div class="dark:hidden block grid-pattern grid-pattern--white hero"></div>
    </section>
    <section class="v-wrapper dark:text-gray-300 text-lg">
      <UContainer class="pt-8 pb-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div class="relative v-box flex flex-col justify-between">
          <div>
            <h2 class="text-xl font-bold">
              Hello !
              <span class="text-gray-500 dark:text-gray-500">it's Vincent Asani</span>
            </h2>
          </div>
          <div class="absolute top-4 right-2 dark:opacity-20">
            <img src="/img/svg/104.svg" alt="" />
          </div>
          <div>
            <p class="text-gray-600 dark:text-gray-400">
              I am a software engineer based in Goma, DRC, creating quality web sites and
              applications.
            </p>

            <div class="flex justify-between items-center space-x-2 mt-4">
              <div class="flex justify-start items-center space-x-2">
                <img src="/img/svg/available.svg" alt="Available to work" class="w-8" />
                <span class="text-sm font-medium text-gray-700 dark:text-gray-200"
                  >Available to work</span
                >
              </div>
              <div>
                <UtilsSimpleBtn :link="'/about'" :text="'Learn more'" />
              </div>
            </div>
          </div>
        </div>
        <div class="v-box flex flex-col justify-between">
          <div class="flex justify-start flex-wrap -mt-2">
            <div
              :key="tech"
              v-for="tech in myTechStack"
              class="rounded-md mr-3 mt-3 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-50 pl-3 pr-4 py-1 flex justify-start items-center space-x-2"
            >
              <img :src="tech.img" alt="JAVASCRIPT" class="w-6 rounded-md" />
              <span class="text-sm font-semibold"> {{ tech.name }}</span>
            </div>
            <div class="rounded-md mr-3 mt-3 v-button pl-3 pr-4 py-1">
              <NuxtLink
                to="/about#tech-stack"
                class="flex justify-start items-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>

                <span class="text-sm font-medium"> View all</span>
              </NuxtLink>
            </div>
          </div>
          <div>
            <h2 class="text-xl font-bold">My tech stack</h2>
            <p class="text-md text-gray-600 dark:text-gray-400 mt-4">
              <span class="font-medium">Multifaceted</span> and also JavaScript
              enthusiast. Very interested in Nuxt, Vue, Node with TypeScript.
            </p>
          </div>
        </div>
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
    name: "Type Script",
    img: "/img/tech_stack/typescript.svg",
  },
];
</script>
