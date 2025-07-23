# 隔离测试

## 建议

每个测试相互独立, 互不影响, 不共享数据

## 否则

一个测试失败可能是因为另外一个测试篡改了共享的数据

## 示例

`src/best-practices/isolated-testing.test.ts`
