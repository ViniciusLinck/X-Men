export function HeroStatBar({ label, value }) {
  return (
    <li className="hero-stat-item">
      <span>{label}</span>
      <div className="hero-stat-track">
        <div className="hero-stat-fill" style={{ width: `${Math.max(6, value)}%` }} />
      </div>
      <strong>{value}</strong>
    </li>
  );
}
