import '../scss/App.scss';
import { useState, useEffect } from 'react';
import Header from './Header';
import GameStatus from './GameStatus';
import Board from './Board';
import Dice from './Dice';
import Form from './Form';
import Footer from './Footer';

function App() {
  const [name, setName] = useState('');
  const [positionGrogu, setGroguPosition] = useState(0);
  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪']);
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚']);
  const [frogs, setFrogs] = useState(['🐸', '🐸', '🐸']);
  const [diceResult, setDiceResult] = useState('');
  const [stateGame, setStateGame] = useState('Inicio');

  const onChangeSetName = (value) => {
    setName(value);
  };

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    console.log(randomNumber);
    if (randomNumber === 4) {
      setGroguPosition(positionGrogu + 1);
      setDiceResult(`Resultado: 4,${name} Grogu ha avanzado una casilla`);
    }
    if (randomNumber === 1 && cookies.length !== 0) {
      setCookies(cookies.slice(1));
      setDiceResult(`Resultado: 1,${name} has ayudado a Mando a descargar una galleta`);
    }
    if (randomNumber === 1 && cookies.length === 0) {
      setDiceResult(`Resultado: 1,${name} lo siento, no quedan galletas...`);
    }

    if (randomNumber === 2 && eggs.length !== 0) {
      setEggs(eggs.slice(1));
      setDiceResult(`Resultado: 2,${name} has ayudado a Mando a descargar un huevo`);
    }
    if (randomNumber === 2 && eggs.length === 0) {
      setDiceResult(`Resultado: 2,${name} lo siento, no quedan huevos...`);
    }

    if (randomNumber === 3 && frogs.length !== 0) {
      setFrogs(frogs.slice(1));
      setDiceResult(`Resultado: 3,${name} has ayudado a Mando a descargar una rana`);
    }
    if (randomNumber === 3 && frogs.length === 0) {
      setDiceResult(`Resultado: 3,${name} lo siento, no quedan ranas...`);
    }
  };

  useEffect(() => {
    if (positionGrogu === 7) {
      setStateGame(`${name}Has perdido...`);
    }
  });

  useEffect(() => {
    if (positionGrogu !== 0 || cookies.length !== 3 || eggs.length !== 3 || frogs.length !== 3) {
      setStateGame('En curso');
    }
  });

  useEffect(() => {
    if (cookies.length === 0 && eggs.length === 0 && frogs.length === 0) {
      setDiceResult('');
      setStateGame('Has ganado!!!');
    }
  });

  const handleReset = () => {
    setName('');
    setGroguPosition(0);
    setCookies(['🍪', '🍪', '🍪']);
    setEggs(['🥚', '🥚', '🥚']);
    setFrogs(['🐸', '🐸', '🐸']);
    setDiceResult('');
    setStateGame('Inicio');
  };

  return (
    <div>
      <Header name={name} onChangeSetName={onChangeSetName} />
      <Form onChangeSetName={onChangeSetName} />
      <main className="page">
        <Board positionGrogu={positionGrogu} />
        <div>{diceResult}</div>
        <Dice handleDice={rollDice} stateGame={stateGame} />
        <GameStatus stateGame={stateGame} />
        <section className="goods-container">
          <div className="goods-item">{cookies}</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">{eggs}</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">{frogs}</div>
        </section>
        <section>
          <button className="restart-button" onClick={handleReset}>
            Reiniciar Juego
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
