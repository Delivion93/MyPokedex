import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <h1 className="text-8xl font-bold text-red-600">404</h1>

      <h2 className="mt-4 text-3xl font-semibold text-slate-800">
        Oops! Pokémon not found.
      </h2>

      <p className="mt-3 max-w-md text-slate-500">
        It looks like you wandered into tall grass... but there’s nothing here.
      </p>

      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="Pikachu"
        className="w-40 h-40 mt-8 animate-bounce"
      />

      <Link
        to="/"
        className="
                    mt-8
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    font-medium
                    px-6
                    py-3
                    rounded-xl
                    transition-colors
                "
      >
        Return to Pokédex
      </Link>
    </div>
  );
}

export default NotFound;
