import Grogu from './Grogu';
import '../scss/components/Board.scss';

const Board = ({ positionGrogu }) => {
  const renderCells = () => {
    const cells = Array(7).fill(null);
    return cells.map((cell, index) => {
      return (
        <div className="cell" key={index}>
          {positionGrogu === index && <Grogu />}
        </div>
      );
    });
  };

  return <section className="board">{renderCells()}</section>;
};

export default Board;
