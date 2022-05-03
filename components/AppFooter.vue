<script setup>
defineProps({
  brandName: String,
  github: Object,
});

const sectionClasses =
  "flex flex-col justify-center items-center sm:w-full py-4 mb-4 sm:ml-2 px-6";
const baseItems = [
  {
    id1: 0,
    label: "Check out my Github profile",
    to: "https://github.com/peterh3g",
    icon: "i-mdi-github",
  },

  {
    id1: 1,
    label: "Take a look at the application repository",
    to: "https://github.com/PeterH3G/peterh3g.github.io",
    icon: " i-mdi-github ",
  },
];
</script>

<template>
  <footer footer-root w-full>
    <div footer-content pt-4>
      <section id="footerOptions" footer-section sm:mr-2 :class="sectionClasses" />
      <section footer-section :class="sectionClasses">
        <NuxtLink
          footer-link
          v-for="(item, index) in baseItems"
          :key="index"
          w-full
          py-2
          flex
          justify-center
          items-center
          :to="item.to"
          target="_blank"
          ><span flex justify-start items-center w-full>
            <i footer-link-icon :class="item.icon" /> {{ item.label }}
          </span>
          <i footer-link-ext i-mdi-open-in-new />
        </NuxtLink>
      </section>
    </div>
    <span footer-disclaimer mb-4
      ><i i-mdi-github /> {{ brandName }} 2022 | All rights reserved</span
    >
  </footer>
</template>
