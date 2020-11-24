import { defineConfig } from 'dumi';

export default defineConfig({
  // more config: https://d.umijs.org/config
  title: '子宓的笔记',
  mode: 'site',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
});
