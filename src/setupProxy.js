const { createProxyMiddleware } = require('http-proxy-middleware')
 
module.exports = (app) => {
    app.use(
        createProxyMiddleware(
            ['/http://34.64.45.39:8000/Comment/'],
            {
                target: 'http://34.64.45.39:8000/Comment/',
                changeOrigin: true,
                pathRewrite: {
                    '^/http://34.64.45.39:8000/Comment/': ''
                },
            }            
        )
    );
};