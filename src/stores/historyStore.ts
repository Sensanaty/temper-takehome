import { defineStore } from "pinia";
import { HistoryItem } from "~/stores/types/history";

const useHistoryStore = defineStore("history", {
  state: () => {
    return {
      history: [] as HistoryItem[]
    }
  },
})

export default useHistoryStore;
