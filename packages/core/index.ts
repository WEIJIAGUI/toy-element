/*
 * @Author: weijiagui 18322393187@163.com
 * @Date: 2024-06-03 22:26:47
 * @LastEditors: weijiagui 18322393187@163.com
 * @LastEditTime: 2024-06-03 22:27:46
 * @FilePath: \element\packages\core\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { makeInstaller } from "@toy-element/utils";
import components from "./components";
import "@toy-element/theme/index.css";

const installer = makeInstaller(components);

export * from "@toy-element/components";
export default installer;
