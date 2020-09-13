<template>
  <!-- Read how Layouts, Pages, Templates and collections work here: https://gridsome.org/docs/core-concepts/ -->
  <div class="mx-auto">
    <slot />
    <Footer />

  </div>
</template>

<script>

import Footer from '~/components/Footer.vue';

export default {
  components: {
    Footer
  },
  data: () => ({
  }),
  metaInfo: {
    title: "The Outpost - A Social VR Experience",
  },
};
</script>

<style lang="scss">
.text-base a {
  @apply font-bold text-purple-500;
}

.text-base a:hover {
  @apply font-bold text-purple-700;
}

</style>