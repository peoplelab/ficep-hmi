import session from './session.watchers';
import wizardnavigation from './wizardnavigation.watchers';


const sagasList = [
  ...session,
  ...wizardnavigation,
];


export default sagasList;
