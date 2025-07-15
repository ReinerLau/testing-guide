import { bench } from "vitest";
import { selectionSort } from "./utils";

bench.skip("跳过测试", () => {
  selectionSort([1, 2, 3, 4, 5]);
});
