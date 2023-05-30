<template>
  <div class="v-navbar-main dark:text-white">
    <UContainer class="py-4 flex justify-between items-center">
      <div>
        <NuxtLink to="/" class="flex justify-start items-center space-x-4">
          <!-- 

           <svg
            class="text-yellow-400 hidden"
            width="26"
            height="26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m23.291 17.887-4.476-4.476 6.058-4.326a1.52 1.52 0 0 0 .191-2.311L19.532 1.24a1.519 1.519 0 0 0-1.956-.162l-12.53 8.948a1.519 1.519 0 0 0-.191 2.31l4.295 4.296-8.59 8.59 21.98-4.777a1.518 1.518 0 0 0 .751-2.559Z"
              fill="currentcolor"
            ></path>
          </svg>
          -->

          <img src="/img/logo/me.jpeg" alt="" class="w-8 rounded-lg" />

          <h2 class="hidden text-lg sm:text-xl font-extrabold">
            Vince<span class="text-gray-400 no-underline">.</span>
          </h2>
        </NuxtLink>
      </div>
      <div
        class="flex items-center whitespace-nowrap space-x-4 text-gray-600 dark:text-gray-300 font-medium"
      >
        <NuxtLink to="/about"> <span>About</span> </NuxtLink>
        <NuxtLink to="/articles"> <span>Articles</span> </NuxtLink>
        <button
          @click="$toggleTheme()"
          class="text-gray-500 dark:text-gray-200 bg-gray-200 dark:bg-white dark:bg-opacity-10 p-2 rounded-md"
        >
          <div class="w-5 h-5">
            <ClientOnly>
              <UTooltip text="Theme">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-5 h-5"
                  v-if="useColorMode().value !== 'dark'"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-5 h-5"
                  v-if="useColorMode().value == 'dark'"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </UTooltip>
            </ClientOnly>
          </div>
        </button>
      </div>
    </UContainer>

    <UContainer class="fixed bottom-8 left-0 right-0 mx-auto flex justify-end">
      <div
        class="cursor-pointer bg-gray-800 bg-opacity-80 backdrop-blur-md w-12 h-12 rounded-full flex justify-center items-center"
      >
        <button>
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
        </button>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const { $toggleTheme } = useNuxtApp();
</script>
