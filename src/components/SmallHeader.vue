<template>
    <div class="relative bg-white overflow-visible">
      <div class="max-w-screen-xl mx-auto">
        <div
          class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <NavMenu />

        </div>
      </div>
    </div>
</template>

<script>
import NavMenu from "~/components/NavMenu.vue";

export default {
  components: {
    NavMenu,
  },
  name: "SmallHeader",
  data: () => ({}),
};
</script>
