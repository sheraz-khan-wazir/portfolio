const skills = [
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'React (Beginner)',
  'Responsive Design',
  'AI Tools',
  'Fast Learning',
]

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Skills I use to build better projects</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <span className="skill-pill" key={skill}>
            <span className="skill-name">{skill}</span>
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
