import PokemonList from "@/components/PokemonList";

const fetchType = async (name: string) => {
  const results = await fetch(`https://pokeapi.co/api/v2/type/${name}`, { next: { revalidate: 36000 } })
    .then((res) => res.json())
    .then((data) => data.pokemon)
    .catch(() => null);

  if (!results) return;

  const resultsData = await Promise.all(
    results.map(
      async (pokemon: {
        pokemon: {
          name: string;
          url: string;
        };
      }) => {
        const pokemonData = await fetch(pokemon.pokemon.url, { next: { revalidate: 36000 } })
          .then((res) => res.json())
          .then((data) => data)
          .catch(() => null);

        return {
          pokemon: pokemonData,
          url: pokemon.pokemon.url,
        };
      }
    )
  );

  return resultsData;
};

const TypePage = async ({ params }: { params: Promise<{ typeName: string }> }) => {
  const { typeName } = await params;
  const data = await fetchType(typeName);

  return (
    <div>
      <h1>
        Results for type: <span>{typeName}</span>
        {!data && <p>Something went wrong!...</p>}
      </h1>
      {data && data.length > 0 && <PokemonList data={data} />}
    </div>
  );
};

export default TypePage;
