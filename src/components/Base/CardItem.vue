<template>
  <div class="card-item">
    <slot>
      <p class="text-gray-400">
        {{ text }}
      </p>
    </slot>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    text?: string,
  }>();
</script>

<style scoped>
.card-item {
  @apply bg-white py-3 px-4 shadow-md border-b border-opacity-20 border-stone-400;
}

.card-item:last-of-type {
  @apply border-none;
}
</style>
