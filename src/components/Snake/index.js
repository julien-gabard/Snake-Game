// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import SCSS
import './snake.scss';

// == Component
const Snake = ({ snakeDots }) => (
  <div>
    {snakeDots.map((dot, i) => {
      const style = {
        left: `${dot[0]}%`,
        top: `${dot[1]}%`,
      };
      return (
        // eslint-disable-next-line react/no-array-index-key
        <div className="snake-dot" key={i} style={style} />
      );
    })}
  </div>
);

// == PropTypes
Snake.propTypes = {
  snakeDots: PropTypes.array.isRequired,
};

// == Export
export default Snake;
