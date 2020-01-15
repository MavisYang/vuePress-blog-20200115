/*
 * @Author: yangmiaomiao
 * @Date: 2020-01-15 10:59:22
 * @LastEditors  : yangmiaomiao
 * @LastEditTime : 2020-01-15 16:28:06
 * @Description: 
 */
module.exports = {
  title: 'MavisY 笔记',
  description: 'Take notes',
  plugins: ['autobar'],
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }]  // 增加一个自定义的 favicon(网页标签的图标)
  ],
  dest: './docs/.vuepress/dist',
  base: '/vuePress-blog-20200115/', // 这是部署到github相关的配置 下面会讲
  ga: '',
  evergreen: true,
  themeConfig: { 
    nav: [ //导航栏配置
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },// 内部链接 以docs为根目录
      { text: '博客', link: 'https://mavisyang.github.io/' }, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/MavisYang/vuePress-blog-20200115' },
        ]
      },
      
    ],
    
  }
}