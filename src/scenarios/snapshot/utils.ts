export function getUserProfile(id: number) {
  return {
    id,
    name: "张三",
    email: "zhangsan@example.com",
    profile: {
      age: 25,
      city: "北京",
      hobbies: ["阅读", "游泳", "编程"],
      settings: {
        theme: "dark",
        notifications: true,
        language: "zh-CN",
      },
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
  };
}
