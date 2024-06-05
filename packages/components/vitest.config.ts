/*
 * @Author: weijiagui 18322393187@163.com
 * @Date: 2024-06-04 21:13:45
 * @LastEditors: weijiagui 18322393187@163.com
 * @LastEditTime: 2024-06-04 21:13:58
 * @FilePath: \element\packages\components\vitest.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// vitest.config.ts
/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});

// "test": "vitest --coverage"
