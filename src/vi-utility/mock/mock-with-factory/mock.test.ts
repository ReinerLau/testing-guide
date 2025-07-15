import { expect, test, vi } from "vitest";
import { plusOne } from "./module-2";
import { sum } from "./module-1";

// 修改 sum 的原始实现
vi.mock("./module-1", () => ({
  sum: vi.fn().mockReturnValue(3),
}));

test("mock 模块并提供工厂函数", () => {
  plusOne(1, 2);
  expect(sum).toHaveBeenCalledWith(1, 2);
  expect(sum(2, 2)).toBe(3);
});
