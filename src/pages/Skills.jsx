import './Skills.css';

function Skills() {
  const categories = [
    {
      title: 'Front-End',
      skills: ['HTML5', 'CSS3', 'JavaScript ES6', 'React', 'Responsive Design'],
    },

    {
      title: 'Back-End',
      skills: [
        'Node.js : Débutant',
        'Express : Débutant',
        'Django : Débutant',
        'FastAPI : Débutant',
      ],
    },

    {
      title: 'Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'npm'],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-tag">NOS COMPÉTENCES</p>

        <h2 className="section-title">Technologies et outils</h2>

        <p className="section-subtitle">
          Au cours de notre formation en Génie informatique à l'ISTEAH, nous développons
          progressivement des compétences en conception d'interfaces, développement Web moderne et
          outils collaboratifs.
        </p>

        <div className="category-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.title}>
              <h3>{category.title}</h3>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div className="skill-pill" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
