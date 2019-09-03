//------------------------------------------------------------------------------------------------
// File: Card.jsx
//
// Desc: Campo di input specifico per la gestione di dati predefiniti aventi uno specifico layout
// Path: /src/components/forms-custom/Card
//------------------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Box from '../layouts/Box';
import ButtonData from '../layouts/ButtonData';

import * as admin from '../../../public/icons/users/icon-admin.svg';
import * as technical from '../../../public/icons/users/icon-technical-male.svg';
import * as operator from '../../../public/icons/users/icon-operator-male.svg';

import '../../styles/forms/Card.style.scss';


const toIcon = {
  ADMIN: admin,
  SUPER: technical,
  USER: operator,
};

const roleConverter = {
  ADMIN: 'Administrator',
  SUPER: 'Technician',
  USER: 'Operator',
};


const Card = (props) => {
  const {
    issuedAt,
    username,
    groups,
    culture,
    name,
    className,
    target,
    disabled,
    onClick,
  } = props;

  const mergedClass = `login-card ${className}`;

  const data = target.reduce((acc, key) => ({ ...acc, [key]: props[key] }), {
    [name]: {
      issuedAt,
      groups,
      username,
      culture,
    }
  });

  const [role] = groups;
  const lastAccess = moment(issuedAt, 'YYYY-MM-DDThh:mm:ss.SSSSSSS+z').format('hh:mm DD/MM/YYYY');

  return (
    lastAccess
    && username
    && culture
    && role
    && name
  ) && (
    <Box className={mergedClass}>
      <ButtonData className="login-card__button" disabled={disabled} data={data} onClick={onClick}>
        <Box className="login-card__box">
          <Box className="login-card__picture">
            <img className="login-card__picture-icon" src={toIcon[role]} alt={roleConverter[role]} />
          </Box>
        </Box>
        <Box className="login-card__box">
          <p className="login-card__paragraph login-card__paragraph--bold">
            {username}
          </p>
          <p className="login-card__paragraph login-card__paragraph--semibold">
            {roleConverter[role]}
          </p>
        </Box>
        <Box className="login-card__box">
          <p className="login-card__paragraph login-card__paragraph--light">
            Last access:
          </p>
          <p className="login-card__paragraph login-card__paragraph--normal">
            {lastAccess}
          </p>
        </Box>
      </ButtonData>
    </Box>
  );
};


Card.propTypes = {
  issuedAt: PropTypes.string,
  username: PropTypes.string,
  groups: PropTypes.arrayOf(PropTypes.string),
  culture: PropTypes.string,
  name: PropTypes.string,
  target: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  issuedAt: '',
  username: '',
  groups: [],
  culture: '',
  name: '',
  target: [],
  className: '',
  disabled: false,
  onClick: () => {},
};


export default memo(Card);
