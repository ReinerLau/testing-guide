import { expect, test, vi } from "vitest";
import { sum } from "./utils";

test("doMock", async () => {
  expect(sum(1, 2)).toBe(3);
  vi.doMock("./utils", () => ({
    sum: vi.fn().mockReturnValue(4),
  }));
  const { sum: sumMock } = await import("./utils");
  expect(sumMock(1, 2)).toBe(4);
});
