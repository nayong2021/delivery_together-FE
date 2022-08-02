const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://api.deliverytogether.com",
      pathRewrite: {
        "^/api": "",
      },
      changeOrigin: true,
    })
  );
};
