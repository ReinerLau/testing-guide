import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue 测试指南",
  description: "针对 Vue 项目的中文测试指南",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "基础概念", link: "/testing-basics/tdd" },
    ],

    sidebar: [
      {
        text: "基础概念",
        items: [
          {
            text: "TDD",
            link: "/testing-basics/tdd",
          },
          {
            text: "单元测试",
            link: "/testing-basics/unit-testing",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  base: "/testing-guide/",
});
