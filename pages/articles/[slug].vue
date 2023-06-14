<template>
  <div class="v-index relative z-20 dark:text-white">
    <div class="v-wrapper">
      <UContainer class="py-16 text-center">
        <div class="max-w-xl mx-auto">
          <div class="mb-4">
            <div class="mb-3 text-xs text-gray-500 dark:text-gray-300 font-semibold">
              <span
                class="bg-white dark:bg-gray-900 py-1 px-3 border border-gray-200 dark:border-gray-700 rounded-xl"
              >
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
                >
                  {{ data_articles[0].categorie.title }}
                </span>
              </span>
              <span class="mx-2">•</span>
              <span class="dark:text-gray-500"> {{ readingTime(content) }} min read</span>
            </div>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black leading-[1.2]">
            {{ data_articles[0].title }}
          </h1>
          <div class="mt-4 text-sm">
            <p>
              <span class="dark:text-gray-200 font-medium">Plublished :</span>
              <span class="ml-1 text-gray-600 dark:text-gray-400">
                {{ convertDate__index(data_articles[0].date, "dmy", "en") }}
              </span>
            </p>
          </div>
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
          <div class="mt-12 text-xs">
            <p>
              Updated at :
              <span class="">
                {{ convertDate__index(data_articles[0]._updatedAt, "dmy", "en") }}
              </span>
            </p>
          </div>
          <div class="mt-8 flex flex-wrap md:justify-center -m-2">
            <div class="w-full md:w-auto p-2">
              <NuxtLink
                class="block w-full px-12 py-3.5 text-md text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full"
                to="/articles"
                >Read more articles!</NuxtLink
              >
            </div>
          </div>
        </div>
      </UContainer>
    </div>
  </div>
</template>
<script setup>
import { convertDate__index } from "~/src/js/convertdate";
import htm from "htm";
import vhtml from "vhtml";
import { toHTML, uriLooksSafe } from "@portabletext/to-html";

const route = useRoute();

const query = groq`*[_type == "article" && slug.current=="${route.params.slug}"]{_id,title,_updatedAt,date,slug,"imageUrl":image.asset->,categorie->,content[]{
    ...,
    _type == "image" => {
      ...,
      "imageUrl":asset->
    }
  }}`;

const [{ data: data_articles, refresh: refresh_articles }] = await Promise.all([
  useSanityQuery(query),
]);

function readingTime(text) {
  // https://thereadtime.com/
  const wpm = 183; // mots par minute
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}

const html = htm.bind(vhtml);

const myPortableTextComponents = {
  types: {
    image: ({ value }) => html`<img src="${value.imageUrl.url}" />`,
    callToAction: ({ value, isInline }) =>
      isInline
        ? html`<a href="${value.url}">${value.text}</a>`
        : html`<div class="callToAction">${value.text}</div>`,
  },

  marks: {
    link: ({ children, value }) => {
      const href = value.href || "";

      if (uriLooksSafe(href)) {
        const rel = href.startsWith("/") ? undefined : "noreferrer noopener";
        return html`<a href="${href}" rel="${rel}">${children}</a>`;
      }

      return children;
    },
  },
};
const content = toHTML(data_articles.value[0].content, {
  components: myPortableTextComponents,
});

const title = `${data_articles.value[0].title} | My articles`;
useHead({
  title,
  meta: [
    { property: "og:title", content: title },
    { property: "og:type", content: "article" },
    { property: "og:locale", content: "en" },
    { property: "og:site_name", content: "Vincent ASANI" },
    { property: "og:image:alt", content: title },
    {
      property: "og:description",
      content: "My articles | Vincent ASANI",
    },
    {
      property: "og:url",
      content: data_articles.value[0].imageUrl.url,
    },
    {
      property: "og:image",
      content: data_articles.value[0].imageUrl.url,
    },
    { name: "twitter:title", content: title },
    { name: "twitter:site", content: "@vincejs77" },
    { name: "twitter:image:alt", content: title },
    { name: "twitter:creator", content: "@vincejs77" },
    {
      name: "twitter:description",
      content: "My articles | Vincent ASANI",
    },
    {
      name: "twitter:image",
      content: data_articles.value[0].imageUrl.url,
    },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
</script>
