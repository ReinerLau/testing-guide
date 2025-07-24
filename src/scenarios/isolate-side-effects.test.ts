import { describe, expect, it } from "vitest";

/**
 * 汇总了副作用与核心的函数
 * 可以 Mock saveToLocalStorage 后测试, 也可以不测试
 */
function saveUserInfo(name: string, age: number) {
  const user = getUserInfo(name, age);
  saveToLocalStorage("userInfo", JSON.stringify(user));
}

/**
 * 需要测试的核心逻辑
 */
function getUserInfo(name: string, age: number) {
  return {
    name,
    age,
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
    expect(getUserInfo("John", 20)).toEqual({
      name: "John",
      age: 20,
    });
  });
});
