const projects = [
  {
    title: 'AI Todo App',
    description: 'A task management app built to practice todo features, clean UI, and JavaScript logic.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://ai-todo-app-blush.vercel.app/',
  },
  {
    title: 'E-commerce Website',
    description: 'A responsive e-commerce website layout with product sections and a clean shopping UI.',
    tags: ['HTML', 'CSS'],
    liveLink: 'https://ecommerce-website-using-html-css.vercel.app/',
  },
  {
    title: 'Calculator',
    description: 'A simple calculator project created to practice layout, styling, and JavaScript operations.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://calculater-three-theta.vercel.app/',
  },
  {
    title: 'Tourism Website',
    description: 'A tourism landing website with attractive sections, destination content, and responsive styling.',
    tags: ['HTML', 'CSS'],
    liveLink: 'https://tourism-websit-using-html-and-css.vercel.app/',
  },
]

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Highlighted practice projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-media">
              <span>{project.title}</span>
            </div>
            <div className="project-content">
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="project-link" href={project.liveLink} target="_blank" rel="noreferrer">
                Live Project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
