import "@/styles/_components/_pokemonTypes.scss";

import { PokemonType } from "@/interfaces/PokemonTypesInterface";
import Link from "next/link";

await setTimeout(() => {}, 2000);

const pokemonTypes = await fetch("https://pokeapi.co/api/v2/type", { next: { revalidate: 36000 } })
  .then((res) => res.json())
  .then((data) => data.results)
  .catch((err) => console.log(err));

const PokemonTypes = async () => {
  return (
    <ul className="pokemonTypes">
      {pokemonTypes.map((pokemonType: PokemonType) => (
        <li
          className="pokemonTypes__tag"
          key={pokemonType.name}
        >
          <Link href={`/types/${pokemonType.name}`}>{pokemonType.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PokemonTypes;
