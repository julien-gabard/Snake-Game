// == Import npm
import React from 'react';

// == Import Components
import Snake from 'src/components/Snake';
import Food from 'src/components/Food';
import GameOver from 'src/components/GameOver';
import Score from 'src/components/Score';

// == Import
import './app.scss';

// == Composant
/**
 * Allows you to generate a random number
 */
const getRandomCoordinates = () => {
  const min = 1;
  const max = 98;
  const randomGenX = (Math.random() * (max - min + 1)) + min;
  const randomGenY = (Math.random() * (max - min + 1)) + min;
  const x = Math.floor(randomGenX / 2) * 2;
  const y = Math.floor(randomGenY / 2) * 2;
  return [x, y];
};

const initialState = {
  food: getRandomCoordinates(),
  speed: 200,
  direction: 'RIGHT',
  gameOver: true,
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
    this.setState({
      gameOver: false,
    });
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  }

  /**
   * initializes state to game over
   */
  onGameOver() {
    this.setState(initialState);
  }

  /**
   * binding of arrow keys to state "direction"
   * @param evt "event"
   */
  onKeyDown = (evt) => {
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

  /**
   * I check if the head of the snake does not touch the edges
   */
  checkIfOutOfBorders() {
    const { snakeDots } = this.state;
    const head = snakeDots[snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  /**
   * I control if the head of the snake does not touch that tail
   */
  checkIfCollapsed() {
    const { snakeDots } = this.state;
    const snake = [...snakeDots];
    const head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.onGameOver();
      }
    });
  }

  /**
   * I control if the head of the snake passes over the food element
   */
  checkIfEat() {
    const { snakeDots, food } = this.state;
    const head = snakeDots[snakeDots.length - 1];
    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: getRandomCoordinates(),
      });
      this.enLargeSnake();
    }
  }

  /**
   * I add an element to the snake after passing on the food element
   */
  enLargeSnake() {
    const { snakeDots } = this.state;
    const newSnake = [...snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake,
    });
  }

  /**
   * condition on the speed of the snake
   */
  increaseSpeed() {
    const { speed } = this.state;
    if (speed > 10) {
      this.setState({
        speed: speed - 10,
      });
    }
  }

  render() {
    const { snakeDots, food, gameOver } = this.state;

    return (
      <div className="game-area">
        <Snake snakeDots={snakeDots} />
        <Food dot={food} />
        <Score snakeDots={snakeDots} />
        {gameOver && <GameOver />}
      </div>
    );
  }
}

// == Export
export default App;
