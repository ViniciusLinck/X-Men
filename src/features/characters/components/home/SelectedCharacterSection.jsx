import { useRef } from "react";

export function SelectedCharacterSection({ character, onOpenCharacter }) {
  const portraitRef = useRef(null);

  return (
    <section className="personagem-selecionado home-anim">
      <img
        ref={portraitRef}
        className="personagem-grande"
        src={character.portraitImage}
        alt={`Personagem ${character.name}`}
      />

      <div className="informacoes-personagem">
        <h2 className="nome-personagem">{character.name}</h2>
        <p className="descricao-personagem">{character.description}</p>
        <button
          type="button"
          className="cta-hero"
          onClick={() => onOpenCharacter(character.id, portraitRef.current)}
        >
          Acessar tela do heroi
        </button>
      </div>
    </section>
  );
}
