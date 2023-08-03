import { defineStore } from "pinia";
import { MovementDirection, PostItem } from "~/stores/types/post";
import { api } from "~/modules/fetch";
import useHistoryStore from "~/stores/historyStore";
import { HistoryItem } from "~/stores/types/history";

const usePostStore = defineStore("post", {
  state: () => {
    return {
      posts: [] as PostItem[]
    };
  },

  actions: {
    async fetchPosts(start = 0, limit = 5, page = 1) {
      try {
        const response = await api.get("posts", { params: { "_page": page, "_start": start, "_limit": limit } });

        this.posts = response.data;

        return Promise.resolve(response.data);
      } catch (error) {
        return Promise.reject(error);
      }
    },

    movePost(index: number, direction: MovementDirection) {
      const currentPosts = [...this.posts];
      const { recordHistory } = useHistoryStore();
      const post = this.posts?.splice(index, 1)[0];
      const newIndex = direction === MovementDirection.UP ? index - 1 : index + 1;

      recordHistory(post.id, index, newIndex, currentPosts);
      this.posts?.splice(newIndex, 0, post);
    },

    setPostsToSnapshot(snapshot: HistoryItem["snapshot"]) {
      this.posts = snapshot;
    }
  }
});

export default usePostStore;
