# 快照测试

## 定义

首次运行测试, 将测试结果保存为快照文件, 后续运行测试时, 将测试结果与快照文件进行对比, 如果测试结果与快照文件不一致, 则测试失败

## 相比断言测试

假设有一个 API 函数会返回复杂的数据结构, 如下所示:

```ts
function getOrderDetails(orderId: string) {
  return {
    orderId,
    status: "shipped",
    items: [
      { id: 1, name: "商品A", price: 99.99, quantity: 2 },
      { id: 2, name: "商品B", price: 149.99, quantity: 1 }
    ],
    shipping: {
      address: "北京市朝阳区...",
      method: "快递",
      trackingNumber: "SF1234567890"
    },
    payment: {
      method: "支付宝",
      amount: 349.97,
      currency: "CNY"
    }
  };
}
```

如果使用断言测试, 需要大量代码, 如下所示:

```ts
test("getOrderDetails - 传统断言", () => {
  const result = getOrderDetails("ORDER123");
  
  expect(result.orderId).toBe("ORDER123");
  expect(result.status).toBe("shipped");
  expect(result.items).toHaveLength(2);
  expect(result.items[0].name).toBe("商品A");
  expect(result.items[0].price).toBe(99.99);
  // ... 需要验证所有字段
});
```

但使用快照测试, 只需要一行代码, 如下所示:

```ts
test("getOrderDetails - 快照测试", () => {
  const result = getOrderDetails("ORDER123");
  expect(result).toMatchSnapshot();
});
```

如果 API 返回的数据结构发生预期之内的变化, 只需要更新当前版本的快照文件即可

## 应用场景

- 测试函数返回的复杂对象
- 测试UI组件的渲染结果

具体代码示例参考 `src/scenarios/snapshot/snapshot.test.ts`

按 `u` 或者运行 `vitest -u` 手动更新快照文件
