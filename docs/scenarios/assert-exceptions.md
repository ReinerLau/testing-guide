# 断言异常

## 背景

当函数接收到非法输入时, 会抛出异常, 建议使用断言 API 断言异常, 而不是使用 `try...catch` 捕获异常

## 示例

```ts
function squareRoot(n: number) {
  if (n < 0) {
    throw new Error("输入必须为非负数");
  }
  return Math.sqrt(n);
}

describe("求平方根", () => {
  it("如果输入为负数, 则抛出异常", () => {
    expect(() => squareRoot(-1)).toThrowError("输入必须为非负数");
  });
});
```