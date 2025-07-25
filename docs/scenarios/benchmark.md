# 基准测试

## 背景

应用在生产环境使用过程中可能会出现各种卡顿缓慢的性能瓶颈问题, 我们首先要[定位]()到问题根源, 是网络问题? 还是代码问题? 如果是代码问题, 又怎么定义是多慢才算慢, 因此需要提供一个基准进行对比, 如果确实是慢并找到了的解决方案, 对其进行重构, 重构完也要进行基准测试与重构前进行比对, 看看具体提升了多少

## 示例

[src/scenarios/benchmark.bench.ts](https://github.com/ReinerLau/testing-guide/blob/main/src/scenarios/benchmark.bench.ts)