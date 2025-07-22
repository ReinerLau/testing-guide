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
      { text: "测试环境", link: "/testing-environments/setup-env" },
      { text: "应用场景", link: "/scenarios/function-return-value" },
      { text: "最佳实践", link: "/best-practices/golden-rule" },
    ],

    sidebar: {
      "/testing-basics/": [
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
            {
              text: "集成测试",
              link: "/testing-basics/integration-testing",
            },
            {
              text: "组件测试",
              link: "/testing-basics/component-testing",
            },
          ],
        },
      ],
      "/testing-environments/": [
        {
          text: "测试环境",
          items: [
            {
              text: "搭建环境",
              link: "/testing-environments/setup-env",
            },
            {
              text: "文件结构",
              link: "/testing-environments/file-structure",
            },
          ],
        },
      ],
      "/vitest/": [
        {
          text: "Vitest",
          items: [
            {
              text: "Test API",
              link: "/vitest/test-api",
            },
            {
              text: "Bench API",
              link: "/vitest/bench-api",
            },
          ],
        },
      ],
      "/scenarios/": [
        {
          text: "应用场景",
          items: [
            {
              text: "快照测试",
              link: "/scenarios/snapshot-testing",
            },
          ],
        },
      ],
      "/best-practices/": [
        {
          text: "最佳实践",
          items: [
            {
              text: "黄金法则",
              link: "/best-practices/golden-rule",
            },
            {
              text: "测试用例命名",
              link: "/best-practices/test-case-naming",
            },
            {
              text: "AAA 模式",
              link: "/best-practices/aaa-pattern",
            },
            {
              text: "BDD 断言",
              link: "/best-practices/bdd-assertions",
            },
            {
              text: "黑盒测试",
              link: "/best-practices/black-box-testing",
            },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ReinerLau/testing-guide",
      },
    ],
  },
  base: "/testing-guide/",
});
