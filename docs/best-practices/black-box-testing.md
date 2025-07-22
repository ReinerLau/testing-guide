# 黑盒测试

## 建议

只测试和需求有直接关系的单元, 不测试内部实现, 比如: 

```ts
class User {
  getLastName() {
    return 'Lau';
  }

  getName(firstName: string) {
    return `${firstName} ${this.getLastName()}`;
  }
}
```

`getLastName` 是内部实现, 不会被类外部直接调用, 测试 `getName` 时, `getLastName` 会被隐式地测试到, 只要保证 `getName` 输出了正确的结果即可

```ts
describe("用户 - User", () => {
  describe("获取姓名", () => {
    it("如果名字是 'Reiner', 则全名是 'Reiner Lau'", () => {
      expect(new User().getName("Reiner")).toBe("Reiner Lau");
    });
  });
});
```

## 否则

测试内部实现, 属于白盒测试, 容易因为内部实现出现变动而需要修改之前的测试逻辑, 导致测试用例很脆弱, 比如:

```ts 
class User {
  getLastName() {
    return 'Lau';
  }

  getName(firstName: string) {
    return `${firstName} ${this.getLastName()}`;
  }
}
```

测试上面这个类:

```ts
describe("用户 - User", () => {
  describe("获取姓名", () => {
    it("获取姓氏", () => {
      expect(new User().getLastName()).toBe("Lau");
    });

    it("如果名字是 'Reiner', 则全名是 'Reiner Lau'", () => {
      expect(new User().getName("Reiner")).toBe("Reiner Lau");
    });
  });
});
```

假设现在需要重构这个类:

```ts
class User {
  getFullName(firstName: string) {
    return `${firstName} Lau`;
  }

  getName(firstName: string) {
    return this.getFullName(firstName);
  }
}
```

此时 `获取姓氏` 的测试用例会失效, 也失去了意义, 因为没有影响 `getName` 最终期望的结果

## 示例

`src/best-practices/black-box-testing.test.ts`