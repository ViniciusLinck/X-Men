export function CharacterCard({ character, isSelected, onSelect, onOpen }) {
  return (
    <li className={`personagem home-card-anim ${isSelected ? "selecionado" : ""}`}>
      <button
        type="button"
        className="card-image-button"
        onMouseEnter={() => onSelect(character.id)}
        onFocus={() => onSelect(character.id)}
        onClick={(event) => onOpen(character.id, event.currentTarget)}
        aria-label={`Abrir tela de ${character.name}`}
        aria-pressed={isSelected}
      >
        <img src={character.cardImage} alt={`Personagem ${character.name}`} />
      </button>

      <button
        type="button"
        className="card-link"
        onClick={(event) => onOpen(character.id, event.currentTarget)}
      >
        Ver perfil
      </button>
    </li>
  );
}
