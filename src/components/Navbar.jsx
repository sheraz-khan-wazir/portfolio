const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Portfolio home">
        <span className="brand-mark">S</span>
        <span>Sheraz.dev</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
