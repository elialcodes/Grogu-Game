import PropTypes from 'prop-types';

function Dice({ handleDice, stateGame }) {
  const handleClick = () => {
    handleDice();
  };
  const isDisabled = stateGame === 'Has ganado!!!';

  return (
    <>
      <button className="dice" onClick={handleClick} disabled={isDisabled}>
        🎲
      </button>
      <button className="dice" onClick={handleClick} disabled={isDisabled}>
        Lanzar Dado
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
