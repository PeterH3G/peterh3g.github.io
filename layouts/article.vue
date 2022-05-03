<script setup>
defineProps({
  items: Array,
});
</script>

<template>
  <article article-root flex flex-col>
    <section v-for="(item, index) in items" :key="index">
      <h2 article-title>
        {{ item.title }}
      </h2>
    </section>
  </article>
</template>
