import { fireEvent, render } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import PostItem from "~/components/Posts/PostItem.vue";
import { createTestingPinia } from "@pinia/testing";
import type { PostItem as PostItemType } from "~/stores/types/post";
import usePostStore from "~/stores/postStore";

describe("PostItem", () => {
  const setup = (options = {}) =>
    render(PostItem, {
      ...options,
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              posts: [{ id: 1 }]
            }
          }),
        ]
      }
    });

  it("should render", () => {
    const wrapper = setup({
      propsData: {
        post: { id: 1 } as PostItemType,
        isFirstItem: false,
        isLastItem: false,
        index: 0,
      }
    });

    expect(wrapper.findByText("Post 1")).not.toBeNull();
    expect(wrapper.queryAllByRole("button").length).toBe(2);
  });

  it("should hide the up button if the card is first", () => {
    const wrapper = setup({
      propsData: {
        post: { id: 1 } as PostItemType,
        isFirstItem: true,
        isLastItem: false,
        index: 0,
      }
    });

    expect(!wrapper.getByTestId("move-up"));
    expect(wrapper.getByTestId("move-down"));
  });

  it("should hide the down button if the card is first", () => {
    const wrapper = setup({
      propsData: {
        post: { id: 1 } as PostItemType,
        isFirstItem: false,
        isLastItem: true,
        index: 0,
      }
    });

    expect(wrapper.getByTestId("move-up"));
    expect(!wrapper.getByTestId("move-down"));
  });

  it("should hide both buttons if it's the only post", () => {
    const wrapper = setup({
      propsData: {
        post: { id: 1 } as PostItemType,
        isFirstItem: true,
        isLastItem: true,
        index: 0,
      }
    });

    expect(!wrapper.getByTestId("move-up"));
    expect(!wrapper.getByTestId("move-down"));
  });

  it("should have a different index after clicking the button", async () => {
    const wrapper = setup({
      propsData: {
        post: { id: 1 } as PostItemType,
        isFirstItem: false,
        isLastItem: false,
        index: 0,
      },
    });

    const postStore = usePostStore();

    const button: Element = wrapper.getByTestId("move-down");
    await fireEvent.click(button);
    expect(postStore.movePost).toHaveBeenCalledOnce();
  });
});
