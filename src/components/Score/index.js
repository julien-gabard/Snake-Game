// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import SCSS
import './score.scss';

// == Component
const Score = ({ snakeDots }) => (
  <div className="score">
    <p className="score-overhall">Score : <span className="score-overhall__number">{snakeDots.length - 2}</span></p>
  </div>
);

// == PropTypas
Score.propTypes = {
  snakeDots: PropTypes.array.isRequired,
};

// == Export
export default Score;
