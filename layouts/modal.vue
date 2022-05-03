<script setup>
defineProps({
  open: Boolean,
  msg: String,
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      modal-outer
      fixed
      top-0
      w-full
      h-full
      flex
      flex-col
      justify-center
      items-stretch
      z-36
    >
      <div modal-inner sm:max-w-3xl min-h-50 mx-6 p-6>
        <span model-title>
          <i i-mdi-information />
          {{ msg }}
        </span>
        <slot />
        <button @click="open = !open" fixed top-4 right-4>
          <i i-mdi-window-close modal-close-i />
        </button>
      </div>
    </div>
  </Teleport>
</template>
