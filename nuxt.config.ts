// https://nuxt.com/docs/api/configuration/nuxt-config

import { appName, appDescription } from './app/constants/app'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        class: 'w-full h-full',
      },
      bodyAttrs: {
        class: 'w-full h-full',
      },
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        { name: 'title', content: appName },
        { name: 'description', content: appDescription },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    rootAttrs: {
      class: 'app-layout'
    }
  },
  compatibilityDate: '2024-11-01',

  css: ['@/assets/css/main.css'],

  devtools: { enabled: false },

  future: {
    // https://nuxt.com/docs/getting-started/upgrade
    // This section is subject to change until the final release of Nuxt 4.0
    compatibilityVersion: 4,
  },

  ssr: false,

  modules: [
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
      collections: ['lucide', 'mdi', 'vscode-icons']
    }
  },
})