import { test, expect } from "vitest";
import { getUserProfile } from "./utils";

test("快照测试-复杂对象", () => {
  const result = getUserProfile(1);
  expect(result).toMatchSnapshot();
});
