// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import SCSS
import './score.scss';

// == Component
const Score = ({ ranking, userScore, difficulty }) => {
  let rankingDifficulty = ranking.difficulty_1;

  if (difficulty === 1) {
    rankingDifficulty = ranking.difficulty_1;
  }
  if (difficulty === 2) {
    rankingDifficulty = ranking.difficulty_2;
  }
  if (difficulty === 3) {
    rankingDifficulty = ranking.difficulty_3;
  }
  if (difficulty === 4) {
    rankingDifficulty = ranking.difficulty_4;
  }

  return (
    <div className="score">
      <p className="score-overhall">Score : <span className="score-overhall__number">{userScore}</span></p>
      <div className="score-seperate" />
      {rankingDifficulty.map((rank) => (
        <p className="score-classification" key={rank.id}>
          <span className="score-classification__number">{rank.number} ) </span>
          {rank.pseudo} :
          <span className="score-classification__score"> {rank.score}</span>
        </p>
      ))}
    </div>
  );
};

// == PropTypas
Score.propTypes = {
  ranking: PropTypes.object.isRequired,
  userScore: PropTypes.number.isRequired,
  difficulty: PropTypes.number.isRequired,
};

// == Export
export default Score;
