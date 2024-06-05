import type { Component } from "vue";

/*
 * @Author: weijiagui 18322393187@163.com
 * @Date: 2024-06-04 21:29:53
 * @LastEditors: weijiagui 18322393187@163.com
 * @LastEditTime: 2024-06-04 21:34:57
 * @FilePath: \element\packages\components\Button\types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type NativeType = "button" | "submit" | "reset";
export type ButtonSize = "large" | "default" | "small";

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  size?: ButtonSize;
  nativeType?: NativeType;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  circle?: boolean;
  block?: boolean;
  plain?: boolean;
  round?: boolean;
}
