import { render } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import PostList from "~/components/Posts/PostList.vue";

describe("PostList", () => {
  it.skip("should render", async () => {
    const wrapper = render(PostList);

    expect(wrapper.baseElement);
  });
});
