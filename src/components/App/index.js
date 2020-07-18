// == Import npm
import React from 'react';

// == Import Components
import Snake from 'src/components/Snake';

// == Import
import './app.scss';

// == Composant
/**
 * Allows you to generate a random number
 */
const getRandomCoordinates = () => {
  const min = 1;
  const max = 98;
  const x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  const y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const initialState = {
  food: getRandomCoordinates(),
  speed: 200,
  direction: 'RIGHT',
  snakeDots: [
    [0, 0],
    [2, 0],
  ],
};

class App extends React.Component {
  state = initialState;

  render() {
    const { snakeDots } = this.state;

    return (
      <div className="game-area">
        <Snake snakeDots={snakeDots} />
      </div>
    );
  }
}

// == Export
export default App;
