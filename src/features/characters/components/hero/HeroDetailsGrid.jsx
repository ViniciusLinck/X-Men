import { HeroMetaSection } from "@/features/characters/components/hero/HeroMetaSection";
import { HeroStatBar } from "@/features/characters/components/hero/HeroStatBar";

export function HeroDetailsGrid({ character }) {
  return (
    <section className="hero-grid hero-anim">
      <section className="hero-block">
        <h3>Biografia</h3>
        {character.biography.map((paragraph) => (
          <p key={`${character.id}-${paragraph.slice(0, 12)}`} className="hero-paragraph">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="hero-block">
        <h3>Niveis de combate</h3>
        <ul className="hero-stats">
          {Object.entries(character.stats).map(([label, value]) => (
            <HeroStatBar key={`${character.id}-${label}`} label={label} value={value} />
          ))}
        </ul>
      </section>

      <HeroMetaSection title="Poderes principais" items={character.powers} />
      <HeroMetaSection title="Habilidades taticas" items={character.abilities} />
      <HeroMetaSection title="Afiliacoes" items={character.affiliations} />
      <HeroMetaSection title="Curiosidades" items={character.facts} />
    </section>
  );
}
