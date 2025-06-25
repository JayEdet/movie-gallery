import Search from "./Search";
import { useLocation } from "react-router-dom";

import { useContext } from "react";
/* import { favoriteContext } from "./FavoriteProvider"; */

/* images */
import logo from "/movie.png";

/* const { favNumber } = useContext(FavoriteProvider); */
const Header = ({ searchInput, setSearchInput, setQuery }) => {
  const location = useLocation();
  const showCase = location.pathname === "/";

  return (
    <div className="w-full fixed space-y-4 top-0 grid grid-cols-2 sm:grid-rows-2 left-0 md:grid-cols-3 md:grid-rows-1 p-4 lg:px-8 bg-mainColor-950/95 z-50">
      <div className="flex gap-1">
        <span className="w-10 overflow-hidden rounded-4xl shadow-lg">
          <img src={logo} className="w-full" alt="movie gallery" />
        </span>
        <h6 className="logo_font bg-linear-to-r from-teal-200 via-teal-600 to-teal-700 bg-clip-text text-transparent">
          Movie Gallery
        </h6>
      </div>
      {/* Add to Favorite */}
      {/*  <div className="favorite_movies flex items-center h-full bg-gray-800 rounded-xl px-2 w-fit">
        <span className="text-green-300"></span>
        <h3 className="text-white p-1">Favorite movies</h3>
      </div> */}
      {showCase && (
        <div className="flex items-center ">
          <Search
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setQuery={setQuery}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
