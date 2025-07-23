# 测试属性

## 建议

测试 UI 时, 需要查找某些元素则给元素添加测试专用的属性, 比如 `data-test`

```vue {4}
<template>
  <div>
    <div>List</div>
    <div v-for="item in items" :key="item" data-test="item">{{ item }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>
```

```ts {12}
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

通过 html 原生属性查找元素, 比如 class 会经常变更导致测试失败

## 示例

`src/best-practices/ui-separation/ui-separation.test.ts`