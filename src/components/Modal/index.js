// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import SCSS
import './modal.scss';

// == Component
const Modal = ({ snakeDots }) => (
  <div className="modal">
    <p className="modal-over">Game Over</p>
    <p className="modal-score">Score : {snakeDots.length}</p>
  </div>
);

// == PropTypes
Modal.propTypes = {
  snakeDots: PropTypes.array.isRequired,
};

// == Export
export default Modal;
