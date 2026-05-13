function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-heading">
        <p className="eyebrow">About</p>
        <h2>A frontend developer who is learning, building, and improving.</h2>
        <div className="about-highlights">
          <span>5th Semester</span>
          <span>Software Engineering</span>
          <span>Frontend Focus</span>
        </div>
      </div>

      <div className="about-cards">
        <article className="about-card">
          <span className="about-card-number">01</span>
          <p>
            I am Sheraz Khan, a frontend web developer and Software Engineering student at
            Iqra National University. I am currently in my 5th semester and focused on
            improving my practical web development skills.
          </p>
        </article>

        <article className="about-card">
          <span className="about-card-number">02</span>
          <p>
            I have created small projects using HTML, CSS, Bootstrap, JavaScript, and React.
            I also use AI tools to plan better, work faster, debug issues, and improve the
            quality of my projects.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
