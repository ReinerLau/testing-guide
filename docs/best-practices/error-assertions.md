# 错误断言

## 建议

对错误进行断言, 而不是使用 try-catch

```ts
function getName(name?: string) {
  if (!name) {
    throw new Error("name is required");
  }
  return name;
}

describe("用户服务", () => {
  describe("获取名字", () => {
    it("如果输入 Reiner, 则输出 Reiner", () => {
      expect(getName("Reiner")).toBe("Reiner");
    });

    it("如果没有输入, 则抛出错误", () => {
      expect(() => getName()).toThrowError("name is required");
    });
  });
});
```

## 否则

使用 try-catch 很难看出错误来自哪里

## 示例

`src/best-practices/error-assertions.test.ts`