# PPT Genius

PPT Genius 是一个基于 Next.js 的 Web 应用程序，旨在帮助用户创建和管理精美的演示文稿。

## 功能特点

- 现代化的用户界面
- 响应式设计
- 丰富的组件库

## 技术栈

- Next.js 15.1.0
- React 18.0.0
- Tailwind CSS
- TypeScript

## 本地开发

### 前提条件

- Node.js 18.0.0 或更高版本
- npm 或 pnpm 包管理器

### 安装依赖

使用 npm：

```bash
npm install
```

或者使用 pnpm：

```bash
pnpm install
```

如果遇到依赖冲突问题，可以尝试以下方法：

```bash
# 使用 --legacy-peer-deps 参数
npm install --legacy-peer-deps

# 或者使用 --force 参数
npm install --force
```

### 启动开发服务器

```bash
npm run dev
```

或者使用 pnpm：

```bash
pnpm dev
```

启动后，打开浏览器访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 构建生产版本

```bash
npm run build
npm start
```

或者使用 pnpm：

```bash
pnpm build
pnpm start
```

## 部署到 GitHub Pages

本项目已配置为可以部署到 GitHub Pages。按照以下步骤操作：

1. 在 GitHub 上创建一个新的仓库
2. 将代码推送到该仓库的 main 分支
3. 在仓库设置中启用 GitHub Pages，选择 "GitHub Actions" 作为构建和部署的来源
4. GitHub Actions 将自动构建并部署您的网站

如果您的仓库名不是 `用户名.github.io`，而是一个项目仓库（如 `ppt-genius`），请取消 `next.config.mjs` 文件中 `basePath` 和 `assetPrefix` 的注释，并将其设置为您的仓库名。

## 项目结构

- `app/` - Next.js 应用页面和布局
- `components/` - 可复用的 UI 组件
- `public/` - 静态资源
- `styles/` - 全局样式
- `lib/` - 工具函数和库
- `hooks/` - 自定义 React Hooks 