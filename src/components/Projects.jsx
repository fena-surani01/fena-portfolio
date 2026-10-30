import Section from './Section.jsx';
import { projects } from '../data.js';

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function Status({ p }) {
  if (!p.status) return null;
  return (
    <span className={`status ${p.statusType || ''}`}>
      <span className="status-dot" /> {p.status}
    </span>
  );
}

function FeaturedProject({ p }) {
  return (
    <article className="card project featured">
      <div className="project-top">
        <p className="project-type">{p.type}</p>
        <Status p={p} />
      </div>

      <h3>{p.title}</h3>
      <p className="muted project-desc">{p.description}</p>
      {p.statusNote && <p className="status-note">{p.statusNote}</p>}

      <div className="portals">
        {p.portals.map((portal) => (
          <div key={portal.name} className="portal">
            <h4>{portal.name}</h4>
            <ul className="bullets">
              {portal.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {p.integrations && (
        <p className="integrations">
          <strong>Integrations:</strong> {p.integrations.join(' · ')}
        </p>
      )}

      <div className="project-footer">
        <Tags items={p.tech} />
        {p.link ? (
          <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-primary">
            {p.linkLabel}
          </a>
        ) : (
          <span className="btn btn-ghost btn-disabled">Link coming soon</span>
        )}
      </div>
    </article>
  );
}

function Project({ p }) {
  return (
    <article className="card project">
      <div className="project-top">
        <p className="project-type">{p.type}</p>
        <Status p={p} />
      </div>
      <h3>{p.title}</h3>
      <p className="muted project-desc">{p.description}</p>
      {p.points && (
        <ul className="bullets">
          {p.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      )}
      <div className="project-bottom">
        <Tags items={p.tech} />
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      number="04"
      eyebrow="Projects"
      title="Things I've built"
      subtitle="Personal, office and college projects I have worked on."
    >
      <div className="projects-grid">
        {projects.map((p) =>
          p.featured ? <FeaturedProject key={p.title} p={p} /> : <Project key={p.title} p={p} />
        )}
      </div>
    </Section>
  );
}
