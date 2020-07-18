// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import SCSS
import './food.scss';

// == Component
const Food = ({ dot }) => {
  const style = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
  };

  return (
    <div className="food" style={style} />
  );
};

// == PropTypes
Food.propTypes = {
  dot: PropTypes.array.isRequired,
};

// == Export
export default Food;
