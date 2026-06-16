import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
