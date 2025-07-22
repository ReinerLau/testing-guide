# AAA 模式

## 建议

如果测试用例比较复杂, 可以将测试用例的逻辑划分为以下三个部分:

- Arrange: 给测试提供准备环境的代码 
- Act: 执行测试的代码
- Assert: 断言测试结果的代码

```ts
describe('比对功能 - Compare Function', () => {
  it('如果 a 小于 b, 则返回 "小于"', () => {
    // Arrange
    const a = 1
    const b = 2

    // Act
    const result = compare(a, b)

    // Assert
    expect(result).toBe('小于')
  })
})
```

## 否则

没有清晰的划分, 很难一眼看懂测试用例的逻辑, 加大理解成本, 比如: 

```ts
describe('比对功能 - Compare Function', () => {
  it('如果 a 小于 b, 则返回 "小于"', () => {
    const a = 1
    const b = 2
    const result = compare(a, b)
    expect(result).toBe('小于')
  })
})
```

## 示例

`src/best-practices/aaa-pattern.test.ts`