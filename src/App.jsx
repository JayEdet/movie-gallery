import { useState } from "react";
import Header from "./components/Header";
import MovieDisplay from "./components/MovieDisplay";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleDisplay from "./components/SingleDisplay";
import Footer from "./components/Footer";
/* import { FavoriteProvider } from "./components/FavoriteProvider"; */
const App = () => {
  /* for input update */
  const [searchInput, setSearchInput] = useState("");
  /* for querying movies from TMDB */
  const [query, setQuery] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Header
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setQuery={setQuery}
        />
        <Routes>
          <Route
            path="/"
            element={<MovieDisplay query={query} setQuery={setQuery} />}
          />
          <Route path="/movie/:id" element={<SingleDisplay />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
