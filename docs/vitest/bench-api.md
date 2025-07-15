# Bench API

## 运行测试

`package.json` 中添加 `"bench": "vitest bench"` 命令

```sh
pnpm bench
```

## 文件名

文件名包含 `.bench.` 或 `.benchmarks.` 

## 测试代码性能

API: `bench`

场景: 测试代码性能

## 测试代码性能

API: `bench`

场景: 测试代码性能

示例: `src/bench/base.bench.ts`

## 跳过测试

API: `bench.skip`

场景: 跳过测试

示例: `src/bench/skip.bench.ts`

## 只运行指定测试

API: `bench.only`

场景: 只运行指定测试

示例: `src/bench/only.bench.ts`

## 待实现测试

API: `bench.todo`

场景: 待实现测试

示例: `src/bench/todo.bench.ts`