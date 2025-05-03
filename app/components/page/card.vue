<script setup lang="ts">
import { defaults  } from '~/constants/app'

// Define Props
const props = defineProps<{
    noHeader?: boolean,
    bodyClass?: string
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
        return titleChunk ? `${titleChunk} | ${route.meta.title}` : defaults.name;
    }
})
</script>

<template>
    <UCard as="article" :ui="{
        root: `page-card h-full max-h-full`,
        header: 'page-header flex items-center justify-between',
        body: `page-body h-full ${props.bodyClass}`,
        footer: 'page-footer'
    }">
        <template #header v-if="!props.noHeader">
            <div class="page-label inline-flex items-center">
                <Icon :name="card.icon" />
                <span v-text="card.title" />
            </div>
            <div class="page-description inline-flex items-center">
                <span v-text="card.description" />
            </div>
        </template>

        <slot />

        <template #footer v-if="$slots.footer">
            <slot name="footer" />
        </template>
    </UCard>
</template>