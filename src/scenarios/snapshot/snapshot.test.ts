import { test, expect, describe } from "vitest";
import { getUserProfile, renderButton } from "./utils";

describe("快照测试", () => {
  test("快照测试 - 复杂对象", () => {
    const result = getUserProfile(1);
    expect(result).toMatchSnapshot();
  });

  test("快照测试 - UI 组件", () => {
    const result = renderButton({
      text: "提交",
      icon: "🚀",
      size: "large",
      disabled: false,
    });
    expect(result).toMatchSnapshot();
  });
});
