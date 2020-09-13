<template>
  <Layout>
    <SmallHeader />



    <div class="max-w-screen-xl mx-auto  mb-20 ">
      <div class=" px-10">
      <div class="content" /><h1 class="text-3xl">{{$page.webPage.title}}
        </h1>
      <div class="content" v-html="$page.webPage.content" />
      </div>
    </div>

  </Layout>
</template>

<page-query>
query ($id: ID!) {
  webPage(id: $id) {
    id
    title
    description
    path
    timeToRead
    content
    headings {
      depth
      value
      anchor
    }
  }
  allWebPage{
    edges {
      node {
        path
        title
      }
    }
  }
}
</page-query>

<script>
import OnThisPage from '@/components/docc/OnThisPage.vue';
import NextPrevLinks from '@/components/docc/NextPrevLinks.vue';
// import Layout from '~/layouts/docc/Default.vue';

import SmallHeader from "~/components/SmallHeader.vue";

export default {
  components: {
    SmallHeader,
  },
  
  metaInfo() {
    const title = this.$page.webPage.title;
    const description = this.$page.webPage.description || this.$page.webPage.excerpt;

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>

<style>
@import 'prism-themes/themes/prism-material-oceanic.css';

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

/* .data-gr-c-s-loaded a:not(.active):not(.text-ui-primary):not(.text-white) { @apply text-ui-typo } */

p,
ol,
ul,
pre,
strong,
blockquote {
  @apply mb-4 text-base text-ui-typo;
}

.content {
  a {
    @apply text-ui-primary underline;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply -mt-12 pt-20;
  }
    
  h2 + h3,
  h2 + h2,
  h3 + h3 {
    @apply border-none -mt-20;
  }

  h2,
  h3 {
    @apply border-b border-ui-border pb-1 mb-3;
  }

  ul {
    @apply list-disc;

    ul {
      list-style: circle;
    }
  }

  ol {
    @apply list-decimal;
  }

  ol,
  ul {
    @apply pl-5 py-1;

    li {
      @apply mb-2;

      p {
        @apply mb-0;
      }

      &:last-child {
        @apply mb-0;
      }
    }
  }
}

blockquote {
  @apply border-l-4 border-ui-border py-2 pl-4;

  p:last-child {
    @apply mb-0;
  }
}

/* code {
  @apply px-1 py-1 text-ui-typo bg-ui-sidebar font-mono border-b border-r border-ui-border text-sm rounded;
} */

pre[class*="language-"] {
  @apply max-w-full overflow-x-auto rounded;

  & + p {
    @apply mt-4;
  }

  & > code[class*="language-"] {
    @apply border-none leading-relaxed;
  }
}


</style>