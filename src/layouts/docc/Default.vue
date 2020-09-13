<template>
  <div class="font-sans antialiased text-ui-typo bg-ui-background">
    <div class="flex flex-col justify-start min-h-screen">

      <header
        ref="header"
        class="sticky top-0 z-10 w-full  bg-ui-background border-ui-border"
        @resize="setHeaderHeight"
      >
        <SmallHeader />
      </header>

      <main class="max-w-screen-xl mx-auto container relative flex flex-wrap justify-start flex-1 w-full bg-ui-background">

        <aside
          v-if="hasSidebar"
          class="sidebar"
          :class="{ 'open': sidebarOpen }"
          :style="sidebarStyle"
        >
          <div class="w-full pb-4 bg-ui-background">
            <Sidebar @navigate="sidebarOpen = false" />
          </div>
        </aside>

        <div
          class="w-full pb-24"
          :class="{'pl-0 lg:pl-12 lg:w-3/4': hasSidebar}"
        >
          <slot />
        </div>

      </main>

    </div>

    <div v-if="hasSidebar" class="fixed bottom-0 right-0 z-50 p-8 lg:hidden">
      <button class="p-3 text-white rounded-full shadow-lg bg-ui-primary hover:text-white" @click="sidebarOpen = ! sidebarOpen">
        <XIcon v-if="sidebarOpen" />
        <MenuIcon v-else />
      </button>
    </div>
    
  <Footer/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Sidebar from "@/components/docc/Sidebar";
import LayoutHeader from "@/components/docc/LayoutHeader";
import { MenuIcon, XIcon } from 'vue-feather-icons';
import Footer from "@/components/Footer";
import SmallHeader from "~/components/SmallHeader.vue";

export default {
  components: {
    SmallHeader,
    Footer,
    Sidebar,
    LayoutHeader,
    MenuIcon,
    XIcon
  },
  data() {
    return {
      headerHeight: 0,
      sidebarOpen: false,
    }
  },
  watch: {
    sidebarOpen: function(isOpen) {
      document.body.classList.toggle('overflow-hidden', isOpen);
    }
  },
  methods: {
    setHeaderHeight() {
      this.$nextTick(() => {
        this.headerHeight = this.$refs.header.offsetHeight;
      });
    }
  },
  computed: {
    sidebarStyle() {
      return {
        top: this.headerHeight + 'px',
        height: `calc(100vh - ${this.headerHeight}px)`
      }
    },
    hasSidebar() {
      return this.$page && this.headerHeight > 0;
    }
  },
  mounted() {
    this.setHeaderHeight();
  },
  metaInfo() {
    return {
      meta: [
        {
          key: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: process.env.SITE_URL + '/logo.jpg',
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: process.env.SITE_URL + '/logo.jpg',
        },
      ]
    }
  }
};
</script>

<style lang="scss">
:root {
  --color-ui-background: theme('colors.white');
  --color-ui-typo: theme('colors.gray.700');
  --color-ui-sidebar: theme('colors.gray.200');
  --color-ui-border: theme('colors.gray.300');
  --color-ui-primary: theme('colors.purple.600');
}

html[lights-out] {
  // --color-ui-background: theme('colors.gray.900');
  // --color-ui-typo: theme('colors.gray.100');
  // --color-ui-sidebar: theme('colors.gray.800');
  // --color-ui-border: theme('colors.gray.800');
  // --color-ui-primary: theme('colors.indigo.500');

  pre[class*="language-"],
  code[class*="language-"] {
    @apply bg-ui-border;
  }
}

* {
  transition-property: color, background-color, border-color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
}

h1,
h2,
h3,
h4 {
  @apply leading-snug font-black mb-4 text-ui-typo;

  &:hover {
    a::before {
      @apply opacity-100;
    }
  }

  a {
    &::before {
      content: "#";
      margin-left: -1em;
      padding-right: 1em;
      @apply text-ui-primary absolute opacity-0 float-left;
    }
  }
}

a {

    color: theme('colors.purple.600');
    font-weight: bold ;
  }


h1 {
  @apply text-4xl;
}

h2 {
  @apply text-2xl;
}

h3 {
  @apply text-xl;
}

h4 {
  @apply text-lg;
}

p {
  margin-bottom: 5px;
  margin-top: 5px;
}

// .data-gr-c-s-loaded a:not(.active):not(.text-ui-primary):not(.text-white) { @apply text-ui-typo }






.sidebar {
  @apply fixed bg-ui-background px-4 inset-x-0 bottom-0 w-full border-r border-ui-border overflow-y-auto transition-all z-40;
  transform: translateX(-100%);

  &.open {
    transform: translateX(0);
  }

  @screen lg {
    @apply w-1/4 px-0 bg-transparent top-0 bottom-auto inset-x-auto sticky z-0;
    transform: translateX(0);
  }
}
</style>
