import { useEffect, useState } from 'react';
import './Equipe.css';
import { getGithubUser } from '../services/github';

function Equipe() {
  const members = [
    {
      nom: 'Debertho Lentz BELLEGARDE',
      username: 'DeberthoCF',
      domaine: 'Génie informatique',
      universite: 'ISTEAH',
      photo: '/images/Debertho.jpeg',
      github: 'https://github.com/DeberthoCF',
      linkedin: 'https://www.linkedin.com/in/debertho-lentz-bellegarde-232b333a1/',
      description:
        'Passionné par la technologie et l’éducation numérique. Je m’investis dans la transformation d’idées en solutions concrètes répondant aux besoins de notre société. ',
    },

    {
      nom: 'Jackensly CHARLES',

      username: 'Jackooking',
      domaine: 'DUT-TIC, Sciences Économiques',
      universite: 'ISTEAH, UEH',

      photo: '/images/Jackensly.jpeg',
      github: 'https://github.com/Jackooking',
      linkedin:
        'https://www.linkedin.com/in/jackensly-charles-a963b5425?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      description:
        "Passionné par le numérique et l'innovation. Je développe mes compétences afin de participer à des projets technologiques et économiques porteurs.",
    },

    {
      nom: 'Carldens Emmanuel PAUL',
      username: 'Carl-Devv',
      domaine: 'Génie informatique, Droit',
      universite: 'ISTEAH, UEH',

      photo: '/images/Carldens.jpeg',
      github: 'https://github.com/Carl-Devv',
      linkedin: 'https://www.linkedin.com/in/carldens-emmanuel-paul/',
      description:
        "Passionné par la cybersécurité et les technologies modernes. J'aime créer des solutions fiables, innovantes et performantes.",
    },
  ];

  const [githubData, setGithubData] = useState({});

  useEffect(() => {
    async function loadGithub() {
      const data = {};
      for (const member of members) {
        try {
          data[member.username] = await getGithubUser(member.username);
        } catch {
          data[member.username] = null;
        }
      }
      setGithubData(data);
    }
    loadGithub();
  }, []);

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">NOTRE ÉQUIPE</p>

          <h2>Trois étudiants, une même passion.</h2>

          <p className="section-description">
            Nous collaborons afin de concevoir des applications Web modernes, responsives et
            adaptées aux besoins réels.
          </p>
        </div>

        <div className="team-grid">
          {members.map((member) => (
            <article className="member-card" key={member.nom}>
              <img src={member.photo} alt={member.nom} className="member-photo" />

              <h3>{member.nom}</h3>
              {/* Domaine & Université */}
              <p className="member-role">Domaine(s) : {member.domaine}</p>
              <p className="member-university">Université(s) : {member.universite}</p>

              {githubData[member.username] && (
                <>
                  <p className="github-login">@{githubData[member.username].login}</p>
                  <p className="github-stats">
                    📦 {githubData[member.username].public_repos} dépôts
                  </p>
                  <p className="github-stats">👥 {githubData[member.username].followers} abonnés</p>
                </>
              )}

              <p className="member-description">{member.description}</p>

              <div className="member-links">
                <a
                  href={
                    githubData[member.username]
                      ? githubData[member.username].html_url
                      : member.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Equipe;
