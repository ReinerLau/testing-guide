import { describe, afterAll, expect, test } from "vitest";

describe("所有测试后运行一次", () => {
  afterAll(() => {
    console.log("所有测试后运行一次");
  });

  test("测试-1", () => {
    console.log("测试-1");
    expect(1).toBe(1);
  });

  test("测试-2", () => {
    console.log("测试-2");
    expect(1).toBe(1);
  });
});
