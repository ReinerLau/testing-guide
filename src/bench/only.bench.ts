import { bench } from "vitest";
import { selectionSort } from "./utils";

bench.only("只运行指定测试", () => {
  selectionSort([1, 2, 3, 4, 5]);
});

bench("其他测试", () => {
  selectionSort([1, 2, 3, 4, 5]);
});
