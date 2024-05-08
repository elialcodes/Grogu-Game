import PropTypes from 'prop-types';

function Dice({ handleDice, stateGame }) {
  const handleClick = () => {
    handleDice();
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
  handleDice: PropTypes.func.isRequired,
  resultRandomNumber: PropTypes.number,
  stateGame: PropTypes.string,
};

export default Dice;
