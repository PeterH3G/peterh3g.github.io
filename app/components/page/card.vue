<script setup lang="ts">
import { defaults  } from '~/constants/app'

// Define Props
const props = defineProps<{
    noHeader?: boolean,
    page?: any
}>()

// Page Card configuration
const card = {
    icon: props.page?.icon || 'mdi:cloud-question',
    title: props.page?.title  || defaults.name,
    description: props.page?.description || defaults.description
}
</script>

<template>
    <UCard as="article" :ui="{
        root: `page-card h-full max-h-full`,
        header: 'page-header flex items-center justify-between',
        body: 'page-body max-h-full',
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