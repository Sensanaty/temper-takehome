<template>
  <CardItem class="flex flex-row items-center">
    <p class="pr-2.5">
      {{ history.description }}
    </p>

    <button class="font-bold bg-accent text-primary-900 ml-auto rounded-md px-3 py-2 hover:bg-accent-100 active:bg-accent-200" @click="timeTravel(index)">
      Time Travel
    </button>
  </CardItem>
</template>

<script setup lang="ts">
  import CardItem from "~/components/Base/CardItem.vue";
  import useHistoryStore from "~/stores/historyStore";
  import { HistoryItem } from "~/stores/types/history";

  defineProps<{
    history: HistoryItem,
    index: number,
  }>();

  const { timeTravel } = useHistoryStore();
</script>
