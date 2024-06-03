/*
 * @Author: weijiagui 18322393187@163.com
 * @Date: 2024-06-03 21:28:17
 * @LastEditors: weijiagui 18322393187@163.com
 * @LastEditTime: 2024-06-03 22:29:40
 * @FilePath: \element\packages\play\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ToyElement from 'toy-element'

createApp(App).use(ToyElement).mount("#app");
