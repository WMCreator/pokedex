import PokemonCardSkeleton from "@/skeletons/PokemonCardSkeleton";

const LoadingPage = () => {
  return (
    <div>
      <h1 className="skeleton skeleton--sm-text"></h1>
      <div className="pokemonList">
        <ul className="pokemonList__cards">
          {Array.from({ length: 10 }).map((_, index) => (
            <li
              key={index}
              className="pokemonList__item"
            >
              <PokemonCardSkeleton />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LoadingPage;
