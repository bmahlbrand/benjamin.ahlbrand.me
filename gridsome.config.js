// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// Google analytics is enabled only if this OR environment variable by the same name is set
const GOOGLE_ANALYTICS_ID = undefined

// Configure plugins here
let plugins = [
  {
    use: 'gridsome-plugin-tailwindcss',
    options: {
      tailwindConfig: './tailwind.config.js',
      /* These are the default options. You don't need to set any options to get going.
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      */
    },
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'content/faqs/*.md',
      typeName: 'Faq',
      remark: {
        // remark options
      }
    }
  },
  {
    use: `gridsome-plugin-netlify-cms`,
    options: {
      publicPath: `/admin`
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      baseDir: './content/docc',
      path: '**/*.md',
      typeName: 'MarkdownPage',
      remark: {
        externalLinksTarget: '_blank',
        externalLinksRel: ['noopener', 'noreferrer'],
        plugins: [
          '@gridsome/remark-prismjs'
        ]
      }
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      baseDir: './content/pages',
      path: '**/*.md',
      typeName: 'WebPage',
      remark: {
        externalLinksTarget: '_blank',
        externalLinksRel: ['noopener', 'noreferrer'],
        plugins: [
          '@gridsome/remark-prismjs'
        ]
      }
    }
  },
  {
    use: '@gridsome/plugin-sitemap',
  }
]

let transformers = [
  {
    remark: {
      // global remark options
    }
  }
]

if (GOOGLE_ANALYTICS_ID || process.env.GOOGLE_ANALYTICS_ID) {
  plugins.push({
    use: '@gridsome/plugin-google-analytics',
    options: {
      id: GOOGLE_ANALYTICS_ID || process.env.GOOGLE_ANALYTICS_ID,
    },
  })
}

module.exports = {
  siteName: 'The Outpost',
  siteUrl: 'https://theoutpostvr.com',
  // Default titleTemplate is '%s - <siteName>'
  // Overrided here to avoid having 'My Site Name - My Site Name' on homepage
  titleTemplate: '%s',
  // Default is './src/favicon.png'
  icon: './src/assets/img/favicon.png',
  plugins,
  transformers,
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/docs/', title: 'Docs' }
      ]
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/docs/',
              '/docs/installing/',
              '/docs/launching/',
              '/docs/troubleshooting/'
            ]
          }
        ]
      }
    ]
  }
}
// All configuration options: https://gridsome.org/docs/config
