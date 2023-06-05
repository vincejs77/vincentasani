<template>
  <div class="v-index dark:text-white">
    <div class="v-wrapper">
      <UContainer class="py-16 text-center">
        <div class="max-w-xl mx-auto">
          <div class="mb-4">
            <span
              class="font-semibold text-md sm:text-lg text-gray-500 dark:text-gray-400"
            >
              {{ data_articles[0].categorie.title }}
            </span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black leading-[1.2]">
            {{ data_articles[0].title }}
          </h1>
        </div>
        <div class="mt-16">
          <img
            :src="data_articles[0].imageUrl.url"
            alt=""
            class="w-full h-[250px] sm:h-[300px] object-cover rounded-xl"
          />
        </div>

        <div class="max-w-xl mx-auto">
          <div v-html="content" class="v-content"></div>
        </div>
      </UContainer>
    </div>
  </div>
</template>
<script setup>
import { toHTML } from "@portabletext/to-html";
const { $fetchArticles } = useNuxtApp();

const route = useRoute();

const query = groq`*[_type == "article" && slug.current=="${route.params.slug}"]{_id,title,slug,"imageUrl":image.asset->,categorie->,content}`;

const [{ data: data_articles, refresh: refresh_articles }] = await Promise.all([
  useSanityQuery(query),
]);

const content = toHTML(data_articles.value[0].content, { components: {} });
</script>
