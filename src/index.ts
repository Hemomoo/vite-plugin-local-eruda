// src/index.ts
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from "fs";

const src_default = ({
  debug
} = {
  debug: undefined
}) => {
  return {
    name: "vite-plugin-local-eruda",
    transformIndexHtml(html:string) {
      // 获取当前文件的目录路径和文件名
      // 使用 __filename 和 __dirname 变量获取当前文件的目录路径和文件名
      // 使用 import.meta.url 获取当前模块的 URL，然后使用 fileURLToPath 将其转换为文件路径
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);
      const erudaPath = path.resolve(__dirname, "../../../node_modules/eruda/eruda.js"); // 指向 eruda 的文件路径
      const erudaScript = fs.readFileSync(erudaPath, "utf-8");

      const tags = [
        {
          tag: "script",
          children: erudaScript, // 将 eruda 的代码注入到页面中
          injectTo: "head"
        },
        {
          tag: "script",
          children: "eruda.init();", // 初始化 eruda
          injectTo: "head"
        }
      ];

      if (debug === true) {
        return {
          html,
          tags
        };
      } else if (debug === false) {
        return html;
      }
      if (process.env.NODE_ENV !== "production") {
        return {
          html,
          tags
        };
      } else {
        return html;
      }
    }
  };
};

export default src_default;