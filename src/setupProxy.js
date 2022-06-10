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
    // QnA
    app.use(
        createProxyMiddleware(
            ['/http://34.64.45.39:8000/Qna/'],
            {
                target: 'http://34.64.45.39:8000/Qna/',
                changeOrigin: true,
                pathRewrite: {
                    '^/http://34.64.45.39:8000/Qna/': ''
                },
            }
        )
    );
    // Notice
    app.use(
        createProxyMiddleware(
            ['/http://34.64.45.39:8000/Notice/'],
            {
                target: 'http://34.64.45.39:8000/Notice/',
                changeOrigin: true,
                pathRewrite: {
                    '^/http://34.64.45.39:8000/Notice/': ''
                },
            }
        )
    );
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