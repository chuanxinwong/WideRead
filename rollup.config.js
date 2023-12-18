// import resolve from '@rollup/plugin-node-resolve'; // 处理第三方模块的解析
// import commonjs from '@rollup/plugin-commonjs'; // 将CommonJS模块转换为 ES6 模块
// import { terser } from 'rollup-plugin-terser'; // 压缩代码
import css from "rollup-plugin-import-css";
import { string } from 'rollup-plugin-string';

console.log(string)


const banner = `
// ==UserScript==
// @name         阅读加宽
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include *
// @run-at       document-start
// @grant        none
// ==/UserScript==
`


export default {
  input: 'src/main.js', // 项目的入口文件
  output: {
    file: 'dist/bundle.js', // 输出文件的路径和名称
    format: 'iife', // 输出格式，这里选择立即执行函数
    sourcemap: true, // 生成 source map 文件，方便调试
    banner: banner,
  },
  plugins: [
    string({
      include: ['**/*.css'], // 匹配所有CSS文件
    }),
    // resolve(), // 解析第三方模块
    // commonjs(), // 转换 CommonJS 模块
    // terser() // 压缩代码
  ]
};