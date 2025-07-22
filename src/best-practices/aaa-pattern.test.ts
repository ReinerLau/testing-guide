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
    // Arrange
    const a = 1;
    const b = 2;

    // Act
    const result = compare(a, b);

    // Assert
    expect(result).toBe("小于");
  });
});
