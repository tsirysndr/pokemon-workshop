import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./Pages/Search";
import PokemonDetailsPage from "./Pages/PokemonDetails/PokemonDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
