import { describe, it, expect, vi } from "vitest";

/**
 * 副作用
 */
async function fetchUserInfo(query: { page: number; limit: number }) {
  const res = await fetch(
    `https://api.example.com/user/list?page=${query.page}&limit=${query.limit}`,
    {
      method: "GET",
    }
  );
  return res.json();
}

/**
 * 内部实现, 黑盒测试不导出
 */
function processUserInfo(userInfo: { name: string; age: number }[]) {
  return userInfo.map((item) => ({
    name: item.name,
  }));
}

/**
 * 集成测试
 */
async function getUserInfo(page: number, limit: number) {
  const userInfo = await fetchUserInfo({ page: 1, limit: 10 });
  const processedUserInfo = processUserInfo(userInfo);

  return processedUserInfo.map((item) => item.name);
}

/**
 * 测试替身
 */
const fetchMock = vi.fn().mockResolvedValue({
  json: () =>
    Promise.resolve([
      { name: "John", age: 20 },
      { name: "Jane", age: 21 },
    ]),
});

/**
 * 使用测试替身模拟副作用
 */
vi.stubGlobal("fetch", fetchMock);

describe("获取用户信息", () => {
  it("happy path", async () => {
    const res = await getUserInfo(1, 10);
    expect(res).toEqual(["John", "Jane"]);
  });
});
