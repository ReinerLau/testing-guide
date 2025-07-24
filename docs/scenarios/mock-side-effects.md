# Mock 副作用

## 背景

[隔离副作用](./isolate-side-effects.md) 中提到, 副作用需要被隔离尽量不去测试, 但有时候我们需要获取副作用的输出结果进行下一步处理, 比如获取网络请求的响应然后处理成方便在页面上展示的数据结构 

如果某一步处理属于内部实现, 只有在当前模块内部被调用, 如果导出给测试文件进行[单元测试](../testing-basics/unit-testing.md)时, 属于[白盒测试](../best-practices/white-box-testing.md), 有被重构导致测试用例失效的风险, 但不是说完全不可以为了测试而导出, 这是个人喜好和权衡维护成本的问题.

假如你想进行[黑盒测试](../testing-basics/black-box-testing.md), 只导出最终输出结果的函数进行测试, 不关心内部实现, 那么需要在确定副作用会以什么形式输出结果之后使用[测试替身](./testing-basics/test-doubles.md)模拟,因为副作用在测试环境下无法正常运作, 需要确保测试结果可控, 这种测试也属于[集成测试](../testing-basics/integration-testing.md)

## 示例

[src/scenarios/mock-side-effects.test.ts](https://github.com/ReinerLau/testing-guide/blob/main/src/scenarios/mock-side-effects.test.ts)