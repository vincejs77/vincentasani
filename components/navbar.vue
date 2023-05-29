<template>
  <div class="v-navbar-main dark:text-white">
    <UContainer class="py-4 flex justify-between items-center">
      <div>
        <NuxtLink to="/" class="flex justify-start items-center space-x-4">
          <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m23.291 17.887-4.476-4.476 6.058-4.326a1.52 1.52 0 0 0 .191-2.311L19.532 1.24a1.519 1.519 0 0 0-1.956-.162l-12.53 8.948a1.519 1.519 0 0 0-.191 2.31l4.295 4.296-8.59 8.59 21.98-4.777a1.518 1.518 0 0 0 .751-2.559Z"
              fill="currentcolor"
            ></path>
          </svg>
          <h1 class="text-lg sm:text-xl font-extrabold">
            Captain Vince<span class="text-gray-400">.</span>
          </h1>
        </NuxtLink>
      </div>
      <div class="flex whitespace-nowrap space-x-4 dark:text-gray-300 font-medium">
        <NuxtLink to="/about"> About </NuxtLink>
        <NuxtLink to="/articles"> Articles </NuxtLink>
      </div>
    </UContainer>

    <UContainer class="fixed bottom-8 left-0 right-0 mx-auto flex justify-end">
      <div
        class="bg-gray-800 bg-opacity-80 backdrop-blur-md w-12 h-12 rounded-full flex justify-center items-center"
      >
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
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      </div>
    </UContainer>
  </div>
</template>
