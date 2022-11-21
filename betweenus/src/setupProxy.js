const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://api.deliverytogether.com",
      pathRewrite: {
        "^/api": "",
      },
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/nid", {
      target: "https://nid.naver.com",
      // pathRewrite: {
      //   "^/nid": "",
      // },
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/kauth", {
      target: "https://kauth.kakao.com",
      // pathRewrite: {
      //   "^/kauth": "",
      // },
      changeOrigin: true,
    })
  );
};
