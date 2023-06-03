<template>
  <div class="v-index">
    <section class="v-wrapper relative">
      <UContainer class="py-32 relative z-10">
        <p class="mb-8 uppercase font-semibold">👋 Hello</p>
        <h1
          data-aos="fade-up"
          data-aos-duration="5000"
          class="text-gray-950 md:-mt-2 leading-[1.4] sm:leading-[1.2] text-4xl sm:text-6xl font-black dark:text-gray-200"
        >
          I'm
          <span class="text-gray-800 dark:text-gray-400">Vincent Asani</span>
        </h1>

        <div class="max-w-[500px]">
          <div
            data-aos="fade-up"
            data-aos-duration="4000"
            class="mt-8 text-gray-500 dark:text-gray-400"
          >
            <span class="mr-10 relative text-gray-700 dark:text-gray-300 font-semibold"
              >Software ingineer
              <div
                class="w-4 h-1 bg-gray-500 absolute -right-6 top-1/2 -translate-y-1/2"
              ></div>
            </span>
            based in Goma, DRC building creative websites and custom web software. Also
            interested in generative AI and AR/VR development on web.
          </div>

          <div class="flex justify-between items-center space-x-2 mt-8">
            <div class="flex justify-start items-center space-x-2">
              <img src="/img/svg/available.svg" alt="Available to work" class="w-8" />
              <span class="text-sm font-medium text-gray-700 dark:text-gray-200"
                >Available to work</span
              >
            </div>
            <div>
              <UtilsSimpleBtn :link="'/about'" :text="'About me'" />
            </div>
          </div>
        </div>
      </UContainer>
      <div class="dark:block hidden grid-pattern grid-pattern--dark hero"></div>
      <div class="dark:hidden block grid-pattern grid-pattern--white hero"></div>
    </section>

    <section class="relative v-wrapper dark:text-gray-300 text-lg">
      <UContainer
        class="relative z-20 pt-32 pb-16 grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8"
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="5000"
          class="md:mt-2 leading-[1.4] sm:leading-[1.3] text-2xl sm:text-3xl font-black dark:text-gray-200"
        >
          Awaken
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
            >your curiosity!</span
          >
        </h1>
        <div class="-mt-4 max-w-sm" data-aos="fade-up" data-aos-duration="5000">
          <p class="text-md text-gray-700 dark:text-gray-400">
            Dive into articles on AI, VR/AR, and cutting-edge web development concepts!
          </p>
        </div>
      </UContainer>
    </section>

    <section class="relative v-wrapper dark:text-gray-300 text-lg">
      <UContainer
        class="relative z-20 pt-0 pb-16 grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8"
      >
        <div class="flex flex-wrap -m-4 mb-12">
          <div class="w-full md:w-1/2 p-4" :key="item" v-for="item in data_articles">
            <div
              class="p-8 h-full border-2 border-gray-100 dark:border-gray-800 dark:border-opacity-30 bg-white dark:bg-gray-900 rounded-xl"
            >
              <div class="flex flex-wrap flex-col -m-3">
                <div class="w-auto p-3">
                  <img
                    :src="item.imageUrl.url"
                    alt=""
                    class="w-full h-[200px] object-cover rounded-xl"
                  />
                </div>
                <div class="flex-1 p-3">
                  <div class="flex flex-col justify-between h-full">
                    <div class="flex-initial mb-8">
                      <p
                        class="mb-3 text-xs text-gray-500 dark:text-gray-300 font-semibold"
                      >
                        {{ item.categorie.title }} •
                        <span class="dark:text-gray-500">4 min read</span>
                      </p>
                      <a class="group inline-block mb-4" href="#">
                        <h3
                          class="font-heading text-xl text-gray-900 hover:text-gray-700 dark:text-gray-300 group-hover:underline font-bold"
                        >
                          {{ item.title }}
                        </h3></a
                      >
                    </div>
                    <div class="flex-initial">
                      <p class="text-xs text-gray-500 font-bold">Jun 3, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap md:justify-center -m-2">
          <div class="w-full md:w-auto p-2">
            <a
              class="block w-full px-12 py-3.5 text-lg text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full"
              href="#"
              >Read more articles</a
            >
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup>
const query = groq`*[_type == "article"]{_id,title,"imageUrl":image.asset->,categorie->}`;

const { data: data_articles, refresh: refresh_articles } = useSanityQuery(query);
</script>
