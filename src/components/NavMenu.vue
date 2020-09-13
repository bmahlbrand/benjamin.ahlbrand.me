<template>
  <div>
    <svg
      class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
      fill="currentColor"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon points="50,0 100,0 50,100 0,100" />
    </svg>

    <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav
        class="relative flex items-center justify-between sm:h-10 lg:justify-start"
      >
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <g-link to="/" aria-label="Home">
              <img
                class="h-8 w-auto sm:h-10"
                src="/img/outpost-logo.svg"
                alt="Logo"
              />
            </g-link>
            <div class="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
                @click="isMenuHidden = !isMenuHidden"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:pr-4">
          <g-link
            href="#"
            to="/about"
            class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >About</g-link
          >
          <a
            href="#"
            v-scroll-to="'#faq'"
            class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >FAQ</a
          >
        </div>
      </nav>
    </div>

    <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->

    <transition
      enter-active-class="duration-150 ease-out"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="!isMenuHidden"
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div class="rounded-lg shadow-md">
          <div
            class="rounded-lg bg-white shadow-xs overflow-hidden"
            role="menu"
            :aria-hidden="isMenuHidden"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <g-link to="/">
                <div>
                  <img class="h-8 w-auto" src="/img/outpost-logo.svg" alt="" />
                </div>
              </g-link>
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Close menu"
                  @click="isMenuHidden = !isMenuHidden"
                >
                  <svg
                    class="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <g-link
                to="/about"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                role="menuitem"
                >About</g-link
              >
              <a
                href="#"
                v-scroll-to="'#faq'"
                class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                role="menuitem"
                >FAQ</a
              >
            </div>
            <div>
              <a
                href="https://www.eventbrite.com/e/the-outpost-tickets-116952176107"
                class="block w-full px-5 py-3 text-center font-medium text-purple-600 bg-gray-50 hover:bg-gray-100 hover:text-purple-700 focus:outline-none focus:bg-gray-100 focus:text-purple-700 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data: () => ({
    isMenuHidden: true,
  }),
};
</script>
