# zc-element

一个基于 Vue 3 + TypeScript 的组件库项目，定位为高仿 Element Plus 的学习与实践仓库。

## 技术栈

- Vue 3
- TypeScript
- Vite
- Vitest
- VitePress
- Storybook
- pnpm workspace

## 项目结构

```text
packages/
  components/   # 组件源码（Button / Alert / Collapse / Input / Switch / Icon）
  core/         # 组件库入口、安装器、打包配置
  theme/        # 样式主题
  docs/         # VitePress 文档站
  play/         # 本地调试 playground + Storybook
  hooks/        # 复用 hooks
  utils/        # 工具函数
```

## 本地开发

### 1) 安装依赖

```bash
pnpm install
```

### 2) 启动 playground

```bash
npm run dev
```

### 3) 启动 Storybook

```bash
npm run story
```

### 4) 启动文档站

```bash
npm run docs:dev
```

## 常用脚本

```bash
npm run dev         # 启动 play 调试页
npm run story       # 启动 Storybook
npm run docs:dev    # 启动 VitePress 文档
npm run docs:build  # 构建 VitePress 文档
npm run test        # 运行组件测试
npm run build       # 构建 npm 包（@tomatoztq/zc-element）
```

## 安装与使用（npm 包）

```bash
pnpm add @tomatoztq/zc-element
```

```ts
import { createApp } from 'vue'
import App from './App.vue'
import ZcElement from '@tomatoztq/zc-element'
import '@tomatoztq/zc-element/dist/index.css'

createApp(App).use(ZcElement).mount('#app')
```

## 当前组件进度

- Button
- Alert
- Collapse
- Input
- Switch
- Icon

## 说明

- 仓库使用 pnpm workspace 管理多包。
- 文档站基础路径为 `/zc-element/`（用于 GitHub Pages 场景）。
