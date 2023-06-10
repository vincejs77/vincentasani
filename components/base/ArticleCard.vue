<template>
  <div class="group v-card w-full md:w-1/2 p-4">
    <div
      class="p-4 sm:p-8 h-full border-2 border-gray-100 dark:border-gray-800 dark:border-opacity-30 bg-white dark:bg-gray-900 rounded-xl"
    >
      <div class="flex flex-wrap flex-col -m-3">
        <div class="w-auto p-3">
          <NuxtLink
            class="h-[200px] w-full bg-gray-900 overflow-hidden"
            :to="'/articles/' + slug.current"
          >
            <img
              :src="imageUrl.url"
              alt=""
              class="w-full h-[200px] object-cover rounded-xl"
            />
          </NuxtLink>
        </div>
        <div class="flex-1 p-3">
          <div class="flex flex-col justify-between h-full">
            <div class="flex-initial mb-8">
              <p class="mb-3 text-xs text-gray-500 dark:text-gray-300 font-semibold">
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
                  >{{ categorie.title }}</span
                >
                <span class="mx-2">•</span>
                <span class="dark:text-gray-500">
                  {{ readingTime(toHTML(content, { components: {} })) }} min red</span
                >
              </p>
              <NuxtLink
                :to="'/articles/' + slug.current"
                class="--no-underline group inline-block mb-4"
              >
                <h3
                  class="font-heading text-xl text-gray-900 hover:text-gray-700 dark:text-gray-300 font-bold"
                >
                  <span class="v-underline-animation">
                    {{ title }}
                  </span>
                </h3></NuxtLink
              >
            </div>
            <div class="flex-initial">
              <p class="text-xs text-gray-500 font-bold">
                {{ convertDate__index(date, "dmy", "en") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { convertDate__index } from "~/src/js/convertdate";
import { toHTML } from "@portabletext/to-html";

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
