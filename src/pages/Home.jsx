import PokemonGrid from "../components/pokemon/PokemonGrid";
import { mockPokemons } from "../data/mockPokemons";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <PokemonGrid pokemons={mockPokemons} />
    </div>
  );
}

export default Home;
