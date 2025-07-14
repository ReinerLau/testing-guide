import { expect, test } from "vitest";

test.fails("失败测试", () => {
  expect(1).toBe(2);
});
