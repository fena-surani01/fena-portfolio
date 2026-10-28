import { useEffect, useState } from 'react';
import { profile } from '../data.js';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('');

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">{initials}</span>
          <span className="logo-text">{profile.name}</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => {
            const id = link.toLowerCase();
            return (
              <a
                key={link}
                href={`#${id}`}
                className={active === id ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            );
          })}
          <a href="#contact" className="btn btn-primary nav-cta-mobile" onClick={() => setOpen(false)}>
            Hire me
          </a>
        </nav>

        <a href="#contact" className="btn btn-primary btn-sm nav-cta">
          Hire me
        </a>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
