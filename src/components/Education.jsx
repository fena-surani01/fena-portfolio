import Section from './Section.jsx';
import { education } from '../data.js';

export default function Education() {
  return (
    <Section
      id="education"
      number="05"
      eyebrow="Education"
      title="My education"
      subtitle="My academic background."
    >
      <div className="edu-grid">
        {education.map((e) => (
          <div key={e.degree} className="card">
            {e.period && <span className="pill">{e.period}</span>}
            <h3>{e.degree}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
