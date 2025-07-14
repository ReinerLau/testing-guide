import { expect, test } from "vitest";

function isProduction() {
  if (process.env.NODE_ENV === "production") {
    return true;
  }
  return false;
}

test.skipIf(process.env.NODE_ENV !== "production")("特定条件跳过测试", () => {
  expect(isProduction()).toBe(true);
});
