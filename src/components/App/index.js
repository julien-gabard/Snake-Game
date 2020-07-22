// == Import npm
import React from 'react';

// == Import Components
import Snake from 'src/components/Snake';
import Food from 'src/components/Food';
import GameOver from 'src/components/GameOver';
import Score from 'src/components/Score';
import BoardGame from 'src/components/BoardGame';

// == Import
import './app.scss';

// == Composant

/**
 * Allows you to generate a random number.
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

/**
 * State initial
 */
const initialState = {
  food: getRandomCoordinates(),
  speed: 200,
  difficulty: 1,
  direction: 'RIGHT',
  gameOver: false,
  onPlay: false,
  snakeDots: [
    [0, 0],
    [2, 0],
  ],
};

class App extends React.Component {
  state = initialState;

  componentDidMount() {
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  }

  /**
   * Activate the snake game launch.
   */
  onPlayGame = () => {
    this.checkToDifficulty();
    this.setState({
      onPlay: true,
      gameOver: false,
    });
  }

  /**
   * Game over and my stop the game.
   */
  onGameOver = () => {
    this.setState({
      gameOver: true,
      onPlay: false,
    });
  }

  /**
   * modify the speed in relation to the difficulty chosen
   */
  checkToDifficulty = () => {
    const { difficulty } = this.state;

    if (difficulty === 1) {
      this.setState({
        speed: 200,
      });
    }
    if (difficulty === 2) {
      this.setState({
        speed: 100,
      });
    }
    if (difficulty === 3) {
      this.setState({
        speed: 50,
      });
    }
    if (difficulty === 4) {
      this.setState({
        speed: 20,
      });
    }
  }

  /**
   * binding of arrow keys to state "direction".
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
   * snake movement in one direction.
   */
  moveSnake = () => {
    const { snakeDots, direction, onPlay } = this.state;

    const dots = [...snakeDots];

    let head = dots[dots.length - 1];

    if (onPlay === true) {
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
    }

    // I add the head element.
    dots.push(head);

    // I remove the first element.
    dots.shift();

    this.setState({
      // I add the new coordinates in state.
      snakeDots: dots,
    });
  }

  /**
   * Increase difficulty by + 1
   */
  moreDifficulty = () => {
    const { difficulty } = this.state;

    if (difficulty < 4) {
      this.setState({
        difficulty: difficulty + 1,
      });
    }
  }

  /**
   * decrease the difficulty by + 1
   */
  lessDifficulty = () => {
    const { difficulty } = this.state;

    if (difficulty <= 4 && difficulty > 1) {
      this.setState({
        difficulty: difficulty - 1,
      });
    }
  }

  /**
   * Initial the game.
   */
  resetGame() {
    this.setState({
      snakeDots: initialState.snakeDots,
      food: initialState.food,
      direction: initialState.direction,
    });
  }

  /**
   * I check if the head of the snake does not touch the edges.
   */
  checkIfOutOfBorders() {
    const { snakeDots } = this.state;

    const head = snakeDots[snakeDots.length - 1];

    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.resetGame();
      this.onGameOver();
    }
  }

  /**
   * I control if the head of the snake does not touch that tail.
   */
  checkIfCollapsed() {
    const { snakeDots, onPlay } = this.state;

    const snake = [...snakeDots];

    const head = snake[snake.length - 1];

    // I delete the last element of the snake
    snake.pop();

    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.resetGame();
        if (onPlay === true) {
          this.onGameOver();
        }
      }
    });
  }

  /**
   * I control if the head of the snake passes over the food element.
   */
  checkIfEat() {
    const { snakeDots, food } = this.state;

    const head = snakeDots[snakeDots.length - 1];

    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: getRandomCoordinates(),
      });

      this.largeSnake();
    }
  }

  /**
   * I add an element to the snake after passing on the food element.
   */
  largeSnake() {
    const { snakeDots } = this.state;

    const newSnake = [...snakeDots];

    // I add one or more elements at the start of my coordinate table.
    newSnake.unshift([]);

    // I then add the newSnake in the state.
    this.setState({
      snakeDots: newSnake,
    });
  }

  render() {
    const {
      snakeDots,
      food,
      gameOver,
      onPlay,
      speed,
      difficulty,
    } = this.state;

    return (
      <div className="game-area">
        <BoardGame
          play={this.onPlayGame}
          speed={speed}
          difficulty={difficulty}
          moreDifficulty={this.moreDifficulty}
          lessDifficulty={this.lessDifficulty}
        />
        <Snake
          snakeDots={snakeDots}
          onPlay={onPlay}
          speed={speed}
          moveSnake={this.moveSnake}
        />
        <Food dot={food} />
        <Score snakeDots={snakeDots} difficulty={difficulty} />
        {gameOver && <GameOver />}
      </div>
    );
  }
}

// == Export
export default App;
