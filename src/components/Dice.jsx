import PropTypes from 'prop-types';

function Dice({ handleRollDice, stateGame }) {
  const handleClick = () => {
    handleRollDice();
  };

  const isDisabled = stateGame === 'Has ganado!!!' || stateGame === 'Has perdido...';

  return (
    <>
      <button className="dice" onClick={handleClick} disabled={isDisabled}>
        🎲
      </button>
    </>
  );
}

Dice.propTypes = {
  handleRollDice: PropTypes.func.isRequired,
  resultRandomNumber: PropTypes.number,
  stateGame: PropTypes.string,
};

export default Dice;
