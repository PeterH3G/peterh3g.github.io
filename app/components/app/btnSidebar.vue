<script lang="ts" setup>
import { defaults } from '~/constants/app'

const props = defineProps<{
    class?: string,
    sidebar?: any,
    isIcon?: boolean,
}>()

const sidebar = computed(() => {
    return {
        description: props.sidebar.description || defaults.description,
        title: props.sidebar.title || defaults.name,
        icon: props.sidebar.icon || 'mdi:menu',
        button: {
            class: '',
            icon: '',
            label: props.sidebar.label || defaults.name,
            variant: <any>'outline'
        },
        buttonClose: {
            class: 'rounded-full',
            color: <any>'primary',
            variant: <any>'outline'
        }
    }
})

const open = ref(false)
</script>

<template>
    <USlideover :description="sidebar.description" :title="sidebar.title" :close="{
        color: sidebar.buttonClose.color,
        variant: sidebar.buttonClose.variant,
        class: sidebar.buttonClose.class
    }" :ui="{
        header: 'sidebar-header',
        body: 'sidebar-body',
        footer: 'sidebar-footer'
    }" v-model:open="open">

        <UButton class="sidebar-button" :class="sidebar.button.class" :icon="sidebar.icon"
            :label="props.isIcon ? '' : sidebar.button.label" :variant="sidebar.button.variant" />

        <template #body>
            <slot name="body" />
        </template>

        <template #footer>
            <slot name="footer" />
        </template>
    </USlideover>
</template>