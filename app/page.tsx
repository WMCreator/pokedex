import "@/styles/_pages/_mainPage.scss";

import PokemonTypes from "@/components/PokemonTypes";
import PokemonTypesSkeleton from "@/skeletons/PokemonTypesSkeleton";
import { Suspense } from "react";
import SearchBar from "@/components/SearchBar";

const MainPage = () => {
  return (
    <section className="mainPage">
      <div className="mainPage__container">
        <h1>Pókedex</h1>
        <h2>The best webpage in the world to find your pokemon</h2>

        <SearchBar className="mainPage__search" />

        <Suspense fallback={<PokemonTypesSkeleton />}>
          <PokemonTypes />
        </Suspense>
      </div>
    </section>
  );
};

export default MainPage;
