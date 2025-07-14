import { describe, expect, test } from "vitest";

describe.concurrent("并发运行中包含顺序运行", () => {
  test("并发测试-1", async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    expect(1).toBe(1);
  });

  test("并发测试-2", async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    expect(1).toBe(1);
  });

  test.sequential("顺序测试-1", () => {
    expect(1).toBe(1);
  });

  test.sequential("顺序测试-2", () => {
    expect(1).toBe(1);
  });
});
