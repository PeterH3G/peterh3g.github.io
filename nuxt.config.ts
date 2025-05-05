// https://nuxt.com/docs/api/configuration/nuxt-config

import { defaults, appHead } from './app/constants/app'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        class: appHead.htmlAttrs.class,
      },
      bodyAttrs: {
        class: appHead.bodyAttrs.class,
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        { name: 'title', content: defaults.name },
        { name: 'description', content: defaults.description },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    rootAttrs: {
      class: appHead.rootAttrs.class
    }
  },

  compatibilityDate: '2024-11-01',

  css: ['@/assets/css/main.css'],

  devtools: { enabled: true },

  future: {
    // https://nuxt.com/docs/getting-started/upgrade
    // This section is subject to change until the final release of Nuxt 4.0
    compatibilityVersion: 4,
  },

  // Deploying a Static Client-Rendered App
  ssr: false,
  hooks: {
    'prerender:routes'({ routes }) {
      routes.clear() // Do not generate any routes (except the defaults)
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],

  // https://icon-sets.iconify.design/mdi/?keyword=mdi
  icon: {
    serverBundle: {
      collections: ['lucide', 'mdi']
    }
  },
})
