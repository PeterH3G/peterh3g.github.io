<script lang="ts" setup>
const props = defineProps<{
    class?: string,
    gridItem?: boolean,
    isIcon?: boolean,
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
const iconLight = 'lucide:sun'
const iconDark = 'lucide:moon'
const variant = props.variant || 'ghost'
</script>

<template>
    <ClientOnly v-if="!colorMode?.forced">
        <UButton class="app-theme" :icon="isDark ? iconLight : iconDark" :label="props.isIcon ? '' : label"
            :variant="variant" @click="isDark = !isDark" :ui="{
                base: props.class,
            }" />
    </ClientOnly>
</template>