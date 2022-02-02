# 这是一个 eslint+ts+vue+standed+prettier 的配置模版

## Get stated

1. 安装依赖

- 旧版

  ```shell
  pnpm install --save-dev \
    typescript@\* \
    eslint@^7.12.1 \
    eslint-plugin-promise@^5.0.0 \
    eslint-plugin-import@^2.22.1 \
    eslint-plugin-node@^11.1.0 \
    @typescript-eslint/eslint-plugin@^4.0.1 \
    eslint-config-standard-with-typescript@latest \
    eslint-plugin-vue \
    eslint-config-prettier \
  ```

- 安装最新

  全部安装新版本未来可能会出现问题

  ```shell
  pnpm install --save-dev \
    typescript@\* \
    eslint \
    eslint-plugin-promise \
    eslint-plugin-import \
    eslint-plugin-node \
    @typescript-eslint/eslint-plugin \
    eslint-config-standard-with-typescript \
    eslint-plugin-vue \
    eslint-config-prettier \
  ```

2. 配置

新建一个`.eslintrc.js`,在其中输入内容

```js
module.exports = {
  extends: [
    "standard-with-typescript",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
}
```

新建`.prettierrc`，在其中输入

```json
{
  "semi": false
}
```
