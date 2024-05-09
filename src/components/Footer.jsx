import { Link, Route, Routes } from 'react-router-dom';
import App from './App';
import Welcome from './Welcome';
import Instructions from './Instructions';

function Footer() {
  return (
    <>
      <footer className="footer">
        <nav>
          <ul>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/welcome">
                Bienvenida
              </Link>
            </li>

            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/instructions">
                Instrucciones
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/">
                A jugar
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/game-play" element={<App />} />
      </Routes>
    </>
  );
}

export default Footer;
