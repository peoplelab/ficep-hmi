import lazy from '../common/AsyncComponent';

const ButtonForm = lazy(() => import(/* webpackChunkName: "forms-context" */ './ButtonForm'));
const Field = lazy(() => import(/* webpackChunkName: "forms-context" */ './Field'));
const Form = lazy(() => import(/* webpackChunkName: "forms-context" */ './Form'));
const GetStore = lazy(() => import(/* webpackChunkName: "forms-context" */ './GetStore'));
const Option = lazy(() => import(/* webpackChunkName: "forms-context" */ './Option'));
const PasswordInput = lazy(() => import(/* webpackChunkName: "forms-context" */ './PasswordInput'));
const RadioButton = lazy(() => import(/* webpackChunkName: "forms-context" */ './RadioButton'));
const Reset = lazy(() => import(/* webpackChunkName: "forms-context" */ './Reset'));
const Select = lazy(() => import(/* webpackChunkName: "forms-context" */ './Select'));
const SetStore = lazy(() => import(/* webpackChunkName: "forms-context" */ './SetStore'));
const Submit = lazy(() => import(/* webpackChunkName: "forms-context" */ './Submit'));
const TextInput = lazy(() => import(/* webpackChunkName: "forms-context" */ './TextInput'));

export {
  ButtonForm,
  Field,
  Form,
  GetStore,
  Option,
  PasswordInput,
  RadioButton,
  Reset,
  Select,
  SetStore,
  Submit,
  TextInput,
};
