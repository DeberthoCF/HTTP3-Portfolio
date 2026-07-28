/*import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          HTTP<span>3</span>
        </Link>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home">Accueil</a>
            </li>

            <li>
              <a href="#team">Équipe</a>
            </li>

            <li>
              <a href="#skills">Compétences</a>
            </li>

            <li>
              <a href="#projects">Projets</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;*/

import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          HTTP<span>3</span>
        </Link>

        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Accueil</Link>
            </li>

            <li>
              <Link to="/equipe">Équipe</Link>
            </li>

            <li>
              <Link to="/competences">Compétences</Link>
            </li>

            <li>
              <Link to="/projets">Projets</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
