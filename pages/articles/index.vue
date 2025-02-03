<template>
  <div class="v-index dark:text-white">
    <section class="v-wrapper">
      <UContainer class="py-16">
        <div class="flex justify-between">
          <div>
            <div
              class="mb-4 text-sm font-medium uppercase text-gray-500 dark:text-gray-300"
            >
              <span>📝 Articles</span>
            </div>
            <div class="flex flex-col justify-between md:flex-row md:space-x-10">
              <div class="md:w-1/2">
                <h2
                  class="text-3xl font-black leading-[1.4] dark:text-gray-200 sm:text-5xl sm:leading-[1.3] md:mt-2"
                >
                  Mes articles
                </h2>
              </div>
              <div class="md:w-1/2">
                <p class="text-md mt-4 text-gray-700 dark:text-gray-400">
                  Plongez dans des articles sur l'IA, la VR/AR et les concepts de
                  développement Web de pointe !
                </p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
    <section class="v-wrapper text-md relative dark:text-gray-300">
      <UContainer
        class="relative z-20 grid grid-cols-1 gap-6 pb-16 pt-0 md:grid-cols-1 md:gap-8"
      >
        <div class="-m-4 mb-0 flex flex-wrap">
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
