import "@/styles/_components/_pokemonModal.scss";

import { Pokemon } from "@/interfaces/PokemonTypesInterface";
import { useImperativeHandle, useRef } from "react";
import { ModalRef } from "./PokemonCard";
import Image from "next/image";
import ProgressStat from "./ProgressStat";

interface PokemonModalProps {
  pokemon: Pokemon;
  ref: React.RefObject<ModalRef | null>;
}

const PokemonModal = ({ pokemon, ref }: PokemonModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      open() {
        dialogRef.current?.showModal();
      },
      close() {
        dialogRef.current?.close();
      },
    }),
    []
  );
  return (
    <dialog
      onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
      className="pokemonModal"
      ref={dialogRef}
    >
      <div className="pokemonModal__container">
        {pokemon.sprites.other["official-artwork"].front_default && (
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            width={150}
            height={150}
          />
        )}
        <div className="pokemonModal__info">
          <h1>{pokemon.name}</h1>
          <div className="pokemonModal__infoContainer">
            <div className="pokemonModal__stats">
              {pokemon.stats.map((stat) => (
                <ProgressStat
                  key={stat.stat.name}
                  stat={stat}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default PokemonModal;
