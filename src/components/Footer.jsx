import { Link, Route, Routes } from 'react-router-dom';
import App from './App';
import Wellcome from './Wellcome';
import Instructions from './Instructions';

function Footer() {
  return (
    <>
      <Routes>
        <Route path="/options" element={<Wellcome />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/game-play" element={<App />} />
      </Routes>

      <footer className="footer">
        <nav>
          <ul>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/options">
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
    </>
  );
}

export default Footer;
