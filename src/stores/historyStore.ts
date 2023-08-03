import { defineStore } from "pinia";
import type { HistoryItem } from "~/stores/types/history";
import type { PostItem } from "~/stores/types/post";
import usePostStore from "~/stores/postStore";

const useHistoryStore = defineStore("history", {
  state: () => {
    return {
      history: [] as HistoryItem[]
    };
  },

  actions: {
    recordHistory(postId: PostItem["id"], oldIndex: number, newIndex: number, snapshot: HistoryItem["snapshot"]) {
      const item: HistoryItem = {
        id: crypto.randomUUID(),
        description: `Moved post ${postId} from index ${oldIndex} to index ${newIndex}`,
        snapshot,
      };

      this.history.unshift(item);
    },

    timeTravel(index: number) {
      const { setPostsToSnapshot } = usePostStore();

      setPostsToSnapshot(this.history[index].snapshot);
      this.history = this.history.slice(index + 1);
    }
  }
});

export default useHistoryStore;
