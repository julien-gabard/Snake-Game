// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import SCSS
import './score.scss';

// == Component
const Score = ({ snakeDots, difficulty }) => {
  let adapScore;

  if (difficulty === 1) {
    adapScore = snakeDots.length - 2;
  }
  if (difficulty === 2) {
    adapScore = (snakeDots.length - 2) * 1.25;
  }
  if (difficulty === 3) {
    adapScore = (snakeDots.length - 2) * 1.5;
  }
  if (difficulty === 4) {
    adapScore = (snakeDots.length - 2) * 2;
  }

  return (
    <div className="score">
      <p className="score-overhall">Score : <span className="score-overhall__number">{adapScore}</span></p>
    </div>
  );
};

// == PropTypas
Score.propTypes = {
  snakeDots: PropTypes.array.isRequired,
  difficulty: PropTypes.number.isRequired,
};

// == Export
export default Score;
