<script setup lang="ts">
import { defaults  } from '~/constants/app'

// Define Props
const props = defineProps<{
    noHeader?: boolean,
    bodyClass?: string,
    card?: {
        icon?: string,
        title?: string,
        description?: string
    },
}>()

// Define [html head] title per route
const route = useRoute()
const card = {
    icon: props.card?.icon || 'mdi:cloud-question',
    title: props.card?.title  || 'pageCard-title',
    description: props.card?.description || 'pageCard-description'
}
</script>

<template>
    <UCard as="article" :ui="{
        root: `page-card h-full max-h-full`,
        header: 'page-header flex items-center justify-between',
        body: `page-body max-h-full ${props.bodyClass}`,
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