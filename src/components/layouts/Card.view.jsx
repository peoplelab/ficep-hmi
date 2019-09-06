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

import * as admin from '../../../public/icons/users/icon-admin.svg';
import * as technical from '../../../public/icons/users/icon-technical-male.svg';
import * as operator from '../../../public/icons/users/icon-operator-male.svg';

import '../../styles/layouts/Card.style.scss';


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
    className,
  } = props;

  const mergedClass = `card ${className}`;

  const [role] = groups;
  const lastAccess = moment(issuedAt, 'YYYY-MM-DDThh:mm:ss.SSSSSSS+z').format('hh:mm DD/MM/YYYY');

  return (
    lastAccess
    && username
    && culture
    && role
  ) && (
    <Box className={mergedClass}>
      <Box className="card__box">
        <Box className="card__picture">
          <img className="card__picture-icon" src={toIcon[role]} alt={roleConverter[role]} />
        </Box>
      </Box>
      <Box className="card__box">
        <p className="card__paragraph card__paragraph--bold">
          {username}
        </p>
        <p className="card__paragraph card__paragraph--semibold">
          {roleConverter[role]}
        </p>
      </Box>
      {lastAccess && (
        <Box className="card__box">
          <p className="card__paragraph card__paragraph--light">
            Last access:
          </p>
          <p className="card__paragraph card__paragraph--normal">
            {lastAccess}
          </p>
        </Box>
      )}
    </Box>
  );
};


Card.propTypes = {
  issuedAt: PropTypes.string,
  username: PropTypes.string,
  groups: PropTypes.arrayOf(PropTypes.string),
  culture: PropTypes.string,
  className: PropTypes.string,
};

Card.defaultProps = {
  issuedAt: '',
  username: '',
  groups: [],
  culture: '',
  className: '',
};


export default memo(Card);
