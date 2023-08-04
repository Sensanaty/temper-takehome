import { fireEvent, render } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import HistoryList from "~/components/History/HistoryList.vue";
import type { HistoryItem } from "~/stores/types/history";
import useHistoryStore from "~/stores/historyStore";

describe("HistoryList", () => {
  const history: HistoryItem[] = [{ id: "abcdef", description: "Moved post 0 from index 0} to index 1", snapshot: [{ id: 1 }, { id: 2 }] }];

  const setup = (options = {}) =>
    render(HistoryList, {
      ...options,
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              history: []
            }
          }),
        ]
      }
    });

  it("should render", () => {
    const wrapper = setup();

    expect(wrapper.baseElement);
    expect(wrapper.findByText("List of actions committed"));
  });

  describe("default content & list rendering", () => {
    it("should render placeholder content if no history items exist", () => {
      const wrapper = setup();
      expect(wrapper.findByText("No actions committed recently"));
    });

    it("should render the list items if any history items exist", () => {
      const historyStore = useHistoryStore();
      historyStore.history = history;
      const wrapper = setup();

      expect(wrapper.findByText(history[0].description));
    });
  });
});
