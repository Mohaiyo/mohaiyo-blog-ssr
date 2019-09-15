# mohaiyo-blog

**mohaiyo-blog**博客。

## 项目介绍

**mohaiyo-server**开发基于vuetify-ssr-template模板，由于模板比较旧，已经对webpack2等依赖升级到了webpack4。是博客前端的后台实现。是对原来博客的升级，使用vue-ssr优化博客的seo.

目前其他页面正在开发中...

## 主要技术栈

- vue全家桶
- pwa
- vuetify
- sass
- vue-ssr
- express

## 安装教程

1. npm install or yarn install

## 项目结构

```js
.
├── assets // assets  入口文件等
├── build // webpack配置文件
├── components // 公共组件
│    ├── base // 基础组件
│    ├── core // 核心组件
│    └── home // 首页组件
├── data // 数据
├── mixins // mixins
├── plugins // 插件
├── public // 打包文件
├── router // 路由文件
├── store // vuex相关
├── deploy.sh // 部署脚本
├── Dockerfile // dockerfile
├── release.sh // 一键部署脚本
├── ecosystem.config.js // pm2
├── server.js // node.js 中间服务 ssr服务启动文件v
.
```

## 使用说明

- 开发环境

```bash
npm run dev
```

- 打包

```bash
npm run build
```

- 生产环境

```bash
npm run start
```

- deploy

```bash
sh release.sh
```
