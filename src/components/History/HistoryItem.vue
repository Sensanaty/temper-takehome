<template>
  <CardItem class="flex flex-row items-center" :has-border="hasSiblings">
    <p>{{ history.description }}</p>

    <button class="font-bold bg-accent text-primary-900 ml-auto rounded-md px-3 py-2 hover:bg-accent-100 active:bg-accent-200">
      Time Travel
    </button>
  </CardItem>
</template>

<script setup lang="ts">
  import CardItem from "~/components/Base/CardItem.vue";
  import { HistoryItem } from "~/stores/types/history";

  defineProps<{
    history: HistoryItem,
    hasSiblings?: boolean,
  }>();
</script>
