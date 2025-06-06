"use client";

import "@/styles/_components/_pokemonList.scss";
import { Pokemon } from "@/interfaces/PokemonTypesInterface";
import PokemonCard from "./PokemonCard";
import useSearchBarStore from "@/stores/SearchBarStore";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Data {
  pokemon: Pokemon;
  url: string;
}

interface PokemonListProps {
  data: Data[];
}

const PokemonList = ({ data }: PokemonListProps) => {
  const query = useSearchBarStore((state) => state.query);
  const [page, setPage] = useState(1);

  const filteredArray = data.filter((item) => item.pokemon.name.includes(query));
  const pages = Math.round(data.length / 20);
  const pokemonArray = query ? filteredArray : filteredArray.slice((page - 1) * 20, page * 20);

  return (
    <div className="pokemonList">
      <ul className="pokemonList__cards">
        {pokemonArray.map((item) => (
          <li
            key={item.url}
            className="pokemonList__item"
          >
            <PokemonCard pokemon={item.pokemon} />
          </li>
        ))}
      </ul>
      {!query && pages > 1 && (
        <div className="pokemonList__controls">
          <button
            className="pokemonList__controlButton"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <ArrowLeft />
          </button>

          <p>
            {page} / {pages}
          </p>

          <button
            className="pokemonList__controlButton"
            disabled={page === pages}
            onClick={() => setPage(page + 1)}
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default PokemonList;
