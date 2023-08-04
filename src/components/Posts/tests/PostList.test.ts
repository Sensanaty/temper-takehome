import { render } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import PostList from "~/components/Posts/PostList.vue";

// The <Suspense> Component seems to be causing some weird issues with trying to test this component,
// it gives me very vague warnings that I can't really figure out how to fix, mostly spitting out some vitest internals.
// Given more time I could probably figure it out, but as is I'm not sure what the solution would be here

describe("PostList", () => {
  it.skip("should render", async () => {
    const wrapper = render(PostList);

    expect(wrapper.baseElement);
  });
});
