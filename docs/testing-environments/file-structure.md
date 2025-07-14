# 文件结构

测试文件有多种放置方式可供选择

## 与源文件同级(推荐)

```
src/
├── components/
│   ├── Button.vue
│   ├── Button.test.ts
│   ├── Modal.vue
│   └── Modal.test.ts
├── utils/
│   ├── sum.ts
│   ├── sum.test.ts
│   ├── format.ts
│   └── format.test.ts
```

- 维护性: 测试和源码在同一目录下, 修改是不容易有遗漏
- 导入路径: 导入路径简单

## 独立的 tests 目录

```
src/
├── components/
│   └── Button.vue
tests/
├── unit/
│   └── Button.test.ts
├── integration/
│   └── api.test.ts
└── e2e/
    └── user-flow.test.ts
```

- 按测试类型分类

## \_\_tests\_\_ 目录

```
src/
├── components/
│   ├── Button.vue
│   └── __tests__/
│       └── Button.test.ts
```

- Jest 风格
