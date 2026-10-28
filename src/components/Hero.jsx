import { profile } from '../data.js';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="badge">
            <span className="dot" /> Available for part-time work
          </span>
          <p className="hero-hello">Hello, I'm</p>
          <h1 className="hero-name">{profile.name}</h1>
          <h2 className="hero-role">{profile.role}</h2>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View my work</a>
            <a href="#contact" className="btn btn-ghost">Contact me</a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} className="btn btn-ghost" download>
                Download CV
              </a>
            )}
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-frame">
            <img src={profile.photo} alt={profile.name} width="800" height="1000" />
          </div>
          <div className="float-card float-top">
            <strong>1.5 Years</strong>
            <span>Experience</span>
          </div>
          <div className="float-card float-bottom">
            <strong>PHP · Laravel · MERN</strong>
            <span>Full Stack</span>
          </div>
        </div>
      </div>
    </section>
  );
}
