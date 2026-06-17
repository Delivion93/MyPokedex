import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-red-500">
          Pokédex
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-slate-600 hover:text-red-500 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/favorites"
            className="text-slate-600 hover:text-red-500 transition-colors"
          >
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
