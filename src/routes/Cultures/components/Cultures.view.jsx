import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../../components/layouts/Box/Box.index';
import Button from '../../../components/forms/Button';
import ButtonData from '../../../components/forms/ButtonData';
import TextInput from '../../../components/forms/TextInput';
import Field from '../../../components/forms/Field';

import './Cultures.style.scss';


const header = (
  <tr key="cultures-header">
    <th>id</th>
    <th>code</th>
    <th>description</th>
  </tr>
);


class CulturesRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.state = {
      id: '',
      code: '',
      description: '',
    };

    this.onIdChange = this.onIdChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onGetCultures = this.onGetCultures.bind(this);
    this.onAddCulture = this.onAddCulture.bind(this);
    this.onRemoveCulture = this.onRemoveCulture.bind(this);
    this.onUpdateCulture = this.onUpdateCulture.bind(this);

    this.mapList = this.mapList.bind(this);
  }

  onIdChange(event) {
    const { value } = event.target;

    if (/^\d*$/.test(value)) {

      this.setState({ id: parseInt(value) });
    }
  }

  onChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  onGetCultures() {
    this.props.getCultures();
  }

  onAddCulture() {
    const data = {
      code: this.state.code,
      description: this.state.description,
    };

    this.props.addCulture(data);

    this.setState({
      code: '',
      description: '',
    });
  }

  onRemoveCulture(event) {
    const { data } = event;

    this.props.removeCulture(data);
  }

  onUpdateCulture() {
    const data = {
      id: this.state.id,
      code: this.state.code,
      description: this.state.description,
    };

    this.props.updateCulture(data);

    this.setState({
      id: '',
      code: '',
      description: '',
    });
  }

  mapList(data) {
    const { id, code, description } = data;

    return (
      <tr key={`tool-${id}`}>
        <td>
          {id}
        </td>
        <td>
          {code}
        </td>
        <td>
          {description}
        </td>
        <td>
          <ButtonData className="cultures__button" onClick={this.onRemoveCulture} data={id}>
            X
          </ButtonData>
        </td>
      </tr>
    );
  }

	render() {
    const { list } = this.props;
    const {
      id, code, description
    } = this.state;

    const strID = isNaN(id) ? '' : id.toString();

    const Table = list.map(this.mapList);

    return (
      <section className="cultures">
        <h1 className="cultures__title">
          Cultures
        </h1>
        <Box className="cultures__container">
        <Box className="cultures__group">
          <Button className="cultures__button" onClick={this.onGetCultures}>
            Get cultures list
          </Button>
        </Box>
        {(list.length > 0 && Table.length > 0) && (
          <>
            <br/>
            <br/>
            <br/>
            <Box className="cultures__group">
              <h2 className="cultures__sub-title">
                List
              </h2>
              <table className="cultures__table">
                <thead>
                  {header}
                </thead>
                <tbody>
                  {Table}
                </tbody>
              </table>
            </Box>
          </>
        )}
        {list.length > 0 && (
          <Box className="cultures__group">
            <form className="cultures__form">
              <Field label="Culture id (only to update)" className="cultures__field">
                <TextInput
                  className="cultures__text-input"
                  name="id"
                  value={strID}
                  onChange={this.onIdChange}
                />
              </Field>
              <Field label="Code" className="cultures__field">
                <TextInput
                  className="cultures__text-input"
                  name="code"
                  value={code}
                  onChange={this.onChange}
                />
              </Field>
              <Field label="Description" className="cultures__field">
                <TextInput
                  className="cultures__text-input"
                  name="description"
                  value={description}
                  onChange={this.onChange}
                />
              </Field>
              <Box className="cultures__field">
                <Button
                  className="cultures__button"
                  onClick={!strID ? this.onAddCulture : this.onUpdateCulture}
                  disabled={!code || !description}
                >
                  {!strID ? 'Add' : 'Update'}
                </Button>
              </Box>
            </form>
          </Box>
        )}
        </Box>
      </section>
    );
	}
}


const cultureShape = {
  id: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


CulturesRoute.propTypes = {
  getCultures: PropTypes.func.isRequired,
  addCulture: PropTypes.func.isRequired,
  removeCulture: PropTypes.func.isRequired,
  updateCulture: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape(cultureShape)),
};

CulturesRoute.defaultProps = {
  list: [],
};


export default CulturesRoute;
