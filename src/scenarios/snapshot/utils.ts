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

export function renderButton(props) {
  return `
      <button 
        class="btn btn-primary ${props.size}" 
        disabled="${props.disabled}"
        data-testid="submit-button"
      >
        <span class="icon">${props.icon}</span>
        <span class="text">${props.text}</span>
      </button>
    `;
}
