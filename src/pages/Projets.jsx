import { useState } from 'react';
import './Projets.css';

function Projets() {
  const [filtre, setFiltre] = useState('Tous');
  const [modalMedia, setModalMedia] = useState(null); // Gère l'affichage du GIF en Modal

  const projets = [
    {
      categorie: 'Personnel',
      auteur: 'Debertho Lentz BELLEGARDE',
      titre: "Reproduction d'une interface Web",
      description:
        "Reproduction fidèle d'une interface proposée dans le cadre du cours de Conception de sites Web.",
      image: '/images/project_web1.png',
      technologies: 'HTML5 • CSS3 • JavaScript',
      github: 'https://github.com/DeberthoCF/INF3500-Devoir1',
      demoGif: '/images/project_web1.png',

      demoUrl: '#',
    },
    {
      categorie: 'Personnel',
      auteur: 'Debertho Lentz BELLEGARDE',
      titre: 'Weather Dashboard',
      description: "Tableau de bord météo interactif utilisant les prévisions d'Open-Meteo.",
      image: '/images/weather.png',
      technologies: 'HTML5 • CSS3 • JavaScript • Fetch API • Open-Meteo API',
      github: 'https://github.com/DeberthoCF/weather-dashboard',
      demoGif: null,
      demoUrl: 'https://deberthocf.github.io/weather-dashboard/',
    },
    {
      categorie: 'Personnel',
      auteur: 'Jackensly CHARLES',
      titre: "Reproduction d'une interface Web",
      description:
        "Reproduction fidèle d'une interface proposée dans le cadre du cours de Conception de sites Web.",
      image: '/images/project_web1.png',
      technologies: 'HTML5 • CSS3 • JavaScript',
      github: 'https://github.com/Jackooking/Devoir_1_INF3500_corrigee',
      demoGif: '/images/project_web1.png',
      demoUrl: null,
    },
    {
      categorie: 'Personnel',
      auteur: 'Jackensly CHARLES',
      titre: 'Country Explorer',
      description:
        "Recherche et affichage détaillé d'informations sur les pays via REST Countries API.",
      image: '/images/pays_Jackensly.png',
      technologies: 'HTML5 • CSS3 • JavaScript • REST Countries API',
      github: 'https://github.com/Jackooking/Devoir_2_LOG3500',
      demoGif: null,
      demoUrl: 'https://jackooking.github.io/Devoir_2_LOG3500/',
    },
    {
      categorie: 'Personnel',
      auteur: 'Carldens Emmanuel PAUL',
      titre: "Reproduction d'une interface Web",
      description:
        "Reproduction fidèle d'une interface proposée dans le cadre du cours de Conception de sites Web.",
      image: '/images/project_web1.png',
      technologies: 'HTML5 • CSS3 • JavaScript',
      github: 'https://github.com/Carl-Devv/signup-page',
      demoGif: '/images/project_web1.png',
      demoUrl: null,
    },
    {
      categorie: 'Personnel',
      auteur: 'Carldens Emmanuel PAUL',
      titre: 'Country Explorer',
      description:
        "Recherche et affichage détaillé d'informations sur les pays via REST Countries API.",
      image: '/images/pays_Carldensf.jpeg',
      technologies: 'HTML5 • CSS3 • JavaScript • REST Countries API',
      github: 'https://github.com/Carl-Devv/L-Atlas',
      demoGif: '/images/pays_Carldensf.jpeg',
      demoUrl: null,
    },
    {
      categorie: 'Groupe',
      idee: 'Carldens Emmanuel PAUL',
      auteur: 'Debertho Lentz BELLEGARDE',
      titre: 'Jan Chèche, Jan Trouve',
      description:
        'Prototype Android qui permettra aux citoyens haïtiens de retrouver des objets perdus.',
      image: '/images/jancheche_jantrouve.jpeg',
      technologies: 'MIT App Inventor • TinyDB',
      github: '#',
      demoGif: '/images/jancheche_jantrouve.jpeg',
      demoUrl: null,
    },
  ];

  const projetsFiltres =
    filtre === 'Tous' ? projets : projets.filter((projet) => projet.categorie === filtre);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Nos Projets</h2>

        <p className="projects-subtitle">
          Découvrez quelques réalisations académiques et personnelles de notre équipe.
        </p>

        <div className="filter-buttons">
          <button className={filtre === 'Tous' ? 'active' : ''} onClick={() => setFiltre('Tous')}>
            Tous
          </button>

          <button
            className={filtre === 'Personnel' ? 'active' : ''}
            onClick={() => setFiltre('Personnel')}
          >
            Personnels
          </button>

          <button
            className={filtre === 'Groupe' ? 'active' : ''}
            onClick={() => setFiltre('Groupe')}
          >
            Groupe
          </button>
        </div>

        <div className="project-grid">
          {projetsFiltres.map((projet) => (
            <article className="project-card" key={`${projet.titre}-${projet.auteur}`}>
              <img src={projet.image} alt={projet.titre} className="project-image" />

              <div className="project-content">
                <h4>{projet.titre}</h4>

                {/* Si une idée est spécifiée (Projet de groupe) */}
                {projet.idee && (
                  <p className="project-author">
                    <span>Idée :</span> {projet.idee}
                  </p>
                )}

                <p className="project-author">
                  <span>Développé par :</span> {projet.auteur}
                </p>

                <p className="project-description">{projet.description}</p>

                <span className="tech">{projet.technologies}</span>

                <div className="project-links">
                  {projet.github && (
                    <a href={projet.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}

                  {projet.demoGif ? (
                    <button
                      type="button"
                      className="btn-demo"
                      onClick={() => setModalMedia({ title: projet.titre, gif: projet.demoGif })}
                    >
                      Démo 🎬
                    </button>
                  ) : (
                    projet.demoUrl && (
                      <a href={projet.demoUrl} target="_blank" rel="noopener noreferrer">
                        Démo
                      </a>
                    )
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* MODAL LIGHTBOX POUR LA DÉMO GIF */}
      {modalMedia && (
        <div className="modal-overlay" onClick={() => setModalMedia(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalMedia(null)}>
              ✕
            </button>
            <h3>Démo — {modalMedia.title}</h3>
            <img src={modalMedia.gif} alt={`Aperçu GIF ${modalMedia.title}`} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projets;
