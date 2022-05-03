<script setup>
definePageMeta({
  title: "Welcome",
  icon: "i-mdi-earth",
});

const items = [
  { id: 0, title: "welcome item 1", body: "item 1 body" },
  { id: 1, title: "welcome item 2", body: "item 2 body" },
];
</script>

<template>
  <article article-root flex flex-col>
    <!-- AppHeader & AppFooter data -->
    <ClientOnly>
      <Teleport to="#headerOptions">
        <div>Index header</div>
      </Teleport>
      <Teleport to="#footerOptions">
        <div>Index footer</div>
      </Teleport>
    </ClientOnly>

    <section v-for="(item, index) in items" :key="index">
      <h2 article-title>
        {{ item.title }}
      </h2>
    </section>
  </article>
</template>
