import '../scss/App.scss';
import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Game from './Game';
import Welcome from './Welcome';
import Instructions from './Instructions';

// import Begin from './Begin';

function App() {
  const [name, setName] = useState('');
  const [positionGrogu, setGroguPosition] = useState(0);
  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪']);
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚']);
  const [frogs, setFrogs] = useState(['🐸', '🐸', '🐸']);
  const [diceResult, setDiceResult] = useState('Resultado:');
  const [stateGame, setStateGame] = useState('Inicio');

  const handleSetName = (value) => {
    setName(value);
  };

  const handleRollDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;

    if (randomNumber === 4) {
      setGroguPosition(positionGrogu + 1);
      setDiceResult(`4, Grogu avanza una casilla`);
    }

    if (randomNumber === 1) {
      if (cookies.length !== 0) {
        setCookies(cookies.slice(1));
        setDiceResult(`1, ${name} descargas una galleta`);
      } else {
        setDiceResult(`1, ${name} no quedan galletas...`);
      }
    }

    if (randomNumber === 2) {
      if (eggs.length !== 0) {
        setEggs(eggs.slice(1));
        setDiceResult(`2, ${name} descargas un huevo`);
      } else {
        setDiceResult(`2, ${name} no quedan huevos...`);
      }
    }

    if (randomNumber === 3) {
      if (frogs.length !== 0) {
        setFrogs(frogs.slice(1));
        setDiceResult(`3, ${name} descargas una rana`);
      } else {
        setDiceResult(`3, ${name} no quedan ranas...`);
      }
    }
  };

  useEffect(() => {
    if (positionGrogu < 6 || cookies.length !== 3 || eggs.length !== 3 || frogs.length !== 3) {
      setStateGame('En curso');
    }
  }, [cookies.length, eggs.length, frogs.length, positionGrogu]);

  useEffect(() => {
    if (cookies.length === 0 && eggs.length === 0 && frogs.length === 0) {
      setDiceResult('');
      setStateGame('Has ganado!!!');
    }
  }, [cookies.length, eggs.length, frogs.length]);

  useEffect(() => {
    if (positionGrogu === 6) {
      setDiceResult('');
      setStateGame(`Has perdido...`);
    }
  }, [positionGrogu]);

  const handleReset = () => {
    setName('');
    setGroguPosition(0);
    setCookies(['🍪', '🍪', '🍪']);
    setEggs(['🥚', '🥚', '🥚']);
    setFrogs(['🐸', '🐸', '🐸']);
    setDiceResult('Resultado:');
    setStateGame('Inicio');
  };

  return (
    <div className="mainContainer">
      <div className="imageContainer"></div>
      <div className="noImageContainer">
        <Header name={name} />
        <main className="page">
          <ul className="menu">
            <li>
              <Link to="/welcome">Bienvenida</Link>
            </li>

            <li>
              <Link to="/instructions">Instrucciones</Link>
            </li>
            <li>
              <Link to="/game">Jugar</Link>
            </li>
          </ul>
        </main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route
            path="/game"
            element={
              <Game
                handleSetName={handleSetName}
                positionGrogu={positionGrogu}
                cookies={cookies}
                eggs={eggs}
                frogs={frogs}
                diceResult={diceResult}
                stateGame={stateGame}
                handleRollDice={handleRollDice}
                handleReset={handleReset}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
