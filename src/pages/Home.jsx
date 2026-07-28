import './Home.css';

import Equipe from './Equipe';
import Skills from './Skills';
import Projets from './Projets';
import Contact from './Contact';

function Home() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="mini-title">PORTFOLIO UNIVERSITAIRE</p>

          <h1>
            Bienvenue sur le Portfolio de l'équipe
            <span> HTTP3</span>
          </h1>

          <p className="description">
            Nous sommes trois étudiants en Technologies de l'information et de la communication à
            l'ISTEAH. À travers ce projet, nous présentons notre équipe, nos compétences, nos
            réalisations et notre passion pour le développement Web.
          </p>

          <p className="hero-slogan">« La technologie comme réponse aux défis haïtiens. »</p>

          <div className="buttons">
            <a href="#projects" className="btn">
              Voir nos projets
            </a>

            <a href="#team" className="btn-outline">
              Notre équipe
            </a>
          </div>

          <div className="scroll-indicator">
            <span></span>
          </div>
        </div>
      </section>

      {/* ================= AUTRES SECTIONS ================= */}

      <Equipe />

      <Skills />

      <Projets />

      <Contact />
    </>
  );
}

export default Home;
