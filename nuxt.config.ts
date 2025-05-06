// https://nuxt.com/docs/api/configuration/nuxt-config

import { defaults, appHead } from './app/constants/app'
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: defaults.name, // default fallback title
      htmlAttrs: {
        lang: 'en',
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

  devtools: { enabled: false },

  future: {
    // https://nuxt.com/docs/getting-started/upgrade
    // This section is subject to change until the final release of Nuxt 4.0
    compatibilityVersion: 4,
  },

  ssr: false,

  vite: {
    plugins: [
      tailwindcss(),
    ],
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

  // https://eslint.nuxt.com/packages/module
  eslint: {
    config: {
      stylistic: {
        indent: 'tab',
        semi: true
      }
    }
  },

  // https://icon-sets.iconify.design/mdi/?keyword=mdi
  icon: {
    mode: 'css',
    cssLayer: 'base',
    aliases: {
      'themeSwitch': 'mdi:sun-moon-stars'
    },
    serverBundle: {
      collections: ['mdi']
    }
  }
})
