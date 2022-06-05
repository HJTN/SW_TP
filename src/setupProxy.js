const { createProxyMiddleware } = require('http-proxy-middleware')
 
module.exports = (app) => {
    // Chat
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
    // Join
    // app.use(
    //     createProxyMiddleware(
    //         ['/http://34.64.45.39:8000/User_info/'],
    //         {
    //             target: 'http://34.64.45.39:8000/User_info/',
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/http://34.64.45.39:8000/User_info/': ''
    //             },
    //         }
    //     )
    // );
    // temp
    // app.use(
    //     createProxyMiddleware(
    //         [''],
    //         {
    //             target: '',
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/': ''
    //             },
    //         }
    //     )
    // );
};