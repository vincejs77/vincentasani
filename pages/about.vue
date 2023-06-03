<template>
  <div class="v-index dark:text-white">
    <div class="v-wrapper">
      <UContainer class="py-16">
        <h1 class="text-6xl font-bold">About me</h1>
      </UContainer>
    </div>
    <section class="v-wrapper dark:text-gray-300 text-lg">
      <UContainer class="pt-8 pb-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div
          data-aos="fade-up"
          data-aos-duration="4000"
          class="relative v-box flex flex-col justify-between"
        >
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
              Software engineer based in Goma, DRC building creative websites and custom
              web software.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="5000"
          class="v-box flex flex-col justify-between"
        >
          <div>
            <h2 class="text-xl font-bold">My tech stack</h2>
          </div>

          <div>
            <p class="text-md text-gray-600 dark:text-gray-400 mt-0 mb-4">
              <span class="font-medium">Multifaceted</span> and also JavaScript
              enthusiast. Very interested in Nuxt, Vue, Node with TypeScript.
            </p>

            <div class="-mt-2 flex justify-between w-full">
              <div class="w-full flex justify-start flex-nowrap overflow-hidden">
                <UtilsInfiniteVerticalScroll>
                  <div :key="tech" v-for="tech in myTechStack" class="cb-tagreel-item">
                    <div
                      class="rounded-md mr-3 mt-3 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-20 pl-0 pr-0 py-1 flex justify-center items-center space-x-2"
                    >
                      <div class="w-8">
                        <img :src="tech.img" :alt="tech.name" class="w-7 rounded-md" />
                      </div>
                      <!-- <div class="hidden text-sm font-semibold whitespace-nowrap">
                        {{ tech.name }}
                      </div> -->
                    </div>
                  </div>
                </UtilsInfiniteVerticalScroll>
              </div>
              <div class="rounded-md mr-0 mt-3 v-button pl-3 pr-4 py-1">
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

                  <span class="text-sm font-medium whitespace-nowrap"> View all</span>
                </NuxtLink>
              </div>
            </div>
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
    name: "TypeScript",
    img: "/img/tech_stack/typescript.svg",
  },

  {
    name: "JavaScript",
    img: "/img/tech_stack/js.svg",
  },
];
</script>
