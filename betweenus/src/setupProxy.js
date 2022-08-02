const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://54.180.130.233",
      pathRewrite: {
        "^/api": "",
      },
      changeOrigin: true,
    })
  );
};
