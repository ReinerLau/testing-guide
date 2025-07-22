import { describe, expect, it } from "vitest";

function filter(arr: number[]) {
  return arr.filter((item) => item <= 2);
}

describe("筛选功能 - Filter Function", () => {
  it("如果数组是 [1, 2, 3], 则返回 [1, 2]", () => {
    // 兼容 Chai 的断言方式, 参考 https://vitest.dev/guide/features.html#chai-and-jest-expect-compatibility
    expect(filter([1, 2, 3]))
      .to.include.members([1, 2])
      .but.not.include.members([3]);
  });
});
