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
const iconLight = 'mdi-weather-sunny' as string
const iconDark = 'mdi-weather-night' as string
</script>

<template>
    <UButton v-if="!colorMode?.forced" class="app-theme" :variant="variant" @click="isDark = !isDark" :ui="{
        base: props.class,
    }">
        <UIcon :name="isDark ? iconLight : iconDark"/>
        <span v-text="label" />
    </UButton>
</template>