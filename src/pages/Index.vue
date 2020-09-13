<template>
  <Layout>
    <HeroHeader />
    <div class="bg-gray-50 pt-12 sm:pt-16">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2
            class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
          >
            Launched 1988
          </h2>
          <p class="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            Elaborate phrasing
          </p>
        </div>
      </div>
      <div class="mt-10 pb-12 bg-white sm:pb-16">
        <div class="relative">
          <div class="absolute inset-0 h-1/2 bg-gray-50"></div>
          <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                <div
                  class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
                >
                  <dt
                    class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                    id="item-1"
                  >
                    ben
                  </dt>
                  <dd
                    class="order-1 text-4xl leading-none font-extrabold text-purple-600"
                    aria-describedby="item-1"
                  >
                  7
                  </dd>
                </div>
                <div
                  class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
                >
                  <dt
                    class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                  >
                    kk
                  </dt>
                  <dd
                    class="order-1 text-4xl leading-none font-extrabold text-purple-600"
                  >
                    ..
                  </dd>
                </div>
                <div
                  class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
                >
                  <dt
                    class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                  >
                    3
                  </dt>
                  <dd
                    class="order-1 text-4xl leading-none font-extrabold text-purple-600"
                  >
                    3
                  </dd>
                </div>
                <div
                  class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l"
                >
                  <dt
                    class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                  >
                    ok
                  </dt>
                  <dd
                    class="order-1 text-4xl leading-none font-extrabold text-purple-600"
                  >
                    again
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="max-w-screen-xl mx-auto flex flex-wrap mb-20">
      <div class="flex w-full md:w-1/2">
        <img
          class="sm:max-w-full md:max-w-full object-cover "
          src="/img/vertical_game_cover_6x9_outpost.png"
          alt=""
        />
      </div>
      <div class="flex w-full md:w-1/2 ">
        <a href="https://frl.nyu.edu">
          <div class="relative p-4 lg:mt-40">
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
                    Benjamandius
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
                    src="/img/nsf_logo.png"
                    alt="Ben - NYU"
                  />
                </div>
                <span class="text-purple-300 font-semibold leading-6">
                  <strong class="text-white font-semibold">Ben Ahlbrand</strong>
                  <br class="sm:hidden" />
                  New York University
                </span>
              </cite>
            </blockquote>
          </div>
        </a>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeroHeader from "~/components/HeroHeader.vue";

export default {
  components: {
    HeroHeader,
  },
  data: () => ({}),
  metaInfo: {
    title: "Benjamin Ahlbrand",
  },
};
</script>
