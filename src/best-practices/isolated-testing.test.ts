import { describe, expect, it } from "vitest";

class User {
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  changeName(name: string) {
    this._name = name;
  }
}

function getNewUser(name: string) {
  return new User(name);
}

describe("用户服务", () => {
  it("如果输入 Reiner, 则输出 Reiner", () => {
    const user = getNewUser("Reiner");
    expect(user.name).toBe("Reiner");
  });

  it("如果输入 Alan, 则输出 Alan", () => {
    const user = getNewUser("Alan");
    expect(user.name).toBe("Alan");
  });
});
