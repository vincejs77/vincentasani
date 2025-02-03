<template>
  <div class="v-footer-main relative z-50 dark:text-gray-200">
    <UContainer class="py-4">
      <div class="flex items-center justify-center space-x-4 text-center">
        <div class="w-full">
          <div
            class="mb-12 overflow-hidden border-b-2 border-b-gray-100 dark:border-b-gray-900"
          >
            <span class="dark:text-gray-300"
              >Connectons-nous !
              <span class="font-medium text-gray-500 dark:text-gray-400"
                >Cliquez ici ...</span
              >
            </span>
            <div class="mb-12 mt-4 text-[24px] font-bold sm:text-4xl">
              <a
                href="mailto:hello@vincentasani.me"
                class="relative mx-auto max-w-[290px] bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent sm:max-w-[440px]"
              >
                <span class="absolute -left-6 -top-4 w-4 sm:-left-14 sm:-top-6">
                  <ClientOnly>
                    <Vue3Lottie
                      animationLink="/img/lotties/email.json"
                      class="h-16 w-16 sm:h-24 sm:w-28"
                    />
                  </ClientOnly>
                </span>
                <span class="v-underline-animation ml-7 sm:ml-8"
                  >hello@vincentasani.me</span
                >
              </a>
            </div>
          </div>
          <div
            class="relative z-50 -mt-2 flex flex-wrap items-center justify-center space-x-6 font-medium"
          >
            <a
              href="https://github.com/vincejs77"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-center space-x-2 pt-2"
            >
              <span>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 fill-current text-gray-700 group-hover:text-blue-500 dark:text-gray-200 dark:group-hover:text-blue-400"
                >
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  ></path>
                </svg>
              </span>
              <span
                class="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-200"
                >GitHub</span
              >
            </a>

            <a
              href="https://github.com/vincejs77"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-center space-x-2 pt-2"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="h-4 w-4 fill-current text-gray-700 group-hover:text-blue-500 dark:text-gray-200 dark:group-hover:text-blue-400"
                >
                  <path
                    d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"
                  ></path>
                </svg>
              </span>
              <span
                class="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-200"
                >Twitter</span
              >
            </a>

            <a
              href="https://www.linkedin.com/in/vincent-asani-93673b182/"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-center space-x-2 pt-2"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                  fill="currentColor"
                  class="h-4 w-4 fill-current text-gray-700 group-hover:text-blue-500 dark:text-gray-200 dark:group-hover:text-blue-400"
                >
                  <path
                    d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                  />
                </svg>
              </span>

              <span
                class="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-200"
                >LinkedIn</span
              >
            </a>

            <div></div>
          </div>
        </div>
      </div>

      <div class="mt-4 text-center">
        <span class="text-xs text-gray-400">
          &copy; 2023 Vincent Asani. Made with ❤️ and ☕
        </span>
      </div>
    </UContainer>
  </div>
</template>
