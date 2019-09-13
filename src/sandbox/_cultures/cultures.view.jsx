//----------------------------------------------------------------------------------------
// File: cultures.view.jsx
//
// Desc: Pagina per la gestione delle culture
// Path: /src/components/routes/cultures/cultures.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root'; // Gestore dell'hot-reloading della route

import Box from '../../components/layouts/Box';
import Button from '../../components/layouts/Button';
import ButtonData from '../../components/layouts/ButtonData';
import Field from '../../components/forms/Field';
import {
  callCulturesGet,
  callCulturesPost,
  callCulturesDelete,
  callCulturesPut,
} from '../../controllers/routes/cultures/cultures.controller';

import '../style/cultures.style.scss';


// intestazioni delle colonne della tabella delle culture
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

    // inizializzazione dello stato della pagina
    this.state = {
      id: '',
      code: '',
      description: '',
      data: [],
      error: null,
      failure: null,
    };

    this.updateState = this.updateState.bind(this);
    this.onIdChange = this.onIdChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onGetCultures = this.onGetCultures.bind(this);
    this.onAddCulture = this.onAddCulture.bind(this);
    this.onRemoveCulture = this.onRemoveCulture.bind(this);
    this.onUpdateCulture = this.onUpdateCulture.bind(this);

    this.mapList = this.mapList.bind(this);
  }

  // chimata per aggiornare lo stato corrente della pagina
  updateState(newState) {
    this.setState(newState);
  }

  // metodo per la gestione dell'evento onchange del campo ID di input
  onIdChange(event) {
    const { value } = event.target;

    if (/^\d*$/.test(value)) {

      this.setState({ id: parseInt(value) });
    }
  }

  // metodo per la gestione dell'evento onchange di un generico campo di input
  onChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  // chimata per ottenere la lista corrente delle culture (GET)
  onGetCultures() {
    callCulturesGet({
      dispatch: this.updateState,
    });
  }

  // chimata per aggiungere una nuova culture (POST)
  onAddCulture() {
    const { code, description } = this.state;

    callCulturesPost({
      data: { code, description },
      dispatch: this.updateState,
      state: this.state,
    });
  }

  // chimata per rimuovere una culture (DELETE)
  onRemoveCulture(event) {
    const { data } = event;

    callCulturesDelete({
      data,
      dispatch: this.updateState,
      state: this.state,
    });
  }

  // chimata per aggiornare una culture (PUT)
  onUpdateCulture(event) {
    const { id, code, description } = this.state;

    callCulturesPut({
      data: { id, code, description },
      dispatch: this.updateState,
      state: this.state,
    });
  }

  // render della lista delle culture
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

  // renderizzazione della pagina
	render() {
    const {
      id, code, description, data: list
    } = this.state;

    // verifica che l'ID, se di tipo number, sia un valore valido
    const strID = isNaN(id) ? '' : id.toString();

    // creazione della tabella delle culture
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
                  <input
                    className="input input__text cultures__text-input"
                    name="id"
                    id="id"
                    type="text"
                    value={strID}
                    onChange={this.onIdChange}
                  />
                </Field>
                <Field label="Code" className="cultures__field">
                  <input
                    className="input input__text cultures__text-input"
                    name="code"
                    id="code"
                    type="text"
                    value={code}
                    onChange={this.onChange}
                  />
                </Field>
                <Field label="Description" className="cultures__field">
                  <input
                    className="input input__text cultures__text-input"
                    name="description"
                    id="description"
                    type="text"
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


CulturesRoute.propTypes = {
};

CulturesRoute.defaultProps = {
};


export default hot(CulturesRoute);
