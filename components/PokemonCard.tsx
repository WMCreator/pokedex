import "@/styles/_components/_pokemonCard.scss";
import { Pokemon } from "@/interfaces/PokemonTypesInterface";
import Image from "next/image";
import PokemonModal from "./PokemonModal";
import { useRef } from "react";

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const modalRef = useRef<ModalRef>(null);

  return (
    <>
      <article
        onClick={() => modalRef.current?.open()}
        className="pokemonCard"
      >
        <strong>{pokemon.name}</strong>

        <div className="pokemonCard__overview">
          <div className="pokemonCard__overviewContainer">
            {pokemon.sprites.other["official-artwork"].front_default && (
              <Image
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon?.name}
                width={150}
                height={150}
              />
            )}
            <div className="pokemonCard__overviewInfo">
              <strong>{pokemon.name}</strong>
            </div>
          </div>
        </div>
      </article>
      <PokemonModal
        ref={modalRef}
        pokemon={pokemon}
      />
    </>
  );
};

export default PokemonCard;
