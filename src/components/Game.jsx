import PropTypes from 'prop-types';
import GameStatus from './GameStatus';
import Board from './Board';
import Dice from './Dice';
import Form from './Form';
import '../scss/components/Game.scss';

function Game({
  positionGrogu,
  cookies,
  eggs,
  frogs,
  diceResult,
  stateGame,
  handleSetName,
  handleRollDice,
  handleReset,
}) {
  return (
    <div className="game">
      <div className="gameBoard">
        <Board positionGrogu={positionGrogu} />
      </div>
      <div className="gameElements">
        <Form handleSetName={handleSetName} />
        <div className="diceAndStatus">
          <Dice handleRollDice={handleRollDice} stateGame={stateGame} />
          <GameStatus stateGame={stateGame} />
        </div>
        <div>{diceResult}</div>
        <div className="goods-count">
          <section className="goods-container">
            <div className="goods-item">{cookies}</div>
          </section>
          <section className="goods-container">
            <div className="goods-item">{eggs}</div>
          </section>
          <section className="goods-container">
            <div className="goods-item">{frogs}</div>
          </section>
        </div>
        <section>
          <button className="restart-button" onClick={handleReset}>
            Reiniciar Juego
          </button>
        </section>
      </div>
    </div>
  );
}

Game.propTypes = {
  positionGrogu: PropTypes.number,
  cookies: PropTypes.array,
  eggs: PropTypes.array,
  frogs: PropTypes.array,
  diceResult: PropTypes.string,
  stateGame: PropTypes.string,
  handleSetName: PropTypes.func,
  handleRollDice: PropTypes.func,
  handleReset: PropTypes.func,
};

export default Game;
