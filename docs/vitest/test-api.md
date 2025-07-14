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

## 并发测试

API: `test.concurrent`

场景: 如果同一个测试文件中多个测试是异步且需要时间得到结果的, 可以同时运行这些测试, 这样测试之间不需要互相等待, 加快测试运行速度

示例: `src/test-api/concurrent.test.ts`, 运行测试后会看到两个并发测试同时运行, 其他测试用例则是等待这两个并发测试运行完再运行

## 顺序测试

API: `test.sequential`

场景: 如果测试套件定义为[并发测试](#并发测试), 这样测试套件中的所有测试都是同时运行的, 但可以指定部分测试按顺序运行

示例: `src/test-api/sequential.test.ts`, 运行测试后会看到两个并发测试同时运行, 其他测试用例则是等待这两个并发测试运行完再按顺序运行

## 未实现测试

API: `test.todo`

场景: 如果某个测试用例还未实现, 可以标记该测试用例

示例: `src/test-api/todo.test.ts`, 运行测试后会看到该测试用例后面显示 `skipped`, 同时统计几条 todo