import PokemonGrid from "../components/pokemon/PokemonGrid";
import { mockPokemons } from "../data/mockPokemons";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PokemonGrid pokemons={mockPokemons} />
    </div>
  );
}

export default Home;
