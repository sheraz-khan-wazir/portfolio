function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="experience-heading">
        <p className="eyebrow">Education</p>
        <h2>Software Engineering student with a frontend focus.</h2>
        <p>
          My academic journey and practice projects help me build stronger frontend skills
          step by step.
        </p>
      </div>

      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-marker">01</div>
          <div>
            <span className="timeline-date">Current</span>
            <h3>Iqra National University</h3>
          </div>
          <p>
            I am studying Software Engineering and currently completing my 5th semester.
            My learning focus is frontend web development, practical projects, and modern
            development tools.
          </p>
        </article>

        <article className="timeline-item">
          <div className="timeline-marker">02</div>
          <div>
            <span className="timeline-date">Practice</span>
            <h3>Small Frontend Projects</h3>
          </div>
          <p>
            I have built small and simple projects to improve my HTML, CSS, Bootstrap,
            JavaScript, and React skills. I am continuously learning and improving with
            every project.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Experience
