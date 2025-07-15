import { describe, expect, onTestFailed, test } from "vitest";

describe("特定测试失败运行", () => {
  test("测试-1", () => {
    console.log("测试-1");
    onTestFailed(() => {
      console.log("特定测试失败运行");
    });
    expect(1).toBe(2);
  });

  test("测试-2", () => {
    console.log("测试-2");
    expect(1).toBe(1);
  });
});
