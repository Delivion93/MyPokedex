import PokemonGrid from "../components/pokemon/PokemonGrid";
import { mockPokemons } from "../data/mockPokemons";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center py-8 px-4 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight animate-pulse">
        Naila, lo logré, ahora tenemos nuestra propia página web de Pokémon.
      </h1>
      <PokemonGrid pokemons={mockPokemons} />
    </div>
  );
}

export default Home;
