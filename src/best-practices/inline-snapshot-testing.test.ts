import { describe, expect, it } from "vitest";

function toUpperCase(str: string) {
  return str.toUpperCase();
}

describe("大写转换", () => {
  it("如果输入 abc, 则输出 ABC", () => {
    expect(toUpperCase("abc")).toMatchInlineSnapshot();
  });
});
