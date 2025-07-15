import { describe, expect, onTestFinished, test } from "vitest";

describe("特定测试结束运行", () => {
  test("测试-1", () => {
    console.log("测试-1");
    onTestFinished(() => {
      console.log("特定测试结束运行");
    });
    expect(1).toBe(1);
  });

  test("测试-2", () => {
    console.log("测试-2");
    expect(1).toBe(1);
  });
});
