/*
 * @Author: weijiagui 18322393187@163.com
 * @Date: 2024-06-04 21:19:58
 * @LastEditors: weijiagui 18322393187@163.com
 * @LastEditTime: 2024-06-05 21:07:57
 * @FilePath: \element\packages\components\Button\Button.test.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Button from "./Button.vue";

describe("Button.vue", () => {
  // Props: type
  it("should has the correct type class when type prop is set", () => {
    const types = ["primary", "success", "warning", "danger", "info"];
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type: type as any },
      });
      
      expect(wrapper.classes()).toContain(`er-button--${type}`);
    });
  });

  // // Props: size
  // it("should has the correct size class when size prop is set", () => {
  //   const sizes = ["large", "default", "small"];
  //   sizes.forEach((size) => {
  //     const wrapper = mount(Button, {
  //       props: { size: size as any },
  //     });
  //     expect(wrapper.classes()).toContain(`er-button--${size}`);
  //   });
  // });

  // // Props: plain, round, circle
  // it.each([
  //   ["plain", "is-plain"],
  //   ["round", "is-round"],
  //   ["circle", "is-circle"],
  //   ["disabled", "is-disabled"],
  //   ["loading", "is-loading"],
  // ])(
  //   "should has the correct class when prop %s is set to true",
  //   (prop, className) => {
  //     const wrapper = mount(Button, {
  //       props: { [prop]: true },
  //       global: {
  //         stubs: ["ErIcon"],
  //       },
  //     });
  //     expect(wrapper.classes()).toContain(className);
  //   }
  // );

  // it("should has the correct native type attribute when native-type prop is set", () => {
  //   const wrapper = mount(Button, {
  //     props: { nativeType: "submit" },
  //   });
  //   expect(wrapper.element.tagName).toBe("BUTTON");
  //   expect((wrapper.element as any).type).toBe("submit");
  // });

  // // Props: tag
  // it("should renders the custom tag when tag prop is set", () => {
  //   const wrapper = mount(Button, {
  //     props: { tag: "a" },
  //   });
  //   expect(wrapper.element.tagName.toLowerCase()).toBe("a");
  // });

  // // Events: click
  // it("should emits a click event when the button is clicked", async () => {
  //   const wrapper = mount(Button, {});
  //   await wrapper.trigger("click");
  //   expect(wrapper.emitted().click).toHaveLength(1);
  // });
});
