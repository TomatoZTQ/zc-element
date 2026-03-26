import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'zc-element',
  description: '高仿 Element Plus 的 Vue3 组件库',
  base: '/zc-element/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/get-started' },
      { text: '组件', link: '/components/button' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/get-started' }
        ]
      },
      {
        text: '基础组件',
        items: [
          { text: 'Button 按钮', link: '/components/button' }
        ]
      },
      {
        text: '表单组件',
        items: [
          { text: 'Input 输入框', link: '/components/input' },
          { text: 'Switch 开关', link: '/components/switch' }
        ]
      },
      {
        text: '反馈组件',
        items: [
          { text: 'Alert 提示', link: '/components/alert' }
        ]
      },
      {
        text: '数据展示',
        items: [
          { text: 'Collapse 折叠面板', link: '/components/collapse' }
        ]
      }
    ]
  }
})
