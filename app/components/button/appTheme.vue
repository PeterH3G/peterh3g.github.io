<script lang="ts" setup>
const props = defineProps<{
    class?: string,
    gridItem?: boolean,
    label?: string,
    variant?: any,
}>()

const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set(_isDark) {
        colorMode.preference = _isDark ? 'dark' : 'light'
    }
})

const label = props.label || 'app-theme'
const variant = props.variant || 'ghost'
</script>

<template>
    <ClientOnly v-if="!colorMode?.forced">
        <UButton icon="mdi:sun-moon-stars" color="neutral" variant="ghost"
            @click="isDark = !isDark" :label="label" />

        <template #fallback>
            <div class="size-8" />
        </template>
    </ClientOnly>
</template>