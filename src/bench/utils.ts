/**
 * 选择排序算法
 *
 * 选择排序是一种简单直观的排序算法。它的工作原理是：
 * 1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
 * 2. 然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾
 * 3. 重复第二步，直到所有元素均排序完毕
 *
 * 时间复杂度：O(n²)
 * 空间复杂度：O(1)
 *
 * @param arr 需要排序的数组
 * @returns 排序后的数组（原地排序，返回原数组的引用）
 */
export function selectionSort<T>(arr: T[]): T[] {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    // 找到从i到末尾的最小值的索引
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 如果找到的最小值不是当前位置，则交换
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}
