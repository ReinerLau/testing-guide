import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JavaScript 测试指南",
  description: "JavaScript 测试指南",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "基础概念", link: "/testing-basics/tdd" },
      { text: "场景示例", link: "/scenarios/snapshot-testing" },
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
      "/scenarios/": [
        {
          text: "应用场景",
          items: [
            {
              text: "快照测试",
              link: "/scenarios/snapshot-testing",
            },
            {
              text: "断言异常",
              link: "/scenarios/assert-exceptions",
            },
            {
              text: "隔离副作用",
              link: "/scenarios/isolate-side-effects",
            },
            {
              text: "Mock 副作用",
              link: "/scenarios/mock-side-effects",
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
            {
              text: "仿真数据",
              link: "/best-practices/mock-data",
            },
            {
              text: "基于属性测试",
              link: "/best-practices/property-based-testing",
            },
            {
              text: "内联快照测试",
              link: "/best-practices/inline-snapshot-testing",
            },
            {
              text: "隔离测试",
              link: "/best-practices/isolated-testing",
            },
            {
              text: "UI 分离",
              link: "/best-practices/ui-separation",
            },
            {
              text: "测试属性",
              link: "/best-practices/testing-attributes",
            },
            {
              text: "文件结构",
              link: "/best-practices/file-structure",
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
