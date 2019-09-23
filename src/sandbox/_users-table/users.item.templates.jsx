//----------------------------------------------------------------------------------------
// File: users.view.jsx
//
// Desc: Pagina per la gestione degli utenti
// Path: /src/sandbox/_users/users.view
//----------------------------------------------------------------------------------------

import React from 'react';
import { ButtonData } from '../../components/layouts/index.layouts';

import '../style/users-tab.style.scss';

/* eslint-disable react/display-name, react/prop-types */

export const templateUsers = (onClick, onRemove) => ({ value, index }) => {
    const {
      id,
      firstName,
      lastName,
      userName,
      isActive,
      creationDate,
    } = value;

    return (
      <tr className="table__row" key={`table-row-${index}`} >
        <td className="table__cell">
          <ButtonData className="users__button" data={id} onClick={onClick}>
            {id}
          </ButtonData>
        </td>
        <td className="table__cell">{firstName}</td>
        <td className="table__cell">{lastName}</td>
        <td className="table__cell">{userName}</td>
        <td className="table__cell">{isActive ? 'yes' : 'no'}</td>
        <td className="table__cell">{creationDate}</td>
        <td className="table__cell">
          <ButtonData className="users__button" onClick={onRemove} data={id}>
            Remove
          </ButtonData>
        </td>
      </tr>
    );
  };

export const templateDetailGroups = onClick => ({ value, index }) => {
    const {
      id,
      code,
      description,
    } = value;

    return (
      <tr className="table__row" key={`table-row-${index}`} >
        <td className="table__cell">{id}</td>
        <td className="table__cell">{code}</td>
        <td className="table__cell">{description}</td>
        <td className="table__cell">
          <ButtonData className="users__button" onClick={onClick} data={id}>
            Remove
          </ButtonData>
        </td>
      </tr>
    );
  };

export const templateGroups = onClick => ({ value, index }) => {
    const {
      id,
      code,
      description,
    } = value;

    return (
      <tr className="table__row" key={`table-row-${index}`} >
        <td className="table__cell">
          <ButtonData className="users__button" data={id} onClick={onClick}>
            {id}
          </ButtonData>
        </td>
        <td className="table__cell">{code}</td>
        <td className="table__cell">{description}</td>
      </tr>
    );
  };

export const templateDetail = ({ value, index }) => {
  const {
    id,
    firstName,
    lastName,
    userName,
    isActive,
    creationDate,
  } = value;

  return (
    <tr className="table__row" key={`table-row-${index}`} >
      <td className="table__cell">{id}</td>
      <td className="table__cell">{firstName}</td>
      <td className="table__cell">{lastName}</td>
      <td className="table__cell">{userName}</td>
      <td className="table__cell">{isActive ? 'yes' : 'no'}</td>
      <td className="table__cell">{creationDate}</td>
    </tr>
  );
};
