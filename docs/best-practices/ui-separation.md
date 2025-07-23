# UI 分离

## 建议

测试 UI 组件时，只提取 UI 渲染后的纯数据进行测试，不包含 UI 的结构, 同时禁用动画效果

```ts
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
```

## 否则

带有 UI 结构的测试逻辑很脆弱，带有动画效果还会拖慢, 仅抽离生成数据的逻辑也脱离了用户使用中的实际情况

## 示例

`src/best-practices/ui-separation/ui-separation.test.ts`