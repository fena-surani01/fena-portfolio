import Section from './Section.jsx';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <Section
      id="experience"
      number="03"
      eyebrow="Experience"
      title="Work experience"
      subtitle="My professional journey, from intern to Junior Developer."
    >
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.role} className="timeline-item">
            <div className="card">
              <div className="timeline-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="muted">{job.company}</p>
                </div>
                <span className="pill">{job.period}</span>
              </div>
              <ul className="bullets">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
