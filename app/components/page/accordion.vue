<script lang="ts" setup>
const props = defineProps<{
    items: any
}>()
</script>

<template>
    <UAccordion :items="props.items" :ui="{
        body: 'w-full flex flex-col gap-2'
    }">
        <template #body="{ item }">
            <span v-text="item.content" />

            <UButton v-for="(link, index) in item.links" :key="index" :href="link.url" :leading-icon="link.icon"
                :label="link.label" target="_blank" :trailing-icon="`lucide:external-link`" :ui="{
                    base: 'grid grid-cols-[auto_1fr_auto] grid-rows-1'
                }" />
        </template>
    </UAccordion>
</template>