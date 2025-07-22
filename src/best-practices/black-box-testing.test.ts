import { describe, expect, it } from "vitest";

class User {
  getLastName() {
    return "Lau";
  }

  getName(firstName: string) {
    return `${firstName} ${this.getLastName()}`;
  }
}

describe("用户 - User", () => {
  describe("获取姓名", () => {
    it("如果名字是 'Reiner', 则全名是 'Reiner Lau'", () => {
      expect(new User().getName("Reiner")).toBe("Reiner Lau");
    });
  });
});
