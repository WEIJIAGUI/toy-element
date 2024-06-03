/*
 * @Author: weijiagui 18322393187@163.com
 * @Date: 2024-06-03 22:00:58
 * @LastEditors: weijiagui 18322393187@163.com
 * @LastEditTime: 2024-06-03 22:01:11
 * @FilePath: \element\postcss.config.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-env node */
module.exports = {
  plugins: [
    require("postcss-nested"),
    require("postcss-each-variables"),
    require("postcss-each")({
      plugins: {
        beforeEach: [require("postcss-for"), require("postcss-color-mix")],
      },
    }),
  ],
};
