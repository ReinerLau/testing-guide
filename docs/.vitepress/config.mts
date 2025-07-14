import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue testing guide",
  description: "A testing guide for Vue projects",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "首页", link: "/" }],

    sidebar: [],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  base: "/testing-guide/",
});
