import { fireEvent, render } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import HistoryItem from "~/components/History/HistoryItem.vue";
import type { HistoryItem as HistoryItemType } from "~/stores/types/history";
import useHistoryStore from "~/stores/historyStore";

describe("HistoryItem", () => {
  const setup = (options = {}) =>
    render(HistoryItem, {
      ...options,
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              history: [{ id: "abcdef", description: "Moved post 0 from index 0} to index 1", snapshot: [{ id: 1 }, { id: 2 }] }]
            }
          }),
        ]
      }
    });

  it("should render", () => {
    const wrapper = setup({
      propsData: {
        history: { id: "abcdef", description: "Moved post 0 from index 0} to index 1", snapshot: [{ id: 1 }, { id: 2 }] } as HistoryItemType,
        hasSiblings: false,
        index: 0
      }
    });

    expect(wrapper.baseElement);
    expect(wrapper.findByText("Moved post 0 from index 0} to index 1"));
    expect(wrapper?.getByRole("button")?.textContent?.trim()).toBe("Time Travel");
  });

  it("should not exist after the button is clicked", async () => {
    const wrapper = setup({
      propsData: {
        history: { id: "abcdef", description: "Moved post 0 from index 0} to index 1", snapshot: [{ id: 1 }, { id: 2 }] } as HistoryItemType,
        hasSiblings: false,
        index: 0
      }
    });
    const historyStore = useHistoryStore();

    await fireEvent.click(wrapper.getByRole("button"));
    expect(historyStore.timeTravel).toHaveBeenCalledOnce();
  });
});
