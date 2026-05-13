const services = [
  {
    title: 'Responsive Websites',
    description: 'Clean websites that work smoothly on mobile, tablet, and desktop screens.',
  },
  {
    title: 'Frontend UI Development',
    description: 'Modern user interfaces built with HTML, CSS, JavaScript, Bootstrap, and React.',
  },
  {
    title: 'AI-Assisted Workflow',
    description: 'Using AI tools to speed up planning, coding, debugging, and project improvement.',
  },
]

function Services() {
  return (
    <section className="section" id="services">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>What I can help with</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="info-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
