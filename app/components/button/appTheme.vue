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
    <UButton v-if="!colorMode?.forced" class="app-theme" :variant="variant" @click="isDark = !isDark" :ui="{
        base: props.class,
    }">
        <Icon v-if="!isDark" name="mdi-weather-night" />
        <Icon v-else name="mdi:white-balance-sunny" />
        <span v-text="label" />
    </UButton>
</template>