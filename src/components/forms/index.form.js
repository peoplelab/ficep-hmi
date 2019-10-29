import lazy from '../common/AsyncComponent';

const ButtonForm = lazy(() => import(/* webpackChunkName: "forms" */ './ButtonForm'));
const Field = lazy(() => import(/* webpackChunkName: "forms" */ './Field'));
const Form = lazy(() => import(/* webpackChunkName: "forms" */ './Form'));
const Option = lazy(() => import(/* webpackChunkName: "forms" */ './Option'));
const PasswordInput = lazy(() => import(/* webpackChunkName: "forms" */ './PasswordInput'));
const RadioButton = lazy(() => import(/* webpackChunkName: "forms" */ './RadioButton'));
const Reset = lazy(() => import(/* webpackChunkName: "forms" */ './Reset'));
const Select = lazy(() => import(/* webpackChunkName: "forms" */ './Select'));
const Submit = lazy(() => import(/* webpackChunkName: "forms" */ './Submit'));
const TextInput = lazy(() => import(/* webpackChunkName: "forms" */ './TextInput'));

export {
  ButtonForm,
  Field,
  Form,
  Option,
  PasswordInput,
  RadioButton,
  Reset,
  Select,
  Submit,
  TextInput,
};
