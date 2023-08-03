import { render } from "@testing-library/vue";
import { describe, expect, it, beforeEach } from "vitest";
import App from "~/App.vue";
import { createPinia, setActivePinia } from "pinia";

describe("App", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should render", () => {
    const wrapper = render(App);

    expect(wrapper.queryByText("Sortable Post List"));
  });
});
