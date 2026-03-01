export function HeroMetaSection({ title, items, className = "" }) {
  const safeItems = Array.isArray(items) && items.length > 0 ? items : ["Sem dados disponiveis."];

  return (
    <section className={`hero-block ${className}`.trim()}>
      <h3>{title}</h3>
      <ul className="hero-list">
        {safeItems.map((item) => (
          <li key={`${title}-${item}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
