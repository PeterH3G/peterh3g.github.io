<script lang="ts" setup>
import { appName } from '~/constants/app'

const props = defineProps<{
    class?: string,
    label?: string,
    isIcon?: boolean,
    variant?: any
}>()

const logo = {
    class: props.class || '',
    label: props.label || appName
}

const button = {
    avatarSrc: 'https://github.com/nuxt.png',
    to: '/',
    variant: props.variant || 'ghost'
}
</script>

<template>
    <UButton class="app-logo" :class="`${logo.class} ${isIcon ? 'elastic justify-center items-center' : ''}`"
        :avatar="{ src: button.avatarSrc }" :label="props.isIcon ? undefined : logo.label" :to="button.to"
        :variant="button.variant" />
</template>