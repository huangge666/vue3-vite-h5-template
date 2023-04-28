**🌱 基于 Vue3 全家桶、TypeScript、Vite 构建工具，开箱即用的移动端项目基础模板**

- [x] ⚡ Vue3 + Vite4
- [x] ✨ Vant4 组件库
- [x] Vue-router 4
- [x] 支持 SVG 图标自动注册组件
- [x] vw 视口适配
- [] Axios 封装
- [x] 首屏加载动画
- [x] 开发环境调试面板
- [x] ESLint

```shell
# 克隆项目
git clone https://github.com/huangge666/vue3-vite-h5-template.git
# 进入项目目录
cd vue3-vite-h5-template
# 安装依赖
yarn
# 启动服务
yarn dev
```

## 文档引导

> - [按需引入 vant 组件](#vant)
> - [SVG 图标使用](#svg)
> - [路由缓存 & 命名注意 ⚠](#router)
> - [调试面板 eruda](#console)
> - [vw 视口适配](#viewport)

### - <span id="vant">按需引入 vant 组件</span>

全量引入组件库太过臃肿，项目中使用 `unplugin-vue-components` 插件进行按需自动引入组件，可通过[官方文档](https://vant-ui.github.io/vant/#/zh-CN/quickstart#2.-pei-zhi-cha-jian)了解更多。

### - <span id="svg">SVG 图标使用</span>

> 1. 将 svg 图标文件放在 `src/icons/svg` 目录下
> 2. 在项目中直接使用 `<svg-icon name="svg图标文件命名" />` 即可
>    例如：

本项目 `src/icons/svg` 中放了个叫 `check-in.svg` 的图标文件，然后在组件 `name` 属性中填入文件的命名即可，So easy~

```Vue
<svg-icon name="check-in" />
```

> 项目中使用了 `unplugin-vue-components` 自动引入组件，所以 `main.ts` 中无需注册全局图标组件。

### - <span id="router">路由缓存 & 命名注意 ⚠</span>

组件默认开启缓存，如某个组件需关闭缓存，在对应路由 `meta` 内的 `noCache` 字段赋值为 `true` 即可。

```typescript
// src/router/routes.ts
const routes: Array<RouteRecordRaw> = [
  // ...
  {
    path: 'about',
    name: 'About',
    component: () => import('@/views/about/index.vue'),
    meta: {
      title: '关于',
      noCache: true
    }
  }
]
```

为了保证页面能被正确缓存，请确保**组件**的 `name` 值和对应路由的 `name` 命名完全相同。

```vue
<!-- src/views/about/index.vue -->
<script setup lang="ts" name="About">
// 使用了 `vite-plugin-vue-setup-extend` 插件，可在 `setup` 语法糖标签上添加 `name` 属性为组件命名
</script>
<template>
  <div>about</div>
</template>
```

### - <span id="viewport">vw 视口适配</span>

使用 `cnjm-postcss-px-to-viewport` 进行视口适配，相关配置见项目根目录下 `postcss.config.js`。

```js
// postcss.config.js
module.exports = {
  plugins: {
    // 使用 cnjm-postcss-px-to-viewport 规避 postcss.plugin was deprecated 警告
    'cnjm-postcss-px-to-viewport': {
      viewportWidth: 375, // 根据设计稿设定
      minPixelValue: 1, // 最小的转换数值
      unitPrecision: 2 // 转化精度，转换后保留位数
    },
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    }
  }
}
```
