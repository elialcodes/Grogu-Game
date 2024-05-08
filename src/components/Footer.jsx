import { Link, Route, Routes } from 'react-router-dom';
import App from './App';
import Options from './Options';
import Instructions from './Instructions';

function Footer() {
  return (
    <>
    <Routes>
        <Route path="/game-play" element={<App/>} />
        <Route path="/instructions" element={< Instructions/>} />
        <Route path="/options" element={< Options />} />
      </Routes>

        <footer className="footer">
  <nav>
    <ul>
      <li className="footer__menu-item">
        <Link className="footer__menu-link" to= "/">A jugar</Link>
      </li>
      <li className="footer__menu-item">
      <Link  className="footer__menu-link" to= "/instructions" >A jugar</Link>
      </li>
      <li className="footer__menu-item">
      <Link className="footer__menu-link" to= "/options" >A jugar</Link>
      </li>
    </ul>
  </nav>
  <small className="footer__copy">© Adalab</small>
</footer>
</>
  );
}

export default Footer

