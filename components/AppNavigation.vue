<script setup>
defineProps({
  brandName: String,
  routes: Array,
});

const showingNavigationDropdown = ref(false);
</script>

<template>
  <nav nav-root>
    <div nav-content>
      <!-- Navigation Menu -->
      <div w-full flex justify-between items-center>
        <NuxtLink nav-link href="/" flex justify-center items-center>
          <span flex justify-center items-center mr-1>
            {{ brandName }}
          </span>
        </NuxtLink>

        <div hidden sm:ml-10 sm:flex sm:justify-center sm:items-center>
          <NuxtLink nav-link-base v-for="route in routes" :to="route.to">
            <i nav-icon :class="route.icon" />
            {{ route.name }}
          </NuxtLink>
          <slot name="nav-menu-options" />
        </div>

        <!-- Responsive links & buttons -->
        <div flex items-center sm:hidden>
          <slot name="nav-menu-options" />

          <!-- Hamburger -->
          <button
            nav-button
            @click="showingNavigationDropdown = !showingNavigationDropdown"
            inline-flex
            items-center
            justify-center
          >
            <svg h-6 w-6 stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                :class="{
                  hidden: showingNavigationDropdown,
                  'inline-flex': !showingNavigationDropdown,
                }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                :class="{
                  hidden: !showingNavigationDropdown,
                  'inline-flex': showingNavigationDropdown,
                }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Responsive Navigation Menu -->
      <div
        :class="{
          block: showingNavigationDropdown,
          hidden: !showingNavigationDropdown,
        }"
        mt-4
        sm:hidden
      >
        <div flex flex-col justify-start items-stretch>
          <NuxtLink
            v-for="route in routes"
            :to="route.to"
            nav-link-responsive
            py-4
            flex
            justify-end
            items-center
          >
            {{ route.name }}
            <i nav-icon :class="route.icon" w-10 />
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
