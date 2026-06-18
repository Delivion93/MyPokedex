import { useState, useEffect } from "react";

import PokemonGrid from "../components/pokemon/PokemonGrid";
import Pagination from "../components/common/Pagination";

import { getPokemons } from "../api/pokemonApi";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);

  async function loadPokemons() {
    const limit = 20;
    const offset = (currentPage - 1) * limit;

    const data = await getPokemons(limit, offset);

    const detailedPokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);

        const details = await response.json();

        return {
          id: details.id,
          name: details.name,

          image: details.sprites.other["official-artwork"].front_default,

          types: details.types.map((type) => type.type.name),
        };
      }),
    );

    setPokemons(detailedPokemons);

    setTotalPages(Math.ceil(data.count / limit));
  }

  useEffect(() => {
    loadPokemons();
  }, [currentPage]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <PokemonGrid pokemons={pokemons} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Home;
