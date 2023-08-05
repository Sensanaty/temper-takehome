<template>
  <div class="bg-primary-50 rounded-xl shadow-md">
    <h1 class="font-medium text-xl bg-white rounded-t-xl text-primary-900 px-4 py-3">
      List of actions committed
    </h1>

    <div class="rounded-b-xl px-4 py-3">
      <Transition mode="out-in">
        <span v-if="history && history.length > 0">
          <TransitionGroup name="histories" type="animation">
            <HistoryItem v-for="(historyItem, index) in history" :key="historyItem.id" :history="historyItem" :index="index" />
          </TransitionGroup>
        </span>

        <CardItem v-else class="flex items-center min-h-[64px]" text="No actions committed recently" />
      </Transition>
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

<style scoped>
.histories-move,
.histories-enter-active,
.histories-leave-active {
  transition: all 250ms ease-in-out;
}

.histories-leave-active {
  transition: all 100ms ease-in-out;
  opacity: 0;
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 70ms ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
