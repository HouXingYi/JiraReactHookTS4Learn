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