//------------------------------------------------------------------------------------------------
// File: super.jsx
//
// Desc: Abilita/Disabilita un determinato insieme di elementi React specifici per il gruppo SUPERUSER
// Path: /src/components/common/super
//------------------------------------------------------------------------------------------------


import { connect } from 'react-redux';
import Area from './Area';
import { pathOr } from '../../utils/path';


const enable = state => pathOr([], ['session', 'groups'], state).includes('SUPERUSER');

const mapStateToProps = state => ({
  enable: enable(state),
});


export default connect(mapStateToProps)(Area);
