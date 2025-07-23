import { describe, expect, it } from "vitest";

function getName(name?: string) {
  if (!name) {
    throw new Error("name is required");
  }
  return name;
}

describe("用户服务", () => {
  describe("获取名字", () => {
    it("如果输入 Reiner, 则输出 Reiner", () => {
      expect(getName("Reiner")).toBe("Reiner");
    });

    it("如果没有输入, 则抛出错误", () => {
      expect(() => getName()).toThrowError("name is required");
    });
  });
});
