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

import * as admin from '../../../public/icons/ic-user-admin.svg';
import * as technical from '../../../public/icons/ic-user-technical.svg';
import * as operator from '../../../public/icons/ic-user-operator.svg';

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
    children,
    issuedAt,
    username,
    groups,
    // culture,
    className,
  } = props;

  const mergedClass = `card ${className}`;

  const [role] = groups;
  const lastAccess = issuedAt && moment(issuedAt, 'YYYY-MM-DDThh:mm:ss.SSSSSSS+z').format('hh:mm DD/MM/YYYY');

  return (
    username
    // && culture
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
      {children && (
        <Box className="card__box">
          {children}
        </Box>
      )}
      {lastAccess && (
        <Box className="card__box">
          <p className="card__paragraph card__paragraph--light">
            Last access:
          </p>
          <p className="card__paragraph">
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
  groups: PropTypes.arrayOf(PropTypes.string),
  culture: PropTypes.string,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  issuedAt: '',
  username: '',
  groups: [],
  culture: '',
  className: '',
};


export default memo(Card);