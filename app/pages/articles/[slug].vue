<template>
  <div class="v-index relative z-20 dark:text-white">
    <div class="v-wrapper">
      <UContainer class="py-16 text-center">
        <div class="mx-auto max-w-xl">
          <div class="mb-4">
            <div class="mb-3 text-xs font-semibold text-gray-500 dark:text-gray-300">
              <span
                class="rounded-xl border border-gray-200 bg-white px-3 py-1 dark:border-gray-700 dark:bg-gray-900"
              >
                {{ categoryLabel(article.categorie.title) }}
              </span>
              <span class="mx-2">•</span>
              <span class="dark:text-gray-500">
                {{ readingTime(content) }} {{ ui.articles.minRead }}</span
              >
            </div>
          </div>
          <h1 class="text-3xl font-black leading-[1.2] sm:text-4xl">
            {{ article.title }}
          </h1>
          <div class="mt-4 text-sm">
            <p>
              <span class="font-medium dark:text-gray-200">{{ ui.articles.publishedOn }}</span>
              <span class="ml-1 text-gray-600 dark:text-gray-400">
                {{ convertDate__index(article.date, "dmy", locale) }}
              </span>
            </p>
            <p class="mt-2">
              <span class="font-medium dark:text-gray-200">{{ ui.articles.by }}</span>
              <span class="ml-1 text-gray-600 dark:text-gray-400">
                Vincent Asani
              </span>
            </p>
          </div>
        </div>
        <div class="mt-16">
          <img
            :src="article.imageUrl.url"
            alt=""
            class="h-[250px] w-full rounded-xl object-cover sm:h-[300px]"
          />
        </div>

        <div class="mx-auto max-w-xl">
          <div v-html="content" class="v-content"></div>
          <p v-if="translated" class="mt-10 text-xs italic text-muted">
            <UIcon name="i-lucide-languages" class="mr-1 inline size-3.5 align-[-2px]" />{{ ui.articles.translated }}
          </p>
          <div class="mt-12 text-xs">
            <p>
              {{ ui.articles.updatedOn }}
              <span class="">
                {{ convertDate__index(article._updatedAt, "dmy", locale) }}
              </span>
            </p>
          </div>
          <div class="-m-2 mt-8 flex flex-wrap md:justify-center">
            <div class="w-full p-2 md:w-auto">
              <NuxtLink
                class="text-md block w-full rounded-full bg-gray-900 px-12 py-3.5 text-center font-bold text-white hover:bg-gray-800"
                to="/articles"
                >{{ ui.articles.readMore }}</NuxtLink
              >
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <section
      v-if="otherArticles.length"
      class="v-wrapper text-md relative dark:text-gray-300"
    >
      <UContainer class="relative z-20 pb-16 pt-">
        <h2
          class="mb-8 text-2xl font-black leading-[1.4] dark:text-gray-200 sm:text-3xl"
        >
          {{ ui.articles.readAlso }}
        </h2>
        <div class="-m-4 flex flex-wrap">
          <BaseArticleCard
            v-for="item in otherArticles"
            :key="item._id"
            v-bind="item"
            :title="titleOf(item)"
          />
        </div>
      </UContainer>
    </section>
  </div>
</template>
<script setup>
import { convertDate__index } from "~/utils/convertdate";
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

const otherArticlesQuery = groq`*[_type == "article" && slug.current != "${route.params.slug}"] | order(date desc) [0...3] {
  _id,
  title,
  _updatedAt,
  date,
  slug,
  "imageUrl": image.asset->,
  categorie->,
  content
}`;

const [{ data: sanityArticle, refresh: refresh_articles }, { data: sanityOtherArticles }] =
  await Promise.all([useSanityQuery(query), useSanityQuery(otherArticlesQuery)]);

const data_articles = computed(() => sanityArticle.value?.data ?? sanityArticle.value ?? []);

const { locale, ui } = useLang();
const { titleOf } = useArticleTitles();
const { article, translated } = useArticleTranslation(computed(() => data_articles.value[0]));
const categoryLabel = (title) => ui.value.articles.categories[title] ?? title;

function getOtherArticles() {
  return sanityOtherArticles.value?.data ?? sanityOtherArticles.value ?? [];
}

const otherArticles = computed(() => getOtherArticles());

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

  block: {
    blockComment: ({ children }) => html`<p>${children}</p>`,
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
const content = computed(() =>
  toHTML(article.value.content, {
    components: myPortableTextComponents,
  }),
);

const title = computed(() => `${article.value.title} | Vincent ASANI`);
useHead({
  title,
  meta: [
    { property: "og:title", content: title },
    { property: "og:type", content: "article" },
    { property: "og:locale", content: locale },
    { property: "og:site_name", content: "Vincent ASANI" },
    { property: "og:image:alt", content: title },
    {
      property: "og:description",
      content: "My articles | Vincent ASANI",
    },
    {
      property: "og:url",
      content: "https://vincentasani.me",
    },
    {
      property: "og:image",
      content: () => article.value.imageUrl.url,
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
      content: () => article.value.imageUrl.url,
    },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
</script>
