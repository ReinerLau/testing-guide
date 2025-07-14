import { expect, test } from "vitest";

test.each([
  { a: 1, b: 1 },
  { a: 2, b: 2 },
])("循环测试($a, $b)", ({ a, b }) => {
  expect(a).toBe(b);
});
