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

    setTotalPages(Math.ceil(data.count / limit));

    console.log(data);
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
