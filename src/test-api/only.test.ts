import { describe, expect, test } from "vitest";

test.only("只运行指定测试", () => {
  expect(1).toBe(1);
});

test("其他测试", () => {
  expect(1).toBe(2);
});
