// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: https://gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
require('~/assets/css/base.postcss');

let VueScrollTo = require('vue-scrollto');
 

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueScrollTo);

  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = { class: 'antialiased' }

  // Styles
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css?family=Great+Vibes|Libre+Baskerville&display=swap',
  // })

  // Basic meta tags
  head.meta.push({
    name: 'author',
    content: 'Michael Gold',
  })

  head.meta.push({
    name: 'keywords',
    content: 'The Outpost,VR,SIGGRAPH,Autotoon,NYU FRL,Parallux',
  })

  head.meta.push({
    name: 'description',
    content: 'The Outpost - A Social VR Experience',
  })

  // Open Graph + Twitter meta tags
  head.meta.push({
    property: 'og:description',
    content: 'The Outpost - A Social VR Experience',
  })

  head.meta.push({
    name: 'twitter:description',
    content: 'The Outpost - A Social VR Experience',
  })

  head.meta.push({
    property: 'og:type',
    content: 'website',
  })

  head.meta.push({
    property: 'og:title',
    content: 'The Outpost - A Social VR Experience',
  })

  head.meta.push({
    name: 'twitter:title',
    content: 'The Outpost - A Social VR Experience',
  })

  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image',
  })

  head.meta.push({
    name: 'twitter:creator',
    content: '@michaelgold',
  })

  head.meta.push({
    property: 'og:image',
    content: ' https://theoutpostvr.netlify.com/img/the_outpost_social_preview.png',
  })

  head.meta.push({
    name: 'twitter:image',
    content: 'https://theoutpostvr.netlify.com/img/the_outpost_social_preview.png',
  })

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    })
    next()
  })
}
