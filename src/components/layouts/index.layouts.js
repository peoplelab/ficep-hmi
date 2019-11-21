import lazy from '../common/AsyncComponent';

const Accordion  = lazy(() => import(/* webpackChunkName: "layouts" */ './Accordion.view'));
const Anchor     = lazy(() => import(/* webpackChunkName: "layouts" */ './Anchor'));
const Box        = lazy(() => import(/* webpackChunkName: "layouts" */ './Box'));
const Button     = lazy(() => import(/* webpackChunkName: "layouts" */ './Button'));
const ButtonData = lazy(() => import(/* webpackChunkName: "layouts" */ './ButtonData'));
const Card       = lazy(() => import(/* webpackChunkName: "layouts" */ './Card.view'));
const Clock      = lazy(() => import(/* webpackChunkName: "layouts" */ './Clock.view'));
const Gallery    = lazy(() => import(/* webpackChunkName: "layouts" */ './Gallery.view'));
const Link       = lazy(() => import(/* webpackChunkName: "layouts" */ './Link.view'));
const Modal      = lazy(() => import(/* webpackChunkName: "layouts" */ './Modal.view'));
const Table      = lazy(() => import(/* webpackChunkName: "layouts" */ './Table.view'));

export {
	Accordion,
	Anchor,
	Box,
	Button,
	ButtonData,
	Card,
	Clock,
	Gallery,
	Link,
	Modal,
	Table,
};
