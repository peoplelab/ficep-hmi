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
import Field from '../../components/forms-context/Field';
import Form from '../../components/forms-context/Form';
import GetStore from '../../components/forms-context/GetStore';
import Submit from '../../components/forms-context/Submit';
import TextInput from '../../components/forms-context/TextInput';
import {
  callCulturesGet,
  callCulturesPost,
  callCulturesDelete,
  callCulturesPut,
} from '../../controllers/routes/cultures/cultures.controller';

import '../style/cultures.style.scss';


const initial = {
  id: '',
  code: '',
  description: '',
};
const required = ['code', 'description'];


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
      data: [],
      error: null,
      failure: null,
      hasID: false,
    };

    this.updateState = this.updateState.bind(this);
    this.onIdChange = this.onIdChange.bind(this);
    this.onGetCultures = this.onGetCultures.bind(this);
    this.onAddCulture = this.onAddCulture.bind(this);
    this.onRemoveCulture = this.onRemoveCulture.bind(this);
    this.onUpdateCulture = this.onUpdateCulture.bind(this);

    this.mapList = this.mapList.bind(this);
    this.getFormID = this.getFormID.bind(this);
  }

  // chimata per aggiornare lo stato corrente della pagina
  updateState(newState) {
    this.setState(newState);
  }

  // metodo per la gestione dell'evento onchange del campo ID di input
  onIdChange(event) {
    const { value } = event.target;

    return /^\d*$/.test(value);
  }

  // chimata per ottenere la lista corrente delle culture (GET)
  onGetCultures() {
    callCulturesGet({
      dispatch: this.updateState,
    });
  }

  // chimata per aggiungere una nuova culture (POST)
  onAddCulture(formState) {
    const { code, description } = formState;

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
  onUpdateCulture(formState, event) {
    const { id, code, description } = formState;

    callCulturesPut({
      data: { id, code, description },
      dispatch: this.updateState,
      state: this.state,
    });
  }

  getFormID(formState) {
    const { id } = formState;
    console.log('id', id);

    if (this.state.hasID !== !!id) {
      this.setState({ hasID: !!id });
    }
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
    const { data: list, hasID } = this.state;

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
              <Form className="cultures__form" initial={initial}>
                <GetStore getter={this.getFormID} />
                <Field label="Culture id (only to update)" className="cultures__field">
                  <TextInput className="cultures__text-input" name="id" onTest={this.onIdChange} />
                </Field>
                <Field label="Code" className="cultures__field">
                  <TextInput className="cultures__text-input" name="code" />
                </Field>
                <Field label="Description" className="cultures__field">
                  <TextInput className="cultures__text-input" name="description" />
                </Field>
                <Box className="cultures__field">
                  <Submit
                    className="cultures__button"
                    name="form-culture"
                    onSubmit={!hasID ? this.onAddCulture : this.onUpdateCulture}
                    required={required}
                  >
                    {!hasID ? 'Add' : 'Update'}
                  </Submit>
                </Box>
              </Form>
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
