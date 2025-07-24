# JavaScript 测试指南

## 前言

本指南虽称之为 “JavaScript 测试指南”, 但其中涉及的底层思想基本也适用在其他语言的测试中, 这里使用 JavaScript 作为示范, 只因本人对该语言更为熟悉, 本人也尽量使用了更通用的、更底层的文字来描述, 希望能对读者有所帮助

同理, 虽然本指南基于 Vitest 这个测试框架编写示例, 但编写思路也适用于其他测试框架, 你可以根据你的实际情况和喜好选择合适的测试框架

## 快速上手

克隆代码到本地

```bash
git clone https://github.com/ReinerLau/testing-guide.git 
```

安装依赖(推荐 pnpm)

```bash
pnpm install
```

### 运行测试

运行测试有两种方式:

1. 通过[命令行](https://vitest.dev/guide/cli.html)
2. 通过[拓展](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

#### 1. 通过命令行

通过命令行运行所有 `*.test.ts` 文件中的测试:

```bash
pnpm test
```

具体命令行参数 Vitest 官方文档

#### 2. 通过拓展

通过 Vitest 拓展运行测试更方便, 支持 UI 交互的方式运行所有测试、某个测试套件或某个测试用例

安装后即可在测试文件中测试套件或测试用例的左侧看到运行按钮, 点击后会自动运行该测试套件或测试用例并显示运行结果, 如果有日志输出在底部 `Test Results` 面板中查看

在左侧 `TEST EXPLORER` 面板中可以查看所有测试套件和测试用例, 同样可以点击运行
