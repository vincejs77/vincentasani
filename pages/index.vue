<template>
  <div class="v-index">
    <section class="v-wrapper relative">
      <UContainer class="py-32 relative z-10">
        <p class="mb-8 text-sm uppercase font-semibold">👋 Hello</p>
        <h1
          data-aos="fade-up"
          data-aos-duration="5000"
          class="text-gray-950 md:-mt-2 leading-[1.4] sm:leading-[1.2] text-3xl sm:text-5xl font-black dark:text-gray-200"
        >
          It's
          <span class="text-gray-800 dark:text-gray-400">Vincent Asani</span>
        </h1>

        <div class="max-w-[500px]">
          <div
            data-aos="fade-up"
            data-aos-duration="4000"
            class="mt-8 text-gray-500 dark:text-gray-400"
          >
            <span class="mr-10 relative text-gray-700 dark:text-gray-300 font-semibold"
              >Software Engineer
              <div
                class="w-4 h-1 bg-gray-500 absolute -right-6 top-1/2 -translate-y-1/2"
              ></div>
            </span>
            Based in Goma, DRC, building modern websites and custom web applications.
            Deeply interested in generative AI APIs and web-based AR/VR development.
          </div>

          <div class="flex justify-between items-center space-x-2 mt-8">
            <div class="flex justify-start items-center space-x-2">
              <img src="/img/svg/available.svg" alt="Available to work" class="w-8" />
              <span
                class="flex justify-start text-sm font-medium text-gray-700 dark:text-gray-200"
                >Available <span class="-hidden sm:block ml-1"> to work</span>
              </span>
            </div>
            <div>
              <UtilsSimpleBtn :link="'/about'" :text="'About me'" />
            </div>
          </div>
        </div>

        <div
          class="absolute left-4 lg:left-auto lg:right-6 -bottom-[50px] lg:top-1/2 lg:-translate-y-1/2 flex justify-center items-center"
        >
          <div class="relative">
            <div class="circle-text animate-spin-slow text-sm relative">
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
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div class="animate-bounce">
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
                    d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
      <div class="dark:block hidden grid-pattern grid-pattern--dark hero"></div>
      <div class="dark:hidden block grid-pattern grid-pattern--white hero"></div>
    </section>

    <section class="relative v-wrapper dark:text-gray-300 text-md">
      <UContainer
        class="relative z-20 pt-32 pb-16 grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8"
      >
        <h2
          data-aos="fade-up"
          data-aos-duration="5000"
          class="md:mt-2 leading-[1.4] sm:leading-[1.3] text-2xl sm:text-4xl font-black dark:text-gray-200"
        >
          Awaken
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
            >your curiosity </span
          >!
        </h2>
        <div class="-mt-4 max-w-sm" data-aos="fade-up" data-aos-duration="5000">
          <p class="text-md text-gray-700 dark:text-gray-400">
            Dive into articles on AI, VR/AR, and cutting-edge web development concepts!
          </p>
        </div>
      </UContainer>
    </section>

    <section class="relative v-wrapper dark:text-gray-300 text-md">
      <UContainer
        data-aos="fade-up"
        data-aos-duration="5000"
        class="relative z-20 pt-0 pb-16 grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8"
      >
        <div class="flex flex-wrap -m-4 mb-12">
          <BaseArticleCard :key="item" v-for="item in data_articles" v-bind="item" />
        </div>
        <div class="flex flex-wrap md:justify-center -m-2">
          <div class="w-full md:w-auto p-2">
            <NuxtLink
              class="block w-full px-12 py-3.5 text-md text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full"
              to="/articles"
              >Read more articles!</NuxtLink
            >
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup>
const query = groq`*[_type == "article"]{_id,title,_createdAt,_updatedAt,slug,"imageUrl":image.asset->,categorie->,content}`;
const [{ data: data_articles, refresh: refresh_articles }] = await Promise.all([
  useSanityQuery(query),
]);
</script>
