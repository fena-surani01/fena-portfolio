import Section from './Section.jsx';
import Icon from './Icon.jsx';
import { profile } from '../data.js';

export default function Contact() {
  const items = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    {
      icon: 'phone',
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    { icon: 'location', label: 'Location', value: profile.location },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: profile.socials.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
      href: profile.socials.linkedin,
    },
  ];

  return (
    <Section
      id="contact"
      number="06"
      eyebrow="Contact"
      title="Let's work together"
      subtitle="Have a project or an opportunity? I'd love to hear from you."
    >
      <ul className="contact-list">
        {items.map((item) => (
          <li key={item.label} className="card contact-item">
            <span className="icon-box">
              <Icon name={item.icon} />
            </span>
            <div className="contact-text">
              <span className="contact-label">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
