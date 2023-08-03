import { describe, expect, it, beforeEach, beforeAll } from "vitest";
import { setActivePinia, createPinia } from "pinia";

import usePostStore from "../postStore";
import { MovementDirection } from "~/stores/types/post";
import { HistoryItem } from "~/stores/types/history";

describe("Post store", () => {
  describe("movePost", () => {
    let postStore;

    beforeAll(() => {
      setActivePinia(createPinia());

      postStore = usePostStore();
      postStore.posts = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
      ];
    });

    const cases = [
      [4, MovementDirection.UP, 3],
      [3, MovementDirection.UP, 2],
      [2, MovementDirection.UP, 1],
      [1, MovementDirection.UP, 0],
      [0, MovementDirection.UP, 0],

      [0, MovementDirection.DOWN, 1],
      [1, MovementDirection.DOWN, 2],
      [2, MovementDirection.DOWN, 3],
      [3, MovementDirection.DOWN, 4],
      [4, MovementDirection.DOWN, 4],
    ];

    it.each(cases)("Moving index %i '%s' moves it to index %i", (index, direction, expectedIndex) => {
      const original = postStore.posts[index];
      postStore.movePost(index, direction);

      expect(postStore.posts[expectedIndex].id).toEqual(original.id);
    });
  });

  describe("setPostsToSnapshot", () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    });

    it("sets the supplied snapshot as the state of the store", () => {
      const samplePosts = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
      const snapshot: HistoryItem["snapshot"] = [{ id: 3 }, { id: 1 }, { id: 4 }, { id: 2 }, { id: 5 }];
      const posts = usePostStore();

      posts.posts = samplePosts;
      posts.setPostsToSnapshot(snapshot);

      expect(posts.posts).not.toEqual(samplePosts);
      for (let i = 0; i < snapshot.length; i++ ) {
        expect(posts.posts[i].id).toEqual(snapshot[i].id);
      }
    });
  });
});
