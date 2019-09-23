//----------------------------------------------------------------------------------------
// File: footer.view.jsx
//
// Desc: Pagina per la gestione degli utenti
// Path: /src/sandbox/_users-table/footer.view
//----------------------------------------------------------------------------------------

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select, Submit, Option } from '../../components/forms-context/index.form';


const required = ['group'];


class Footer extends PureComponent {
	constructor(props) {
    super(props);

    this.setGroups = this.setGroups.bind(this);
  }

  setGroups() {
    const { groups } = this.props;

    return groups.map(value => ({
      value: value.id,
      message: value.description,
    }));
  }

	render() {
    const { onSubmit } = this.props;

    const options = this.setGroups();

    return (
      <tr className="table__row table__row--footer">
        <td className="table__cell table__cell--footer" colSpan="1">
          <Select name="group">
            <Option options={options} />
          </Select>
        </td>
        <td className="table__cell table__cell--footer" colSpan="5">
          <Submit name="form-details" required={required} onSubmit={onSubmit}>
            Add
          </Submit>
        </td>
      </tr>
    );
	}
}


Footer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Footer.defaultProps = {
};


export default Footer;
