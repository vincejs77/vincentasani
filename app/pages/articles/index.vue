<template>
  <div class="v-index dark:text-white">
    <section class="v-wrapper">
      <UContainer class="pt-16">
        <div class="flex justify-between">
          <div>
            <div
              class="mb-4 text-sm font-medium uppercase text-gray-500 dark:text-gray-300"
            >
              <span>{{ ui.articles.label }}</span>
            </div>
            <div class="flex flex-col justify-between md:flex-row md:space-x-10">
              <div class="md:w-1/2">
                <h2
                  class="text-3xl font-black leading-[1.4] dark:text-gray-200 sm:text-5xl sm:leading-[1.3] md:mt-2"
                >
                  {{ ui.articles.title }}
                </h2>
              </div>
              <div class="md:w-1/2">
                <p class="text-md mt-4 text-gray-700 dark:text-gray-400">
                  {{ ui.articles.intro }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
    <section class="v-wrapper text-md relative dark:text-gray-300">
      <UContainer
        class="relative z-20 grid grid-cols-1 gap-6 pb-16 pt-8 md:grid-cols-1 md:gap-8"
      >
        <div v-if="categories.length" class="mb-2 flex flex-wrap gap-2">
          <button
            type="button"
            class="rounded-lg border px-4 py-2 text-xs font-semibold transition-colors"
            :class="
              selectedCategory === null
                ? 'border-gray-900 bg-gray-900 text-white dark:border-white dark:bg-white dark:text-gray-900'
                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600'
            "
            @click="setCategoryFilter(null)"
          >
            {{ ui.articles.all }}
          </button>
          <button
            v-for="category in categories"
            :key="category._id"
            type="button"
            class="rounded-lg border px-4 py-2 text-xs font-semibold transition-colors"
            :class="
              selectedCategory === category._id
                ? 'border-gray-900 bg-gray-900 text-white dark:border-white dark:bg-white dark:text-gray-900'
                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600'
            "
            @click="setCategoryFilter(category._id)"
          >
            {{ categoryLabel(category.title) }}
          </button>
        </div>

        <div v-if="filteredArticles.length" class="-m-4 mb-0 flex flex-wrap">
          <BaseArticleCard
            v-for="item in filteredArticles"
            :key="item._id"
            v-bind="item"
            :title="titleOf(item)"
          />
        </div>

        <p v-else class="py-8 text-center text-gray-500 dark:text-gray-400">
          {{ ui.articles.empty }}
        </p>
      </UContainer>
    </section>
  </div>
</template>

<script setup>
const { ui } = useLang();
const { titleOf } = useArticleTitles();
const categoryLabel = (title) => ui.value.articles.categories[title] ?? title;

const query = groq`*[_type == "article"] | order(date desc) {
  _id,
  title,
  _updatedAt,
  date,
  slug,
  "imageUrl": image.asset->,
  categorie->,
  content
}`;

const [{ data: sanityArticles }] = await Promise.all([useSanityQuery(query)]);

const _data_articles = computed(
  () => sanityArticles.value?.data ?? sanityArticles.value ?? [],
);

const selectedCategory = ref(null);

const categories = computed(() => {
  const map = new Map();

  for (const article of _data_articles.value) {
    const category = article.categorie;
    if (category?._id) {
      map.set(category._id, category);
    }
  }

  return Array.from(map.values());
});

function filterArticles(articles, categoryId) {
  if (!categoryId) {
    return articles;
  }

  return articles.filter((article) => article.categorie?._id === categoryId);
}

const filteredArticles = computed(() =>
  filterArticles(_data_articles.value, selectedCategory.value),
);

function setCategoryFilter(categoryId) {
  selectedCategory.value = categoryId;
}
</script>
