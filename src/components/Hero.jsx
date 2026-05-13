import profileImage from '../assets/WhatsApp Image 2025-10-11 at 10.45.18 AM.jpeg'

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Frontend Web Developer</p>
        <h1>Hi, I am Sheraz Khan. I build modern web applications.</h1>
        <p className="hero-text">
          I build modern, responsive, and fast web applications with clean design,
          simple code, and a strong focus on user experience.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View Projects
          </a>
          <a className="button secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <img className="profile-image" src={profileImage} alt="Sheraz Khan" />
      </div>
    </section>
  )
}

export default Hero
