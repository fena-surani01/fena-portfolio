import Section from './Section.jsx';
import { skills } from '../data.js';

export default function Skills() {
  return (
    <Section
      id="skills"
      number="02"
      eyebrow="Skills"
      title="What I work with"
      subtitle="The languages, frameworks and tools I use every day."
    >
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.title} className="card">
            <h3>{group.title}</h3>
            <ul className="tags">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
