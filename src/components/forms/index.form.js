import lazy from '../common/AsyncComponent';

const components = {
  ButtonForm: lazy(() => import(/* webpackChunkName: "forms" */ './ButtonForm')),
  Field: lazy(() => import(/* webpackChunkName: "forms" */ './Field')),
  Form: lazy(() => import(/* webpackChunkName: "forms" */ './Form')),
  Option: lazy(() => import(/* webpackChunkName: "forms" */ './Option')),
  PasswordInput: lazy(() => import(/* webpackChunkName: "forms" */ './PasswordInput')),
  RadioButton: lazy(() => import(/* webpackChunkName: "forms" */ './RadioButton')),
  Select: lazy(() => import(/* webpackChunkName: "forms" */ './Select')),
  Submit: lazy(() => import(/* webpackChunkName: "forms" */ './Submit')),
  TextInput: lazy(() => import(/* webpackChunkName: "forms" */ './TextInput')),
};

export default components;
