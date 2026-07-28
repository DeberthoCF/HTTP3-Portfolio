import './Projets.css';

function Projets() {
  return (
    <section id="projects" className="projects-section">
      <h2>Nos Projets</h2>

      <p className="projects-subtitle">
        Découvrez quelques réalisations académiques et personnelles de notre équipe.
      </p>

      {/* ===================== */}
      {/* DEBERTHO */}
      {/* ===================== */}

      <div className="project-category">
        <h3>Debertho Lentz BELLEGARDE</h3>

        <div className="project-grid">
          <article className="project-card">
            <img src="/images/project-web1.jpg" alt="Projet Web 1" />

            <div className="project-content">
              <h4>Reproduction d'une interface Web</h4>

              <p>
                Reproduction fidèle d'une interface proposée dans le cadre du cours de Conception de
                sites Web.
              </p>

              <span className="tech">HTML5 • CSS3 • JavaScript</span>

              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  GitHub
                </a>

                <a href="#" target="_blank" rel="noreferrer">
                  Démo
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <img src="/images/weather.jpg" alt="Weather Dashboard" />

            <div className="project-content">
              <h4>Weather Dashboard</h4>

              <p>
                Tableau de bord météo utilisant Open-Meteo avec recherche par ville et affichage des
                prévisions.
              </p>

              <span className="tech">HTML5 • CSS3 • JavaScript • Fetch API • Open-Meteo API</span>

              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  GitHub
                </a>

                <a href="#" target="_blank" rel="noreferrer">
                  Démo
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* ===================== */}
      {/* JACKENGSLY */}
      {/* ===================== */}

      <div className="project-category">
        <h3>Jackengsly</h3>

        <div className="project-grid">
          <article className="project-card">
            <img src="/images/project-web2.jpg" alt="" />

            <div className="project-content">
              <h4>Reproduction d'une interface Web</h4>

              <p>Intégration responsive d'une maquette HTML/CSS avec JavaScript.</p>

              <span className="tech">HTML5 • CSS3 • JavaScript</span>

              <div className="project-links">
                <a href="#">GitHub</a>

                <a href="#">Démo</a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <img src="/images/country.jpg" alt="" />

            <div className="project-content">
              <h4>Country Explorer</h4>

              <p>
                Recherche d'un pays avec affichage du drapeau, de la capitale, de la population et
                d'autres informations.
              </p>

              <span className="tech">
                HTML5 • CSS3 • JavaScript • Fetch API • REST Countries API
              </span>

              <div className="project-links">
                <a href="#">GitHub</a>

                <a href="#">Démo</a>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* ===================== */}
      {/* PROJET DE GROUPE */}
      {/* ===================== */}

      <div className="group-project">
        <h3>Projet de Groupe</h3>

        <article className="group-card">
          <img src="/images/jancheche.jpg" alt="Jan Chèche, Jan Trouve" />

          <div className="group-content">
            <h4>Jan Chèche, Jan Trouve</h4>

            <p>
              Prototype fonctionnel (MVP) d'une application mobile Android permettant de déclarer un
              objet retrouvé et de rechercher un objet perdu.
            </p>

            <div className="credits">
              <p>
                <strong>Idée</strong>
                <br />
                Carldens Emmanuel PAUL
              </p>

              <p>
                <strong>Développement</strong>
                <br />
                Debertho Lentz BELLEGARDE
              </p>
            </div>

            <span className="tech">MIT App Inventor • TinyDB</span>

            <div className="project-links">
              <a href="#">GitHub</a>

              <a href="#">Démo</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projets;
