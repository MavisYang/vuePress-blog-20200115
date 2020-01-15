/*
 * @Author: yangmiaomiao
 * @Date: 2020-01-15 10:59:22
 * @LastEditors  : yangmiaomiao
 * @LastEditTime : 2020-01-15 11:25:46
 * @Description: 
 */
module.exports = {
  title: 'Hello VuePress',
  description: 'Take notes',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }]  // 增加一个自定义的 favicon(网页标签的图标)
  ],
  dest: './docs/.vuepress/dist',
  // base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
  ga: '',
  evergreen: true,
}