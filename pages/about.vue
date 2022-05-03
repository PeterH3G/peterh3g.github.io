<script setup>
definePageMeta({
  title: "About",
  icon: "i-mdi-account-school",
});

const items = [
  { id: 0, title: "About item 1", body: "item 1 body" },
  { id: 1, title: "About item 2", body: "item 2 body" },
];
</script>

<template>
  <article article-root flex flex-col>
    <!-- AppHeader & AppFooter data -->
    <ClientOnly>
      <Teleport to="#headerOptions">
        <div>About header</div>
      </Teleport>
      <Teleport to="#footerOptions">
        <div>About footer</div>
      </Teleport>
    </ClientOnly>

    <!-- Article content -->
    <section v-for="(item, index) in items" :key="index">
      <h2 article-title>
        {{ item.title }}
      </h2>
    </section>
  </article>
</template>
