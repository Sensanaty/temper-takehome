<template>
  <div class="bg-white py-3 px-4 shadow-md" :class="hasBorder ? 'border-b border-opacity-20 border-stone-400' : ''">
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
    hasBorder?: false
  }>();
</script>
