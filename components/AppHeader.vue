<script setup></script>

<template>
  <header header-root>
    <div header-content>
      <h1 header-title w-full inline-flex justify-between items-center>
        <span inline-flex justify-center items-center>
          <i :class="$route.meta.icon" />
          <div v-text="$route.meta.title" />
        </span>
        <div id="headerOptions" />
      </h1>
    </div>
  </header>
</template>
