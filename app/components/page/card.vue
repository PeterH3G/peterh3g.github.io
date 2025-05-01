<script setup lang="ts">
import { appName } from '~/constants/app'

defineProps<{
    app?: object
}>()

// Define [html head] title per route
const route = useRoute()
const card = {
    icon: route.meta.icon || 'mdi:cloud-question',
    title: route.meta.title || 'pageCard-title',
    description: route.meta.description || 'pageCard-description'
}
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | ${route.meta.title}` : appName;
    }
})
</script>

<template>
    <UCard as="article" :ui="{
        root: 'page-card grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-full',
        header: 'page-header flex items-center justify-between',
        body: 'page-body',
        footer: 'page-footer'
    }">
        <template #header>
            <div class="page-label inline-flex items-center">
                <Icon :name="card.icon" />
                <span v-text="card.title" />
            </div>
            <div class="page-description inline-flex items-center">
                <span v-text="card.description" />
            </div>
        </template>

        <slot />

        <template #footer>
            page.card.footer
        </template>
    </UCard>
</template>