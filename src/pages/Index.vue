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
    </div>


    <div class="max-w-screen-xl mx-auto flex flex-wrap mb-20">
<div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
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
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    HeroHeader,
    VueSlickCarousel
  },
  data: () => ({}),
  metaInfo: {
    title: "Benjamin Ahlbrand",
  },
};
</script>
