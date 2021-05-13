

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

4. 后续
  1) 加入 redux（完成，使用Redux Toolkit）
  
  2) 加入 router
  
  3) 加入 ts
  4) 配置绝对路径，定制化react-scripts
  https://blog.csdn.net/weixin_41254345/article/details/105384818
  5) 加入 dart-sass
  


5. 加入redux
  有两种方式
  一种是原始的createStore => dispatch => actions指定type => reducer根据type处理 => 生成新的state，使用react-redux来消费state
    使用：定义container，使用connect注入state和dispatch
    结构：要有container的文件夹专门做 HOC connect 用
  一种是用Redux Toolkit，最新的，推荐用这个
    Redux Toolkit，封装了action和reducer，并用immer做了不可变处理，再加上redux-thunk
    
6. 加入router
  




## 模板需要的功能点

* 参考C端移动端做一版

* 加入TS
  参考jira如何加入ts的

* 移动端CSS，rem方案
  参考一个其他的慕课网项目，移动端的

* 是使用react create app 还是 用umi（不要用阿里开源项目）

* 请求代理
  思路：eject出来，然后配置webpack proxy
  https://github.com/facebook/create-react-app
  加入setupProxy.js

* 路由需要改成配置式的
  不需要配置式，再考虑下

* 登录保持和登录鉴权处理，和登录状态持久化处理
  参考大众点评项目

* css采用sass方案
  dart-sass

* 全局状态需要用redux方案比较好
  还是用dvajs（不要用阿里开源项目）

* 组件用class组件为主流
  参考大众点评项目，用class组件写的

