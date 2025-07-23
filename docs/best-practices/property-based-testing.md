# 基于属性测试

## 建议

针对可以接收多个形参的函数, 我们要尽可能地罗列出所有形参组合的情况进行测试, 增加发现 bug 的可能, 

比如一个函数如果可以接收 5 个以上的形参, 那么这些形参可以形成成千上万种组合, 其中任何一种组合都有可能使测试失败

可以使用 [fast-check](https://www.npmjs.com/package/@fast-check/vitest) 自动模拟各种组合, 默认执行 100 次测试

```ts
function concat(a: string, b: string, c: string) {
  return a + b + c;
}

describe("字符串拼接", () => {
  it.prop([fc.string(), fc.string(), fc.string()])(
    "如果拼接 a + b + c, 则结果包含 b 字符串",
    (a, b, c) => {
      expect(concat(a, b, c)).to.include(b);
    }
  );
});
```

## 否则

我们只能手动预设各种可能的情况, 花费大量精力且代码冗余, 甚至依旧难以覆盖到所有边缘情况

## 示例

`src/best-practices/property-based-testing.test.ts`

## 定义

基于属性测试, 英文全名 Property-Based Testing (PBT)

所谓属性, 就是事物不变的性质或规则, 比如数学的加法交换律, 不管是 a + b 还是 b + a, 结果都是一样的, 不会因为 a 和 b 的值而改变

在代码中的体现就是不管输入的具体值是什么, 只要满足输入和输出的逻辑即可