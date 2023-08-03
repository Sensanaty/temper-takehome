<template>
  <div class="bg-primary-50 rounded-xl shadow-md">
    <h1 class="font-medium text-xl bg-white rounded-t-xl text-primary-900 px-4 py-3">
      List of actions committed
    </h1>

    <div class="rounded-b-xl px-4 py-3">
      <span v-if="history && history.length > 0">
        <HistoryItem v-for="historyItem in history" :key="historyItem.id" :history="historyItem" :has-siblings="history.length > 1" />
      </span>

      <CardItem v-else text="No actions committed recently" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import useHistoryStore from "~/stores/historyStore";
  import { storeToRefs } from "pinia";
  import HistoryItem from "~/components/History/HistoryItem.vue";
  import CardItem from "~/components/Base/CardItem.vue";

  const historyStore = useHistoryStore();

  const { history } = storeToRefs(historyStore);
</script>
