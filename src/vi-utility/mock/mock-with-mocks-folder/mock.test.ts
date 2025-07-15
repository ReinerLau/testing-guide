import { expect, test, vi } from "vitest";
import { plusOne } from "./module-2";
import { sum } from "./module-1";

// 使用 __mocks__ 文件夹中同名文件的实现
vi.mock("./module-1");

test("mock 模块并使用 __mocks__ 文件夹中同名文件的实现", () => {
  plusOne(1, 2);
  expect(sum).toHaveBeenCalledWith(1, 2);
  expect(sum(2, 2)).toBe(3);
});
