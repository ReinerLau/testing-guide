import { bench } from "vitest";
import { selectionSort } from "./utils";

bench("测试代码性能", () => {
  selectionSort([1, 2, 3, 4, 5]);
});
