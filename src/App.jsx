import { useState } from "react";
import Header from "./components/Header";
import MovieDisplay from "./components/MovieDisplay";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleDisplay from "./components/SingleDisplay";
const App = () => {
  /* for input update */
  const [searchInput, setSearchInput] = useState("");
  /* for querying movies from TMDB */
  const [query, setQuery] = useState("");
  return (
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
        <Route
          path="/movie/:id"
          element={<SingleDisplay query={query} setQuery={setQuery} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
