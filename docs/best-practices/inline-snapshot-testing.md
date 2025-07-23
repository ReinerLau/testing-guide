# 内联快照测试

## 建议

需要快照时, 优先考虑使用内联快照, 且快照内容要尽量少

```ts
function toUpperCase(str: string) {
  return str.toUpperCase();
}

describe("大写转换", () => {
  it("如果输入 abc, 则输出 ABC", () => {
    expect(toUpperCase("abc")).toMatchInlineSnapshot();
  });
});
```

首次测试后会将自动生成快照结果更新到测试文件中 

```ts {3}
describe("大写转换", () => {
  it("如果输入 abc, 则输出 ABC", () => {
    expect(toUpperCase("abc")).toMatchInlineSnapshot(`"ABC"`);
  });
});
```

## 否则

将快照结果写入到单独的文件中且内容特别长, 大部分情况下, 我们不会也难以去比对的, 里面可能包含了大量我们不关心的内容且十分脆弱, 比如少一个空格都会导致失败

## 示例

`src/best-practices/inline-snapshot-testing.test.ts`
