import { expect, test } from "vitest";

test.skip("跳过测试", () => {
  expect(1).toBe(2);
});
