import { bench } from "vitest";
import { selectionSort } from "./utils";

bench("基本用法", () => {
  selectionSort([1, 2, 3, 4, 5]);
});
