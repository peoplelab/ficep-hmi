//------------------------------------------------------------------------------------------------
// File: user.jsx
//
// Desc: Abilita/Disabilita un determinato insieme di elementi React specifici per il gruppo USER
// Path: /src/components/common/user
//------------------------------------------------------------------------------------------------


import { connect } from 'react-redux';
import Area from './Area';


const enable = state => state.groups.includes('USER');

const mapStateToProps = state => ({
  enable: enable(state),
});


export default connect(mapStateToProps)(Area);
