<script lang="ts" setup>
import { appDescription, appName } from '~/constants/app'

definePageMeta({
    title: 'Developer',
    description: 'Development Information',
    icon: 'mdi:code'
})

// Component sections array
const sections = [
    { title: appName, description: appDescription, content: 'application body' },
    { title: 'Nuxt 4', description: 'Nuxt 4 Setup information', content: 'nuxt 4 body' },
]

const iconNuxt = 'mdi:api'

const iconsLinks = [
    { label: "@nuxt/icon", url: 'https://nuxt.com/modules/icon', icon: iconNuxt, },
    { label: "@iconify-json", url: 'https://icon-sets.iconify.design/', icon: iconNuxt },
    { label: "@iconify-json/mdi", url: 'https://icon-sets.iconify.design/material-symbols/', icon: iconNuxt },
    { label: "@iconify-json/lucide", url: 'https://icon-sets.iconify.design/lucide/', icon: iconNuxt },
]

const colorsLinks = [
    { label: "@nuxt/ui: Color Mode", url: 'https://ui.nuxt.com/getting-started/color-mode/nuxt', icon: iconNuxt, },
    { label: "TailwindCSS: Colors", url: 'https://tailwindcss.com/docs/colors', icon: iconNuxt, },
]

const componentsLinks = [
    { label: "@nuxt/ui: Color Mode", url: 'https://ui.nuxt.com/getting-started/color-mode/nuxt', icon: iconNuxt, },
    { label: "TailwindCSS: Colors", url: 'https://tailwindcss.com/docs/colors', icon: iconNuxt, },
]

const itemsAccordion = [
    {
        label: 'Icons',
        icon: 'lucide:smile',
        content: 'You have nothing to do, @nuxt/icon will handle it automatically.',
        links: iconsLinks
    },
    {
        label: 'Colors',
        icon: 'lucide:swatch-book',
        content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
        links: colorsLinks
    },
    {
        label: 'Components',
        icon: 'lucide:box',
        content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
        links: componentsLinks
    },
    {
        label: 'Fonts',
        icon: 'lucide:letter-text',
        content: 'You can customize fonts by using the `class` / `ui` props or in your app.config.ts.',
        links: ''
    },
    {
        label: 'Images',
        icon: 'lucide:image',
        content: 'You can customize images by using the `class` / `ui` props or in your app.config.ts.',
        links: ''
    }
]
</script>

<template>
    <PageCard>
        <PageAccordion :items="itemsAccordion" />
    </PageCard>
</template>