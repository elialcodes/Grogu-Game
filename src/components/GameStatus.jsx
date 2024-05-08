import PropTypes from 'prop-types';
function GameStatus({ stateGame }) {
  return (
    <>
      <div className="game-status">{stateGame}</div>
    </>
  );
}

GameStatus.propTypes = {
  stateGame: PropTypes.string.isRequired,
};

export default GameStatus;
