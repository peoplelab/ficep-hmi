const proxy = require('express-http-proxy');

// proxy handler (logging requests)
const proxyOpts = ({ URL, LOG_LEVEL, route }) => (LOG_LEVEL === 'debug' ? {
  proxyReqPathResolver: (req) => {
    const apiUrl = route + req.url;
    console.log('\x1b[36m--> PROXYING REQUEST: ' + req.method + ' ' + apiUrl + ' to ' + URL + apiUrl + '\x1b[0m');

    return apiUrl;
  },
  proxyReqBodyDecorator: (bodyContent, srcReq) => {
    console.log(bodyContent.toString('utf8'));
    return bodyContent;
  },
  userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
    console.log('\x1b[36m--> RESPONSE of' + userReq.originalUrl + ':\x1b[0m');
    console.log(proxyResData.toString('utf8'));

    return proxyResData;
  },
}: {
  proxyReqPathResolver: (req) => route + req.url,
});


// start proxy handler
const proxyMiddleware = ({ route, URL, LOG_LEVEL }) => proxy(URL, proxyOpts({ URL, LOG_LEVEL, route }));


module.exports = {
  proxyMiddleware
};
