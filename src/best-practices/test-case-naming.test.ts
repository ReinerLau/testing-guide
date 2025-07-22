import { describe, expect, it } from "vitest";

function compare(a: number, b: number) {
  if (a > b) {
    return "大于";
  }

  if (a < b) {
    return "小于";
  }

  return "等于";
}

describe("比对功能 - Compare Function", () => {
  it("如果 a 小于 b, 则返回 '小于'", () => {
    expect(compare(1, 2)).toBe("小于");
  });

  it("如果 a 大于 b, 则返回 '大于'", () => {
    expect(compare(3, 2)).toBe("大于");
  });

  it("如果 a 等于 b, 则返回 '等于'", () => {
    expect(compare(2, 2)).toBe("等于");
  });
});
