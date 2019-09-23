//----------------------------------------------------------------------------------------
// File: footer.view.jsx
//
// Desc: Pagina per la gestione degli utenti
// Path: /src/sandbox/_users-table/footer.view
//----------------------------------------------------------------------------------------

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput, PasswordInput, Select, Submit, Option } from '../../components/forms-context/index.form';


const required = ['username', 'password', 'group'];


class Footer extends PureComponent {
	constructor(props) {
    super(props);

    this.onTest = this.onTest.bind(this);
    this.setGroups = this.setGroups.bind(this);
  }

  onTest(event) {
    const { value } = event.target;

    return /^([A-Za-z]* )*[A-Za-z]+$/.test(value);
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
          <TextInput name="username" placeholder="Username" onTest={this.onTest} />
        </td>
        <td className="table__cell table__cell--footer" colSpan="1">
          <PasswordInput name="password" placeholder="Password" />
        </td>
        <td className="table__cell table__cell--footer" colSpan="1">
          <Select name="group">
            <Option options={options} />
          </Select>
        </td>
        <td className="table__cell table__cell--footer" colSpan="4">
          <Submit name="form-users" required={required} onSubmit={onSubmit}>
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
