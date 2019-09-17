const proxy = require('express-http-proxy');

// proxy handler (logging requests)
const proxyOpts = ({ URL, LOG_LEVEL, route }) => {
  let proxyReqPathResolver = (req) => route + req.url;
  let proxyReqBodyDecorator;
  let userResDecorator;

  if (LOG_LEVEL === 'debug') {

    const request = {};
    let bodyRequest = {};

    proxyReqBodyDecorator = (bodyContent, srcReq) => {
      request.time = new Date();
      request.method = srcReq.method;
      request.url = URL;
      request.path = route + srcReq.path;
      bodyRequest = bodyContent.toString('utf8');
      return bodyContent;
    };

    userResDecorator = (proxyRes, proxyResData, userReq, userRes) => {
      const response = { time: new Date() };
      const bodyResponse = proxyResData.toString('utf8');

      console.group('\x1b[33m', 'API', '\t', URL + request.path, '\x1b[0m');
      console.table({ request });
      console.log('\x1b[36m', '\t', 'Request Body', '\n', bodyRequest, '\x1b[0m', '\n');
      console.table({ response });
      console.log('\x1b[36m', '\t', 'Response Body', '\n', bodyResponse, '\x1b[0m', '\n');
      console.groupEnd();

      return proxyResData;
    };
  }

  return {
    proxyReqPathResolver,
    proxyReqBodyDecorator,
    userResDecorator,
  };
};

// const proxyOpts = ({ URL, LOG_LEVEL, route }) => (LOG_LEVEL === 'debug' ? {
//   proxyReqPathResolver: (req) => {
//     const apiUrl = route + req.url;
//     console.log('\x1b[36m--> PROXYING REQUEST: ' + req.method + ' ' + apiUrl + ' to ' + URL + apiUrl + '\x1b[0m');

//     return apiUrl;
//   },
//   proxyReqBodyDecorator: (bodyContent, srcReq) => {
//     console.log(srcReq);
//     console.log(bodyContent.toString('utf8'));
//     return bodyContent;
//   },
//   userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
//     console.group(userReq.originalUrl);
//     console.table
//     console.log('\x1b[36m--> RESPONSE of' + userReq.originalUrl + ':\x1b[0m');
//     console.log(proxyResData.toString('utf8'));

//     return proxyResData;
//   },
// }: {
//   proxyReqPathResolver: (req) => route + req.url,
// });


// start proxy handler
const proxyMiddleware = ({ route, URL, LOG_LEVEL }) => proxy(URL, proxyOpts({ URL, LOG_LEVEL, route }));


module.exports = {
  proxyMiddleware
};
