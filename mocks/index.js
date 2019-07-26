require('./global');

const routes = require('./routes');


module.exports = (app) => {
  routes.map((route) => {
    const { url, api } = route;
    const handler = api;

    const appRoute = app.route(url);

    if ('GET' in handler) {
      appRoute.get(handler.GET);
    }

    if ('POST' in handler) {
      appRoute.post(handler.POST);
    }

    if ('PUT' in handler) {
      appRoute.put(handler.PUT);
    }

    if ('PATCH' in handler) {
      appRoute.patch(handler.PATCH);
    }

    if ('DELETE' in handler) {
      appRoute.delete(handler.DELETE);
    }
  });
};
