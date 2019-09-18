//------------------------------------------------------------------------------------------------
// File: Card.jsx
//
// Desc: Campo di input specifico per la gestione di dati predefiniti aventi uno specifico layout
// Path: /src/components/forms-custom/Card
//------------------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Box from '../layouts/Box';

import * as admin from '../../../public/icons/ic-user-admin.svg';
import * as technical from '../../../public/icons/ic-user-technical.svg';
import * as operator from '../../../public/icons/ic-user-operator.svg';

import '../../styles/layouts/Card.style.scss';


const toIcon = {
  ADMIN: admin,
  SUPERUSER: technical,
  USER: operator,
};


const getTime = (time) => {
  const [year, month, day, hours, minutes] = time.split(/-|:|T/g);

  return `${hours}:${minutes} ${day}/${month}/${year}`;
};


const Card = (props) => {
  const {
    children,
    issuedAt,
    username,
    role,
    // culture,
    className,
    intl,
  } = props;

  const mergedClass = `card ${className}`;

  const lastAccess = issuedAt && getTime(issuedAt);

  const roleText = intl[role];
  const lastAccessText = intl.lastaccess;

  return (
    username
    // && culture
    && role
  ) && (
    <Box className={mergedClass}>
      <Box className="card__box">
        <Box className="card__picture">
          <img className="card__picture-icon" src={toIcon[role]} alt={role} />
        </Box>
      </Box>
      <Box className="card__box">
        <p className="card__paragraph card__paragraph--user">
          {username}
        </p>
        <p className="card__paragraph card__paragraph--role">
          {roleText}
        </p>
      </Box>
      {children && (
        <Box className="card__box">
          {children}
        </Box>
      )}
      {lastAccess && (
        <Box className="card__box">
          <p className="card__paragraph card__paragraph--text">
            {lastAccessText}
          </p>
          <p className="card__paragraph card__paragraph--last-access">
            {lastAccess}
          </p>
        </Box>
      )}
    </Box>
  );
};


Card.propTypes = {
  children: PropTypes.element,
  issuedAt: PropTypes.string,
  username: PropTypes.string,
  role: PropTypes.string,
  culture: PropTypes.string,
  className: PropTypes.string,
  intl: PropTypes.objectOf(PropTypes.string),
};

Card.defaultProps = {
  children: null,
  issuedAt: '',
  username: '',
  role: '',
  culture: '',
  className: '',
  intl: {}
};


export default memo(Card);
