<script lang="ts" setup>
import { appName, appDescription } from '~/constants/app'

const props = defineProps<{
    class?: string,
    description?: string,
    icon?: string,
    isIcon?: boolean,
    label?: string,
    title?: string
}>()

const icon = props.icon || 'mdi:menu'
const label = props.label
const variant = <any>'outline'

const open = ref(false)
</script>

<template>
    <USlideover :description="appDescription" :title="appName" :close="{
        color: 'primary',
        variant: 'outline',
        class: 'rounded-full'
    }" :ui="{
        header: 'sidebar-header',
        body: 'sidebar-body',
        footer: 'sidebar-footer'
    }" v-model:open="open">

        <UButton class="sidebar-button" :class="props.class" :icon="icon" :label="props.isIcon ? '' : label"
            :variant="variant" />

        <template #body>
            <slot name="body" />
        </template>

        <template #footer>
            <slot name="footer" />
        </template>
    </USlideover>
</template>