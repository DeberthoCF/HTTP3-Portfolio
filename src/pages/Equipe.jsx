import './Equipe.css';

function Equipe() {
  const members = [
    {
      nom: 'Debertho Lentz BELLEGARDE',
      domaine: 'Génie informatique',
      photo: '/images/debertho.jpg',
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/',
      description:
        "Passionné par le développement Web et les interfaces modernes. J'aime concevoir des applications simples, élégantes et accessibles.",
    },

    {
      nom: 'Jackengsly',
      domaine: 'Génie informatique',
      photo: '/images/jackengsly.jpg',
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/',
      description:
        "Étudiant en génie informatique. Intéressé par React, JavaScript moderne et l'architecture des applications Web.",
    },

    {
      nom: 'Carldens',
      domaine: 'Génie informatique',
      photo: '/images/carldens.jpg',
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/',
      description:
        'Étudiant en génie informatique. Passionné par les technologies Web et le développement côté serveur.',
    },
  ];

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

              <p className="member-role">{member.domaine}</p>

              <p className="member-description">{member.description}</p>

              <div className="member-links">
                <a href={member.github} target="_blank" rel="noopener noreferrer">
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
