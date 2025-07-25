# 断言异常

## 背景

函数执行时可能会出现预期之内的异常情况, 如果无法做兼容处理, 我们通常会手动抛出异常并在函数外部捕获来保证不影响其他逻辑继续正常运行, 所以我们需要验证进入异常情况后, 异常是否被正确抛出

使用断言 API 断言异常, 而非使用 `try...catch` 捕获异常

## 示例

[src/scenarios/assert-exceptions.test.ts](https://github.com/ReinerLau/testing-guide/blob/main/src/scenarios/assert-exceptions.test.ts)