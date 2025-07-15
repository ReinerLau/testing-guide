import { beforeAll, expect, test } from "vitest";

beforeAll(() => {
  console.log("所有测试前运行一次");
});

test("测试-1", () => {
  console.log("测试-1");
  expect(1).toBe(1);
});

test("测试-2", () => {
  console.log("测试-2");
  expect(1).toBe(1);
});
