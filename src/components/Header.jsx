import '../scss/components/Header.scss';


const Header = ({ name }) => {
  return (
    <header className="title">
      <h1>¡Cuidado con Grogu {name}!</h1>
     
    </header>
  );
};

export default Header;
