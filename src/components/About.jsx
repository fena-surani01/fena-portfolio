import Section from './Section.jsx';
import Icon from './Icon.jsx';
import { about, details } from '../data.js';

export default function About() {
  return (
    <Section
      id="about"
      number="01"
      eyebrow="About me"
      title="Who I am"
      subtitle="A quick introduction and my basic details."
    >
      <div className="about-grid">
        <div className="about-main">
          <p className="about-intro">{about.intro}</p>

          <ul className="highlights">
            {about.highlights.map((h) => (
              <li key={h.title} className="highlight">
                <span className="icon-box">
                  <Icon name={h.icon} />
                </span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card details-card">
          <h3>Personal details</h3>
          <dl className="details">
            {details.map((d) => (
              <div key={d.label} className="detail-row">
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
