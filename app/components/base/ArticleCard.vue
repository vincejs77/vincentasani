<template>
  <div class="group v-card w-full md:w-1/2 p-4">
    <div class="h-full">
      <div class="flex flex-wrap flex-col -m-3">
        <div class="w-auto p-3">
          <NuxtLink
            class="h-[200px] w-full bg-gray-900 overflow-hidden"
            :to="'/articles/' + slug.current"
          >
            <img
              :src="imageUrl.url"
              alt=""
              class="w-full h-[200px] object-cover rounded-xl transition-opacity duration-200 group-hover:opacity-80"
            />
          </NuxtLink>
        </div>
        <div class="flex-1 p-3">
          <div class="flex flex-col justify-between h-full">
            <div class="flex-initial mb-8">
              <p class="mb-3 text-xs text-gray-500 dark:text-gray-300 font-semibold">
                <span>{{ ui.articles.categories[categorie.title] ?? categorie.title }}</span>
                <span class="mx-2">•</span>
                <span class="dark:text-gray-500">
                  {{ readingTime(toHTML(content, { onMissingComponent: false })) }} {{ ui.articles.minRead }}</span
                >
              </p>
              <NuxtLink
                :to="'/articles/' + slug.current"
                class="--no-underline group inline-block mb-4"
              >
                <h3
                  class="text-lg text-highlighted font-semibold tracking-tight"
                >
                  <span class="v-underline-animation">
                    {{ title }}
                  </span>
                </h3></NuxtLink
              >
            </div>
            <div class="flex-initial">
              <p class="text-xs text-gray-500 font-bold">
                {{ convertDate__index(date, "dmy", locale) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { convertDate__index } from "~/utils/convertdate";
import { toHTML } from "@portabletext/to-html";

const { locale, ui } = useLang();

defineProps({
  title: String,
  _createdAt: String,
  date: String,
  content: Object,
  slug: {
    type: Object,
    default: function () {
      return {
        current: String,
      };
    },
  },
  imageUrl: {
    type: Object,
    default: function () {
      return {
        url: String,
      };
    },
  },
  categorie: {
    type: Object,
    default: function () {
      return {
        title: String,
      };
    },
  },
});

function readingTime(text) {
  // https://thereadtime.com/
  const wpm = 183; // mots par minute
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}
</script>
