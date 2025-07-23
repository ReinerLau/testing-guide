import { describe, expect } from "vitest";
import { it, fc } from "@fast-check/vitest";

function concat(a: string, b: string, c: string) {
  return a + b + c;
}

describe("字符串拼接", () => {
  it.prop([fc.string(), fc.string(), fc.string()])(
    "如果拼接 a + b + c, 则结果包含 b 字符串",
    (a, b, c) => {
      expect(concat(a, b, c)).to.include(b);
    }
  );
});
