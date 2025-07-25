import { describe, it, expect, bench } from "vitest";
import { faker } from "@faker-js/faker";

// 慢速实现：使用低效的嵌套循环计算数组总和
function slowSum(numbers: number[]): number {
  let sum = 0;
  // 故意使用低效的算法：对每个元素都重新遍历一次数组来累加
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === i) {
        sum += numbers[i];
      }
    }
  }
  return sum;
}

// 快速实现：使用高效的单次遍历计算数组总和
function fastSum(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

describe("数组求和", () => {
  const testData = Array.from({ length: 5000 }, () =>
    faker.number.int({ min: 1, max: 1000 })
  );

  bench("重构前", () => {
    slowSum(testData);
  });

  bench("重构后", () => {
    fastSum(testData);
  });
});
