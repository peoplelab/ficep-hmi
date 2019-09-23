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
      <tr>
        <td colSpan="2">
          <TextInput name="username" placeholder="Username" onTest={this.onTest} />
        </td>
        <td colSpan="2">
          <PasswordInput name="password" placeholder="Password" />
        </td>
        <td colSpan="2">
          <Select name="group">
            <Option options={options} />
          </Select>
        </td>
        <td>
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
