<script setup>
defineProps({
  brandName: String,
  github: Object,
});

const sectionClasses = "flex flex-col justify-center items-center sm:w-full py-4 mb-4";
const staticInfo = "Static footer info";
</script>

<template>
  <footer footer-root w-full>
    <div footer-content pt-4>
      <section id="footerOptions" footer-section sm:mr-2 :class="sectionClasses" />
      <section footer-section sm:ml-2 :class="sectionClasses">
        {{ staticInfo }}
      </section>
    </div>
    <span footer-disclaimer mb-4
      ><i i-mdi-github /> {{ brandName }} 2022 | All rights reserved</span
    >
  </footer>
</template>
