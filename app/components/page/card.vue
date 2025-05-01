<script setup lang="ts">
import { appName } from '~/constants/app'

// Define Props
const props = defineProps<{
    noHeader?: boolean,
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
        root: 'page-card min-h-full',
        header: 'page-header flex items-center justify-between',
        body: 'page-body h-full flex flex-col items-center',
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