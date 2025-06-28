function Pokecard({ id = 0, name = "", type = "", base_experience = 0 }) {
  return (
    <div className="pokemon-item">
      <h3>{name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <p>
        Type: {type}
        <br />
        EXP: {base_experience}
      </p>
    </div>
  );
}
