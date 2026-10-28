export default function Section({ id, number, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">
            <span>{number}</span> {eyebrow}
          </p>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
