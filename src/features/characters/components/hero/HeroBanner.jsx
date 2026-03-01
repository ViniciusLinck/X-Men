import { Link } from "react-router-dom";

export function HeroBanner({ character, imageRef }) {
  return (
    <section className="hero-banner hero-anim">
      <div className="hero-banner-media">
        <img ref={imageRef} src={character.portraitImage} alt={`Retrato de ${character.name}`} />
      </div>

      <div className="hero-banner-content">
        <p className="hero-kicker">{character.alias}</p>
        <h1>{character.name}</h1>
        <p>{character.description}</p>

        <div className="hero-meta-inline">
          <span>
            <strong>Primeira aparicao:</strong> {character.firstAppearance}
          </span>
          <span>
            <strong>Origem:</strong> {character.origin}
          </span>
        </div>

        <div className="hero-actions">
          <Link to="/" className="btn-outline">
            Voltar para selecao
          </Link>
          <a className="btn-solid" href={character.wikiUrl} target="_blank" rel="noreferrer">
            Wiki oficial
          </a>
        </div>
      </div>
    </section>
  );
}
