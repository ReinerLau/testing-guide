/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import List from "./List.vue";

describe("list 组件", () => {
  it("渲染列表", () => {
    const items = ["item1", "item2", "item3"];

    const wrapper = mount(List, {
      props: {
        items,
      },
    });

    const renderedItems = wrapper
      .findAll('[data-test="item"]')
      .map((item) => item.text());
    expect(renderedItems).toEqual(items);
  });
});
