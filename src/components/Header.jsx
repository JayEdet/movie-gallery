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
    <div className="w-full fixed flex top-0 items-center bg-mainColor-950 z-50">
      {/* Add to Favorite */}
      {/*  <div className="favorite_movies flex items-center h-full bg-gray-800 rounded-xl px-2 w-fit">
        <span className="text-green-300"></span>
        <h3 className="text-white p-1">Favorite movies</h3>
      </div> */}
      {showCase && (
        <div className="md:flex justify-between w-full p-4 md:p-8">
          <div className="flex gap-1">
            <span className="w-10 overflow-hidden rounded shadow-lg">
              <img src={logo} className="w-full" alt="movie gallery" />
            </span>
            <h6 className="logo_font bg-linear-to-r from-teal-200 via-teal-600 to-teal-700 bg-clip-text text-transparent">
              Movie Gallery
            </h6>
          </div>
          <div className="py-4">
            <Search
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              setQuery={setQuery}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
