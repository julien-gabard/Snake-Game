// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import logo
import { Play, PlusCircle, MinusCircle } from 'react-feather';

// == Import SCSS
import './menu.scss';

// == Component
const Menu = ({
  play,
  difficulty,
  moreDifficulty,
  lessDifficulty,
}) => (
  <div className="menu">
    <button
      type="button"
      className="menu-button__play"
      onClick={play}
    >
      <Play size="42" />
      <span className="menu-button__play__name">Play</span>
    </button>
    <div className="menu-seperate" />
    <div className="menu-difficulty">
      <p className="menu-difficulty__name">Difficulty</p>
      <button type="button" className="menu-difficulty__button__less" onClick={lessDifficulty}>
        <MinusCircle size="42" />
      </button>
      <p className="menu-difficulty__number">{difficulty}</p>
      <button type="button" className="menu-difficulty__button__more" onClick={moreDifficulty}>
        <PlusCircle size="42" />
      </button>
    </div>
  </div>
);

// == PropTypes
Menu.propTypes = {
  play: PropTypes.func.isRequired,
  difficulty: PropTypes.number.isRequired,
  moreDifficulty: PropTypes.func.isRequired,
  lessDifficulty: PropTypes.func.isRequired,
};

// == Export
export default Menu;
