import { describe, expect, it } from "vitest";

/**
 * 汇总了副作用与核心的函数, 可以 Mock 后测试, 也可以不测试
 */
function saveUserInfo(userInfo: { name: string; age: number }) {
  const user = getUserInfo();
  saveToLocalStorage("userInfo", JSON.stringify(user));
}

/**
 * 需要测试的核心逻辑
 */
function getUserInfo() {
  return {
    name: "John",
    age: 20,
  };
}

/**
 * 不需要测试的纯副作用逻辑
 */
function saveToLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

describe("存储用户信息", () => {
  it("获取用户信息", () => {
    expect(getUserInfo()).toEqual({
      name: "John",
      age: 20,
    });
  });
});
