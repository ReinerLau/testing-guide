import { afterEach, expect, test } from "vitest";

afterEach(() => {
  console.log("每次测试后运行");
});

test("测试-1", () => {
  console.log("测试-1");
  expect(1).toBe(1);
});

test("测试-2", () => {
  console.log("测试-2");
  expect(1).toBe(1);
});
