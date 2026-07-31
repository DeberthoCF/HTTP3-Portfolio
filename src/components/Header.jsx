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
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
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
        </nav>
        <div className="header-actions">
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
