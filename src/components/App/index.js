// == Import npm
import React from 'react';

// == Import Components
import Snake from 'src/components/Snake';
import Food from 'src/components/Food';

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

  componentDidMount() {
    const { speed } = this.state;
    setInterval(this.moveSnake, speed);
    document.onkeydown = this.onKeyDown;
  }

  /**
   * binding of arrow keys to state "direction"
   * @param evt "event"
   */
  onKeyDown = (evt) => {
    evt = evt || window.event;
    switch (evt.keyCode) {
      case 38:
        this.setState({
          direction: 'UP',
        });
        break;
      case 40:
        this.setState({
          direction: 'DOWN',
        });
        break;
      case 37:
        this.setState({
          direction: 'LEFT',
        });
        break;
      case 39:
        this.setState({
          direction: 'RIGHT',
        });
        break;
      default:
    }
  }

  /**
   * snake movement in one direction
   */
  moveSnake = () => {
    const { snakeDots, direction } = this.state;

    const dots = [...snakeDots];
    let head = dots[dots.length - 1];

    switch (direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
      default:
    }
    // I add the head element
    dots.push(head);
    // I remove the first element
    dots.shift();
    this.setState({
      // I add the new coordinates in state
      snakeDots: dots,
    });
  }

  render() {
    const { snakeDots, food } = this.state;

    return (
      <div className="game-area">
        <Snake snakeDots={snakeDots} />
        <Food dot={food} />
      </div>
    );
  }
}

// == Export
export default App;
