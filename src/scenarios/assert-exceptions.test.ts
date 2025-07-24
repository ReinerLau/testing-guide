import { describe, expect, it } from "vitest";

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
