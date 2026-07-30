import { useEffect, useState } from 'react';
import './Header.css';
import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.55,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });

    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          HTTP<span>3</span>
        </a>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={menuOpen ? 'nav active' : 'nav'}>
          <ul className="nav-links">
            <li>
              <button
                className={active === 'home' ? 'active' : ''}
                onClick={() => scrollToSection('home')}
              >
                Accueil
              </button>
            </li>

            <li>
              <button
                className={active === 'team' ? 'active' : ''}
                onClick={() => scrollToSection('team')}
              >
                Équipe
              </button>
            </li>

            <li>
              <button
                className={active === 'skills' ? 'active' : ''}
                onClick={() => scrollToSection('skills')}
              >
                Compétences
              </button>
            </li>

            <li>
              <button
                className={active === 'projects' ? 'active' : ''}
                onClick={() => scrollToSection('projects')}
              >
                Projets
              </button>
            </li>

            <li>
              <button
                className={active === 'contact' ? 'active' : ''}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
