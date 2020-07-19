// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import SCSS
import './snake.scss';

// == Component
const Snake = ({
  snakeDots,
  onPlay,
  speed,
  moveSnake,
}) => {
  useEffect(() => {
    const move = setInterval(moveSnake, speed);
    return () => clearInterval(move);
  }, [onPlay]);

  return (
    <>
      {snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div className="snake" key={i} style={style} />
        );
      })}
    </>
  );
};

// == PropTypes
Snake.propTypes = {
  snakeDots: PropTypes.array.isRequired,
  onPlay: PropTypes.bool.isRequired,
  speed: PropTypes.number.isRequired,
  moveSnake: PropTypes.func.isRequired,
};

// == Export
export default Snake;
