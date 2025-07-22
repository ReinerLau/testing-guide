# BDD 断言

## 建议

使用 BDD 风格的断言, 也就是使用人类的自然语言(英语)来描述你的期望, 比如: 

```ts
describe("筛选功能 - Filter Function", () => {
  it("如果数组是 [1, 2, 3], 则返回 [1, 2]", () => {
    expect(filter([1, 2, 3]))
      .to.include.members([1, 2])
      .but.not.include.members([3]);
  });
});
```

转化成自然语言就是: `expect filter([1, 2, 3]) to include members [1, 2] but not include members [3]`

## 否则

使用非 BDD 风格的断言, 必须浏览冗长复杂的代码, 加大理解成本, 比如: 

```ts
describe("筛选功能 - Filter Function", () => {
  it("如果数组是 [1, 2, 3], 则返回 [1, 2]", () => {
    const result = filter([1, 2, 3])

    assert.include(result, 1)
    assert.include(result, 2)
    assert.notInclude(result, 3)
  });
});
```

## 示例

`src/best-practices/bdd-assertions.test.ts`