<template>
  <div class="flex items-center bg-white rounded-xl w-full min-h-[90px] mb-6 px-4 py-3 shadow-md">
    <p>{{ post.title }}</p>

    <div class="flex flex-col ml-auto">
      <button class="caret-button">
        <PhCaretUp class="text-accent-900" weight="bold" :size="24" />
      </button>

      <button class="caret-button">
        <PhCaretDown class="text-accent-900" weight="bold" :size="24" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PostItem } from "~/stores/types/post";
  import { PhCaretDown, PhCaretUp } from "@phosphor-icons/vue";

  defineProps<{
    post: PostItem
  }>();
</script>

<style scoped>
.caret-button {
  @apply p-2 mb-2 rounded-lg hover:bg-stone-100 active:bg-stone-200;
}
</style>
