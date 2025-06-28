// function Pokedex() {
//   const pokedex = [
//     { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
//     { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
//     { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
//     { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
//     { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
//     { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
//     { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
//     { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
//   ];

//   const randNum = Math.floor(Math.random() * 8);

//   return (
//     <div className="pokedex">
//       <Pokecard
//         id={pokedex[randNum].id}
//         name={pokedex[randNum].name}
//         type={pokedex[randNum].type}
//         base_experience={pokedex[randNum].base_experience}
//       />
//     </div>
//   );
// }
// return (
//   <div className="pokedex">
//     <ul className="pokemon-grid">
//       {pokedex.map((item, index) => (
//         <li key={index} className="pokemon-item">
//           <Pokecard
//             id={item.id}
//             name={item.name}
//             type={item.type}
//             base_experience={item.base_experience}
//           />
//         </li>
//       ))}
//     </ul>
//   </div>
// );

function Pokedex({ pokemon, isWinner }) {
  const totalExperience = pokemon.reduce(
    (total, pokemon) => total + pokemon.base_experience,
    0
  );

  return (
    <div className="pokedex">
      <h2>Total Experience: {totalExperience}</h2>
      <div className="pokemon-grid">
        {pokemon.map((p) => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            base_experience={p.base_experience}
          />
        ))}
      </div>
      {isWinner && <h2 className="winner">THIS HAND WINS!</h2>}
    </div>
  );
}
