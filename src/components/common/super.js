//------------------------------------------------------------------------------------------------
// File: super.jsx
//
// Desc: Abilita/Disabilita un determinato insieme di elementi React specifici per il gruppo SUPER
// Path: /src/components/common/super
//------------------------------------------------------------------------------------------------


import { connect } from 'react-redux';
import Area from './Area';


const enable = state => state.groups.includes('SUPER');

const mapStateToProps = state => ({
  enable: enable(state),
});


export default connect(mapStateToProps)(Area);