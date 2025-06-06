import PokemonList from "@/components/PokemonList";

const fetchType = async (name: string) => {
  try {
    const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, { next: { revalidate: 36000 } });
    const data = await results.json();
    return [{ pokemon: data, url: data.url }];
  } catch (err) {
    console.log(err);
    return;
  }
};

const SearchPage = async ({ searchParams }: { searchParams: Promise<{ q: string }> }) => {
  const { q: query } = await searchParams;
  const data = await fetchType(query);

  if (data?.length === 0)
    return (
      <div>
        <h1>Results for {`"${query}"`}</h1>

        <h2>Pokemon not found!</h2>
      </div>
    );

  return (
    <div>
      <h1>Results for {`"${query}"`}</h1>
      {data && <PokemonList data={data} />}
    </div>
  );
};

export default SearchPage;
