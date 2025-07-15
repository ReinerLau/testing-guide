import { expect, test, vi } from "vitest";
import { plusOne } from "./module-2";
import { sum } from "./module-1";

// sum 不保留原始实现
vi.mock("./module-1", { spy: true });

test("mock 模块并保留原始实现", () => {
  plusOne(1, 2);
  expect(sum).toHaveBeenCalledWith(1, 2);
  expect(sum(1, 2)).toBe(3);
});
