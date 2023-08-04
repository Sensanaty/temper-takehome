import { describe, expect, it, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";

import useHistoryStore from "../historyStore";
import usePostStore from "../postStore";
import type { PostItem } from "~/stores/types/post";

describe("History Store", () => {
  const posts: PostItem[] = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("recordHistory", () => {
    it("takes a snapshot of the posts passed to it", () => {
      const historyStore = useHistoryStore();
      expect(historyStore.history.length).toBe(0);

      historyStore.recordHistory(0, 0, 1, [...posts]);

      expect(historyStore.history.length).toBe(1);
      expect(historyStore.history[0].snapshot).toEqual(posts);
      expect(historyStore.history[0].description).toEqual("Moved post 0 from index 0 to index 1");
    });
  });

  describe("timeTravel", () => {
    it("properly timetravels to a provided snapshot", () => {
      const postStore = usePostStore();
      const historyStore = useHistoryStore();
      postStore.posts = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 0 }];
      historyStore.recordHistory(0, 3, 4, [...posts]);

      expect(postStore.posts).not.toEqual(posts);
      expect(historyStore.history.length).toBe(1);
      historyStore.timeTravel(0);

      expect(historyStore.history.length).toBe(0);
      expect(postStore.posts).toEqual(posts);
    });
  });
});
