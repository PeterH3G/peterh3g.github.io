<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <NuxtLayout name="error">
    <h1>{{ props.error || '500'  }}</h1>
    <NuxtLink to="/">Go back home</NuxtLink>
  </NuxtLayout>
</template>
