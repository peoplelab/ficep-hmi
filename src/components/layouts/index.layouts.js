import lazy from '../common/AsyncComponent';

const Anchor = lazy(() => import(/* webpackChunkName: "layouts" */ './Anchor'));
const Box = lazy(() => import(/* webpackChunkName: "layouts" */ './Box'));
const Button = lazy(() => import(/* webpackChunkName: "layouts" */ './Button'));
const ButtonData = lazy(() => import(/* webpackChunkName: "layouts" */ './ButtonData'));
const Card = lazy(() => import(/* webpackChunkName: "layouts" */ './Card.view'));
const Clock = lazy(() => import(/* webpackChunkName: "layouts" */ './Clock.view'));
const Gallery= lazy(() => import(/* webpackChunkName: "layouts" */ './Gallery.view'));

export {
  Anchor,
  Box,
  Button,
  ButtonData,
  Card,
  Clock,
  Gallery,
};
