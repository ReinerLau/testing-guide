# 搭建环境

## 安装 Vitest

```sh
pnpm add -D vitest
```

## 编写测试

遵循[TDD](../testing-basics/tdd.md)的开发流程和[文件结构](./file-structure.md)的规范, 先在 `src/utils/` 下编写测试

```ts
import { expect, test } from 'vitest'
import { sum } from './sum.ts'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
```

同样在 `src/utils/` 下实现功能

```ts
export function sum(a, b) {
  return a + b;
}
```

## 运行测试

为了方便运行测试, 配置 `package.json` 的 `scripts` 字段

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

终端运行脚本

```sh
pnpm test
```

终端打印测试结果则表示环境搭建成功