import PropTypes from 'prop-types';
import '../scss/components/Header.scss';

const Header = ({ name }) => {
  return (
    <header className="title">
      <h1>{`¡Cuidado con Grogu ${name}!`}</h1>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string,
};
export default Header;
