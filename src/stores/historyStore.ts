import { defineStore } from "pinia";
import type { HistoryItem } from "~/stores/types/history";
import type { PostItem } from "~/stores/types/post";

const useHistoryStore = defineStore("history", {
  state: () => {
    return {
      history: [] as HistoryItem[]
    }
  },

  actions: {
    recordHistory(postId: PostItem["id"], oldIndex: number, newIndex: number, snapshot: HistoryItem["snapshot"]) {
      const item: HistoryItem = {
        description: `Moved post ${postId} from index ${oldIndex} to index ${newIndex}`,
        snapshot,
      };

      this.history.unshift(item);
    }
  }
})

export default useHistoryStore;
