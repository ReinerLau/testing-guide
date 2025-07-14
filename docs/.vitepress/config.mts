import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue testing guide",
  description: "A testing guide for Vue projects",
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
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  base: "/testing-guide/",
});
