import { CharacterCard } from "@/features/characters/components/home/CharacterCard";

export function CharacterSelectionSection({
  characters,
  selectedId,
  onSelectCharacter,
  onOpenCharacter
}) {
  return (
    <section className="personagens home-anim">
      <h2 className="titulo">Selecione um personagem</h2>

      <ul className="lista-de-personagens">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            isSelected={character.id === selectedId}
            onSelect={onSelectCharacter}
            onOpen={onOpenCharacter}
          />
        ))}
      </ul>
    </section>
  );
}
