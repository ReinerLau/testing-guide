import { describe, expect, it } from "vitest";
import { faker } from "@faker-js/faker";

function validateName(name: string) {
  // 名字不能为带空白符
  if (/\s/.test(name)) {
    return false;
  } else {
    return true;
  }
}

describe("验证名字", () => {
  it("如果名字不带空白符, 则通过", () => {
    const result = validateName(faker.person.firstName());
    expect(result).toBe(true);
  });

  it("如果名字带空白符, 则不通过", () => {
    const result = validateName(faker.person.fullName());
    expect(result).toBe(false);
  });
});
