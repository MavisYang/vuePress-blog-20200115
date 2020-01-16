### 首页


**20200115**

### vuePress博客搭建

- [VuePress 手摸手教你搭建一个类Vue文档风格的技术文档/博客](https://segmentfault.com/a/1190000016333850)
- [GitHub Pages 建立个人网站详细教程](https://zhuanlan.zhihu.com/p/58229299)
- [使用 github pages, 快速部署你的静态网页](https://zhuanlan.zhihu.com/p/38480155)

### 项目目录 
```
|-- docs // 特定的目录
    |-- README.md // 首页
    |-- .vuepress // 特定的目录
        |-- config.js // 特定的配置文件
|-- package.json // 脚本命令
```
### 启动
```
npm run docs:dev

```
### build

```
npm run docs:build
```

#### VuePress 自动生成侧边栏和导航栏

##### 安装
```
npm install -D boboidream/vuepress-bar
```
```
复制代码// 配置中添加插件
// .vuepress/config.js
// or
// .vuepress/theme/index.js

module.exports = {
  plugins: ['autobar']
}
```
##### 效果

- 本地文件夹

![本地文件夹](https://user-gold-cdn.xitu.io/2019/9/4/16cfba0e14f37936?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

- 自动生成目录

![自动生成目录](自动生成目录)
::: tip 替换tip的标题
这里是内容。
:::

### 将项目部署在GitHub Pages