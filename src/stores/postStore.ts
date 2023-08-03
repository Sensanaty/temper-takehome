import { defineStore } from "pinia";
import { PostItem } from "~/stores/types/post";
import { api } from "~/modules/fetch";

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
    }
  }
})

export default usePostStore;
