const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/opentrip',
    createProxyMiddleware({
      target: 'https://api.opentripmap.io',
      changeOrigin: true,
      secure: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/api/opentrip': '', // Удаляем /api/opentrip из пути
      },
      onProxyReq: (proxyReq, req, res) => {
        // Убираем host header чтобы избежать проблем
        proxyReq.removeHeader('origin');
        proxyReq.removeHeader('referer');
        console.log('Proxying:', req.method, req.url);
        console.log('Target:', proxyReq.path);
      },
      onProxyRes: (proxyRes, req, res) => {
        console.log('Proxy response status:', proxyRes.statusCode);
        // Убеждаемся что CORS headers есть
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      },
      onError: (err, req, res) => {
        console.error('Proxy error:', err.message);
        res.status(500).json({ error: 'Proxy error', message: err.message });
      },
    })
  );
};
