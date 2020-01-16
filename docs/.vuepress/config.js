/*
 * @Author: yangmiaomiao
 * @Date: 2020-01-15 10:59:22
 * @LastEditors  : yangmiaomiao
 * @LastEditTime : 2020-01-16 11:05:06
 * @Description: 
 */
module.exports = {
  home:true,
  title: 'MavisY 笔记',
  description: 'Take notes',
  plugins: ['autobar'],//侧边栏插件
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }]  // 增加一个自定义的 favicon(网页标签的图标)
  ],
  dest: './docs/.vuepress/dist',
  base: '/vuepress/', // 这是部署到github相关的配置 下面会讲
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
    lastUpdated: '上次更新', // string | boolean
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'vuejs/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
    
  }
}