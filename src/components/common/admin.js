//------------------------------------------------------------------------------------------------
// File: admin.jsx
//
// Desc: Abilita/Disabilita un determinato insieme di elementi React specifici per il gruppo ADMIN
// Path: /src/components/common/admin
//------------------------------------------------------------------------------------------------


import { connect } from 'react-redux';
import Area from './Area';


const enable = state => state.groups.includes('ADMIN');

const mapStateToProps = state => ({
  enable: enable(state),
});


export default connect(mapStateToProps)(Area);
