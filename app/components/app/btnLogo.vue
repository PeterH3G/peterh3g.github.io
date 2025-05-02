<script lang="ts" setup>
const props = defineProps<{
    class?: string,
    logo?: any,
    isIcon?: boolean,
    variant?: any,
    size?: any,
}>()
</script>

<template>
    <UButton class="app-logo" :class="`${props.class} ${isIcon ? 'elastic justify-center items-center' : ''}`"
        :avatar="{ src: props.logo?.avatar_url }" :label="props.isIcon ? undefined : props.logo?.name" to="/"
        :variant="props.variant ? props.variant : 'outline'" :size="props.size">
    </UButton>
</template>