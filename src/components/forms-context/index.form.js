import lazy from '../common/AsyncComponent';

const Form = lazy(() => import(/* webpackChunkName: "forms-context" */ './Form'));
const Field = lazy(() => import(/* webpackChunkName: "forms-context" */ './Field'));

const ButtonForm = lazy(() => import(/* webpackChunkName: "forms-context" */ './ButtonForm'));
const Option = lazy(() => import(/* webpackChunkName: "forms-context" */ './Option'));
const PasswordInput = lazy(() => import(/* webpackChunkName: "forms-context" */ './PasswordInput'));
const RadioButton = lazy(() => import(/* webpackChunkName: "forms-context" */ './RadioButton'));
const Reset = lazy(() => import(/* webpackChunkName: "forms-context" */ './Reset'));
const Select = lazy(() => import(/* webpackChunkName: "forms-context" */ './Select'));
const Submit = lazy(() => import(/* webpackChunkName: "forms-context" */ './Submit'));
const TextInput = lazy(() => import(/* webpackChunkName: "forms-context" */ './TextInput'));

const GetStore = lazy(() => import(/* webpackChunkName: "forms-context" */ './GetStore'));
const ResetStore = lazy(() => import(/* webpackChunkName: "forms-context" */ './ResetStore'));
const SetStore = lazy(() => import(/* webpackChunkName: "forms-context" */ './SetStore'));
const Validation = lazy(() => import(/* webpackChunkName: "forms-context" */ './Validation'));

export {
  Form,
  Field,

  ButtonForm,
  Option,
  PasswordInput,
  RadioButton,
  Reset,
  Select,
  Submit,
  TextInput,

  GetStore,
  ResetStore,
  SetStore,
  Validation,
};
