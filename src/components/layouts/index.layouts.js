import lazy from '../common/AsyncComponent';

const components = {
  Anchor: lazy(() => import(/* webpackChunkName: "layouts" */ './Anchor')),
  Box: lazy(() => import(/* webpackChunkName: "layouts" */ './Box')),
  Button: lazy(() => import(/* webpackChunkName: "layouts" */ './Button')),
  ButtonData: lazy(() => import(/* webpackChunkName: "layouts" */ './ButtonData')),
  Card: lazy(() => import(/* webpackChunkName: "Card" */ './Card.view')),
  Clock: lazy(() => import(/* webpackChunkName: "layouts" */ './Clock.view')),
  Gallery: lazy(() => import(/* webpackChunkName: "Gallery" */ './Gallery.view')),
};

export default components;
