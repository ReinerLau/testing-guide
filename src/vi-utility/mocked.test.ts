import { expect, test, vi } from "vitest";
import { sum } from "./utils";

vi.mock("./utils");

test("mocked", () => {
  expect(sum(1, 2)).toBeUndefined();
  vi.mocked(sum).mockReturnValue(4);
  expect(sum(1, 2)).toBe(4);
});
