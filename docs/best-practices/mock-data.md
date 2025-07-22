# 仿真数据

## 建议

尽量使用接近生产环境的数据进行测试(可以使用 [Faker](https://fakerjs.dev/) 生成仿真数据)

```ts
import { faker } from "@faker-js/faker";

function validateName(name: string) {
  // 名字不能为带空白符
  if (/\s/.test(name)) {
    return false;
  } else {
    return true;
  }
}

describe("验证名字", () => {
  it("如果名字不带空白符, 则通过", () => {
    const result = validateName(faker.person.firstName());
    expect(result).toBe(true);
  });

  it("如果名字带空白符, 则不通过", () => {
    const result = validateName(faker.person.fullName());
    expect(result).toBe(false);
  });
});
```

## 否则

使用过于简单的数据, 也许开发环境下测试能够通过, 但无法保证生产环境下正常 

```ts
describe("验证名字", () => {
  it("如果名字不带空白符, 则通过", () => {
    const result = validateName('foo');
    expect(result).toBe(true);
  });

  it("如果名字带空白符, 则不通过", () => {
    const result = validateName('foo bar');
    expect(result).toBe(false);
  });
});
``` 

## 示例

`src/best-practices/mock-data.test.ts`