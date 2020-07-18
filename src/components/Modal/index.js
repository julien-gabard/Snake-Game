// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Component
const Modal = ({ snakeDots }) => (
  <div>
    {alert(`Game Over, Score : ${snakeDots.length}`)}
  </div>
);

// == PropTypes
Modal.propTypes = {
  snakeDots: PropTypes.array.isRequired,
};

// == Export
export default Modal;
