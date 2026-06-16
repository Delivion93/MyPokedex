import { Link } from "react-router-dom";
import { typeColors } from "../../utils/typeColors";
import { formatPokemonName } from "../../utils/formatPokemonNames";

function PokemonCard({ pokemon }) {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="
                group
                bg-white
                rounded-2xl
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                overflow-hidden
                p-6
                flex
                flex-col
                items-center
            "
    >
      <span className="self-end text-slate-400 font-semibold">
        #{String(pokemon.id).padStart(3, "0")}
      </span>

      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="
                    w-36
                    h-36
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-110
                "
      />

      <h2 className="text-2xl font-semibold mt-3 text-slate-800">
        {formatPokemonName(pokemon.name)}
      </h2>

      <div className="flex gap-2 mt-4 flex-wrap justify-center">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className={`
                            ${typeColors[type]}
                            px-3
                            py-1
                            rounded-full
                            text-sm
                            font-medium
                        `}
          >
            {formatPokemonName(type)}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default PokemonCard;
