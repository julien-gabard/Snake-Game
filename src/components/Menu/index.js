// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import logo
import { Play } from 'react-feather';

// == Import SCSS
import './menu.scss';

// == Component
const Menu = ({ play }) => (
  <div className="menu">
    <button
      type="button"
      className="game-area__button"
      onClick={play}
    >
      <Play size="42" />
      <span className="game-area__button__name">Play</span>
    </button>
  </div>
);

// == PropTypes
Menu.propTypes = {
  play: PropTypes.func.isRequired,
};

// == Export
export default Menu;
