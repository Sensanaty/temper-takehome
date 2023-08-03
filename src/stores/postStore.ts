import { defineStore } from "pinia";
import { MovementDirection, PostItem } from "~/stores/types/post";
import { api } from "~/modules/fetch";
import useHistoryStore from "~/stores/historyStore";

const usePostStore = defineStore("post", {
  state: () => {
    return {
      posts: [] as PostItem[]
    }
  },

  actions: {
    async fetchPosts(start = 0, limit = 5, page = 1) {
      try {
        const response = await api.get("posts", { params: { "_page": page, "_start": start, "_limit": limit } })

        this.posts = response.data;

        return Promise.resolve(response.data);
      } catch (error) {
        return Promise.reject(error);
      }
    },

    movePost(index: number, direction: MovementDirection) {
      const { recordHistory } = useHistoryStore();
      const post = this.posts?.splice(index, 1)[0];
      const newIndex = direction === MovementDirection.UP ? index - 1 : index + 1;

      this.posts?.splice(newIndex, 0, post);
      recordHistory(post.id, index, newIndex, [...this.posts]);
    }
  }
})

export default usePostStore;
