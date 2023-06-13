<template>
  <div class="v-index dark:text-white">
    <section class="v-wrapper">
      <UContainer class="py-16">
        <div class="flex justify-between">
          <div>
            <div
              class="mb-4 text-gray-500 dark:text-gray-300 text-sm uppercase font-medium"
            >
              <span>📝 Articles</span>
            </div>
            <div class="flex justify-between md:flex-row flex-col md:space-x-10">
              <div class="md:w-1/2">
                <h2
                  class="md:mt-2 leading-[1.4] sm:leading-[1.3] text-3xl sm:text-5xl font-black dark:text-gray-200"
                >
                  My articles
                </h2>
              </div>
              <div class="md:w-1/2">
                <p class="mt-4 text-md text-gray-700 dark:text-gray-400">
                  Dive into articles on AI, VR/AR, and cutting-edge web development
                  concepts!
                </p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
    <section class="relative v-wrapper dark:text-gray-300 text-md">
      <UContainer
        class="relative z-20 pt-0 pb-16 grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8"
      >
        <div class="flex flex-wrap -m-4 mb-0">
          <BaseArticleCard :key="item" v-for="item in _data_articles" v-bind="item" />
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup>
const query = groq`*[_type == "article"]{_id,title,_updatedAt,date,slug,"imageUrl":image.asset->,categorie->,content}`;
const [{ data: _data_articles, refresh: refresh_articles }] = await Promise.all([
  useSanityQuery(query),
]);
</script>
