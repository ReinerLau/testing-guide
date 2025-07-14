# Test API

## 跳过测试

API:`test.skip` 

场景: 想暂时跳过某些测试

示例: `src/test-api/skip.test.ts`, 运行测试后会看到该测试用例后面显示 `skipped`

## 特定条件跳过测试

API: `test.skipIf`

场景: 在特定条件下跳过测试, 假设某个函数的逻辑只在 `process.env.NODE_ENV` 为 `production` 时生效, 而 vitest 默认运行时 `process.env.NODE_ENV` 为 `test`, 此时针对该函数运行测试只会得到报错的结果, 因此需要在 `process.env.NODE_ENV` 为非 `production` 的情况下跳过测试避免报错

示例: `src/test-api/skipIf.test.ts`, 运行测试后会看到该测试用例显示 `skipped`

## 特定条件运行测试

API: `test.runIf`

场景: 和 [特定条件跳过测试](#特定条件跳过测试) 相反, 只在特定条件下运行测试

示例: `src/test-api/runIf.test.ts`, 运行测试后会看到该测试用例显示 `skipped`

## 只运行指定测试

API: `test.only`

场景: 只运行指同一个测试文件中指定测试, 通常用于调试

示例: `src/test-api/only.test.ts`, 运行测试后会看到同一个文件中的其他测试用例显示 `skipped`