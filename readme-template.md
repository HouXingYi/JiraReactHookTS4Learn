

# 项目说明

用仿jira项目提取一个模板用于C端业务开发
用仿大众点评项目提取一个模板


# 模板形成记录
1. create-react-app 创建项目
  https://create-react-app.dev/docs/getting-started 文档

2. npm run eject 弹出配置（最好不要eject）
  官方不推荐eject出来，新的create-react-app已经支持babel，sass等
  https://reactjs.org/blog/2018/10/01/create-react-app-v2.html

  官方推荐自定义修改react-scripts，而不是eject出来，这样可以复用
  https://create-react-app.dev/docs/alternatives-to-ejecting

  eject的坏处，依赖会多很多

3. 代理配置
  package.json中配置proxy
  或者
  用http-proxy-middleware
  // https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually

  src/setupProxy.js文件
  ```
  const { createProxyMiddleware } = require('http-proxy-middleware');

  module.exports = function(app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://www.goodideatest.com/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      })
    );
  };
  ```

4. 



## jira项目欠缺的功能点

* 参考C端移动端做一版

* 移动端CSS
  参考一个其他的慕课网项目，移动端的

* 是使用react create app 还是 用umi（不要用阿里开源项目）

* 请求代理
  思路：eject出来，然后配置webpack proxy
  https://github.com/facebook/create-react-app

* 路由需要改成配置式的

* 登录保持和登录鉴权处理，和登录状态持久化处理

* css采用sass方案

* 全局状态需要用redux方案比较好
  还是用dvajs（不要用阿里开源项目）

* 组件用class组件为主流
  参考一个其他的慕课网项目，用class组件写的

