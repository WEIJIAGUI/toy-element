/*
 * @Author: weijiagui 18322393187@163.com
 * @Date: 2024-06-03 22:02:40
 * @LastEditors: weijiagui 18322393187@163.com
 * @LastEditTime: 2024-06-03 22:21:38
 * @FilePath: \element\packages\utils\insyall.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { App, Plugin } from "vue";
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[]) {
  const installer = (app: App) => each(components, (c) => app.use(c));
  return installer as Plugin;
}

export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name;
    app.component(name, component as Plugin);
  };
  return component as SFCWithInstall<T>;
};
