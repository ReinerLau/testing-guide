import { expect, test, vi } from "vitest";
import { plusOne } from "./module-2";
import { sum } from "./module-1";

// sum 不保留原始实现
vi.mock("./module-1");

test("mock 模块但没有工厂函数", () => {
  plusOne(1, 2);
  expect(sum).toHaveBeenCalledWith(1, 2);
  expect(sum(1, 2)).toBeUndefined();
});
