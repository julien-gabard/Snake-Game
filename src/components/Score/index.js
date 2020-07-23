// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import SCSS
import './score.scss';

// == Component
const Score = ({ classScores, userScore }) => (
  <div className="score">
    <p className="score-overhall">Score : <span className="score-overhall__number">{userScore}</span></p>
    <div className="score-seperate" />
    {classScores.map((classScore) => (
      <p className="score-classification" key={classScore.id}>
        <span className="score-classification__number">{classScore.number} ) </span>
        {classScore.pseudo} :
        <span className="score-classification__score"> {classScore.score}</span>
      </p>
    ))}
  </div>
);

// == PropTypas
Score.propTypes = {
  classScores: PropTypes.array.isRequired,
  userScore: PropTypes.number.isRequired,
};

// == Export
export default Score;
