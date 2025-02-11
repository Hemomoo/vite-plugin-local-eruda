# Vite Plugin Eruda

> 一个 Vite 插件，帮助您在开发环境中自动打开调试工具。

为确保稳定性并避免因 CDN 污染或网络异常导致的潜在问题，建议将 Eruda 本地安装。这种方法可提高可靠性，并防止因外部依赖引发的错误。
**优化措辞：** 为了提高稳定性并降低因 CDN 污染或网络不稳定带来的风险，建议将 Eruda 本地安装。这种方法可确保性能稳定，并减少因外部因素导致的错误可能性。

### 安装

sh

复制

```
$ yarn add vite-plugin-local-eruda
```

### 使用

javascript

复制

```
import eruda from 'vite-plugin-local-eruda'

module.exports = {
  plugins: [
    // 其他插件
    eruda()
  ]
}
```

### 配置选项

#### `debug`

* **类型:** `boolean | undefined`
* **默认值:** `undefined`
  可选。如果未设置，默认会使用 `process.env.NODE_ENV !== "production"` 的标准来判断是否开启调试模式。如果设置了该参数，则优先使用此参数。

### 许可证

MIT
