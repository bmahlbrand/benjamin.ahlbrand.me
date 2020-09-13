<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-screen-xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <NavMenu />

        <main
          class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h2
              class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
            >
            Benjamin Ahlbrand
            </h2>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Co-founder and CTO of Autotoon, Inc.
            </p>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Virtually an amazing person
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <g-link
                  to="/about"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-purple-700 bg-purple-100 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:shadow-outline-purple focus:border-purple-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Find out more
                </g-link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="">
    </div>
  </div>
</template>

<script>

import NavMenu from '~/components/NavMenu.vue';

export default {
  components: {
    NavMenu
  },
    name: 'HeroHeader',
    data: () => ({
    offsetTop: 0,
    isVideoInView: false,
  }),
  created() {
    if (typeof window != "undefined") {
      window.addEventListener("scroll", this.onScroll);
    }
  },
  destroyed() {
    if (typeof window != "undefined") {
      window.removeEventListener("scroll", this.onScroll);
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.updateIsVideoInView();
      }
    };
  },
  watch: {
    offsetTop(val) {
      this.updateIsVideoInView();
    },
    isVideoInView(val) {
      this.toggleVideoPlay(val)
    }
  },
  methods: {
    onScroll(e) {
      // console.log('scrolling')
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
    },
    isElementInViewport(e) {
      let rect = e.getBoundingClientRect();
      // console.log(rect);
      let yPadding = 40;
      return (
        rect.top >= -yPadding &&
        rect.bottom <=
          (window.innerHeight + yPadding || document.documentElement.clientHeight + yPadding)
      );
    },
    updateIsVideoInView() {
      let video = document.getElementById("hero-video");
      // console.log(video);
      this.isVideoInView = this.isElementInViewport(video)
    },
    toggleVideoPlay() {
      let video = document.getElementById("hero-video");
      if (this.isVideoInView) {
        video.play();
      } else video.pause();
    }
  },
  metaInfo: {
    title: "Benjamin Ahlbrand",
  },
}
</script>
