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
    <ClientOnly>
        <UButton v-if="!colorMode?.forced" class="app-theme" :variant="variant" @click="isDark = !isDark" :ui="{
            base: props.class,
        }">
            <UIcon :name="isDark ? 'mdi:weather-sunny' : 'mdi-weather-night'" />
            <span v-text="label" />
        </UButton>
    </ClientOnly>
</template>