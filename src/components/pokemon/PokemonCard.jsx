import { Link } from "react-router-dom";
import { typeColors } from "../../utils/typeColors";
import { typeBackgrounds } from "../../utils/typesbackground";
import { formatPokemonName } from "../../utils/formatPokemonNames";

function PokemonCard({ pokemon }) {
  const mainType = pokemon.types[0];

  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="
                group
                rounded-3xl
                overflow-hidden
                bg-white
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
            "
    >
      <div
        className={`
                    bg-gradient-to-br
                    ${typeBackgrounds[mainType]}
                    h-52
                    flex
                    items-center
                    justify-center
                    relative
                `}
      >
        <span className="absolute top-4 right-4 text-white/70 font-bold text-xl">
          #{String(pokemon.id).padStart(3, "0")}
        </span>

        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="
                        w-40
                        h-40
                        object-contain
                        transition-transform
                        duration-300
                        group-hover:scale-110
                    "
        />
      </div>

      <div className="p-5">
        <h2 className="text-2xl font-bold text-slate-800 text-center">
          {formatPokemonName(pokemon.name)}
        </h2>

        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className={`
                                ${typeColors[type]}
                                px-3
                                py-1
                                rounded-full
                                text-xs
                                font-semibold
                                shadow-sm
                            `}
            >
              {formatPokemonName(type)}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default PokemonCard;
