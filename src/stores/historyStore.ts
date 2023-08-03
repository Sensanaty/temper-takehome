import { defineStore } from "pinia";
import { HistoryItem } from "~/stores/types/history";

const useHistoryStore = defineStore("history", {
  state: () => {
    return {
      history: [
        { id: 1, description: "From 1 to 5", snapshot: [{ id: 1, title: "Hello" }] },
        { id: 2, description: "From 2 to 6", snapshot: [{ id: 1, title: "Hello" }] },
        { id: 3, description: "From 3 to 7", snapshot: [{ id: 1, title: "Hello" }] },
      ] as HistoryItem[]
    }
  },
})

export default useHistoryStore;
