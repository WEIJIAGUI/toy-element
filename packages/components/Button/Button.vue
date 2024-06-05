<!--
 * @Author: weijiagui 18322393187@163.com
 * @Date: 2024-06-03 22:17:47
 * @LastEditors: weijiagui 18322393187@163.com
 * @LastEditTime: 2024-06-05 21:17:39
 * @FilePath: \element\packages\components\Button\Button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- <button style="background-color: aqua; color: blueviolet">
    this is button
  </button> -->
  <component
    :is="props.tag"
    ref="_ref"
    class="er-button"
    :type="props.tag === 'button' ? props.nativeType : void 0"
    :disabled="disabled || loading"
    :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    ><slot></slot
  ></component>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from "./types";
defineOptions({
  name: "weiButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
});
const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();
</script>

<style></style>
