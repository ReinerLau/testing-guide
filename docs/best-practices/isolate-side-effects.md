# 隔离副作用

## 背景

难免有产生副作用的函数, 比如修改全局变量, 修改 DOM, 发送网络请求等. 或通过第三方包产生, 或通过原生的 API 产生. 但在测试环境下, 这些第三方包和原生 API 可能无法正常工作, 导致测试无法正常运行.

而第三方包和原生 API 往往是经过测试, 保证没有 bug 的情况下才会发布给其他开发者调用, 我们重复验证这些副作用是否成功就有点多此一举了, 只要确保按照官方文档正确调用即可.

所以需要隔离这些副作用, 只测试产生副作用以外的核心逻辑, 隔离的边界就是调用这些第三方包和原生 API 的逻辑. 

## 示例

```ts
/**
 * 汇总了副作用与核心的函数, 可以 Mock 后测试, 也可以不测试
 */
function saveUserInfo() {
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
```
