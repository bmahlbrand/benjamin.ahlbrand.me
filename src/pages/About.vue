<template>
  <Layout>
    <SmallHeader />

    <!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->
    <div class="relative bg-white">
      <div class="lg:absolute lg:inset-0">
        <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            class="sm:max-w-full md:max-w-full object-cover lg:absolute"
            src="/img/vertical_game_cover_6x9_outpost.png"
            alt=""
          />
        </div>
      </div>
      <div
        class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2"
      >
        <div class="lg:col-start-2 lg:pl-8">
          <div
            class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0"
          >
            <p
              class="leading-6 text-purple-600 font-semibold tracking-wide uppercase"
            >
              Who is Ben?
            </p>
            <h1
              class="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
            >
              About
            </h1>
            <p class="text-lg leading-7 text-gray-500 mb-5">
              Chillin'
            </p>
            <div class="prose text-gray-500">
              <p>
                Down the rabbit hole we go.
              </p>
              <p>
                Wherein an elaborate scheme is hatched.
              </p>
              <p>
                Chaos theory tells us differently
              </p>
              <p>
                Strange words strange loops
              </p>
              <p>
                Unnatural
              </p>
              <p>
                Subtle systemic propensities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->
    <div class="py-16 bg-gray-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-base max-w-prose mx-auto lg:max-w-none">
          <p
            class="text-base leading-6 text-purple-600 font-semibold tracking-wide uppercase"
          >
            The user experience
          </p>
          <h1
            class="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            How it works
          </h1>
        </div>
        <div
          class="relative z-10 text-base max-w-prose mx-auto mb-8 lg:max-w-5xl lg:mx-0 lg:pr-72"
        >
          <p class="text-lg text-gray-500 leading-7">
            Revolutionary.
          </p>
        </div>
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div class="relative z-10 mb-12 lg:mb-0">
            <div class="mb-10 prose text-gray-500 mx-auto lg:max-w-none">
              <p>
                Ben is a rad dude.
              </p>
            </div>
          </div>
          <div class="relative text-base max-w-prose mx-auto lg:max-w-none">
            <svg
              class="absolute top-0 right-0 -mt-5 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
              />
            </svg>
            <blockquote class="relative bg-white rounded-lg shadow-lg">
              <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img src="/img/nyu_short_color.png" alt="NYU" class="h-8" />
                <div
                  class="relative text-lg text-gray-700 leading-7 font-medium mt-8"
                >
                  <svg
                    class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                    />
                  </svg>
                  <p class="relative">
                    Reasonable bearing has nothing to do with bearing reasonability
                  </p>
                </div>
              </div>
              <cite
                class="flex items-center sm:items-start bg-purple-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10"
              >
                <div
                  class="rounded-full border-2 border-white mr-4 sm:-mt-15 sm:mr-6"
                >
                  <img
                    class="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-purple-300"
                    src="/img/bose_logo.png"
                    alt="Ben"
                  />
                </div>
                <span class="text-purple-300 font-semibold leading-6">
                  <strong class="text-white font-semibold">Ben Ahlbrand</strong>
                  <br class="sm:hidden" />
                  Professor, New York University
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import SmallHeader from "~/components/SmallHeader.vue";

export default {
  components: {
    SmallHeader,
  },
  name: "About",
  data: () => ({}),
};
</script>
