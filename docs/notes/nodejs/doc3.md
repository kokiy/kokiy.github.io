## yarn 命令

| 作用           | `npm`                | `yarn`                |
| -------------- | -------------------- | --------------------- |
| 安装           | `npm i`              | `yarn`                |
| 卸载           | `npm un`             | `yarn remove`         |
| 全局安装       | `npm i xxx -g`       | `yarn add xxx -g`     |
| 安装包         | `npm i xxx -S`       | `yarn add xxx`        |
| 开发模式安装包 | `npm i xxx -D`       | `yarn add xxx -D`     |
| 更新           | `npm update -save`   | `yarn upgrade`        |
| 全局更新       | `npm update -global` | `yarn global upgrade` |
| 清除缓存       | `npm cache clean`    | `yarn cache clean`    |

需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择

```bash
yarn upgrade-interactive --latest
```
