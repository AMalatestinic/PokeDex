// function Pokegame() {
//   const deck = [];

//   for (let i = 0; i <= 3; i++) {
//     deck.push(<Pokedex />);
//   }

//   console.log(deck);
//   return (
//     <div key={Math.floor(Math.random() * 100)} className="pokedex">
//       <ul className="pokemon-grid">
//         {deck.map((item, index) => (
//           <li key={index} className="pokemon-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function Pokegame() {
  const pokedex = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];

  const deckOne = [];
  const deckTwo = [...pokedex];

  while (deckOne.length < deckTwo.length) {
    const idx = Math.floor(Math.random() * deckTwo.length);
    deckOne.push(deckTwo.splice(idx, 1)[0]);
  }

  const exp1 = deckOne.reduce((total, p) => total + p.base_experience, 0);
  const exp2 = deckTwo.reduce((total, p) => total + p.base_experience, 0);

  return (
    <div>
      <Pokedex pokemon={deckOne} isWinner={exp1 > exp2} />
      <br />
      <Pokedex pokemon={deckTwo} isWinner={exp2 > exp1} />
    </div>
  );
}
