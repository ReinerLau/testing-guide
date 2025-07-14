import { expect, test } from "vitest";

test.concurrent("并发测试-1", async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  expect(1).toBe(1);
});

test.concurrent("并发测试-2", async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  expect(1).toBe(1);
});

test("其他测试", () => {
  expect(1).toBe(1);
});
