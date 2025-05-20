import Search from "./Search";
import { useLocation } from "react-router-dom";

/* images */
import logo from "/movie.png";

const Header = ({ searchInput, setSearchInput, setQuery }) => {
  const location = useLocation();
  const showCase = location.pathname === "/";
  return (
    <div className="w-full fixed space-y-4 top-0 left-0 md:flex items-center justify-between p-4 lg:px-8 bg-mainColor-950/95 z-50">
      <div className="flex gap-1">
        <span className="w-10 overflow-hidden rounded-4xl shadow-lg">
          <img src={logo} className="w-full" alt="movie gallery" />
        </span>
        <h4 className="logo_font bg-linear-to-r from-teal-200 via-teal-600 to-teal-700 bg-clip-text text-transparent">
          Movie Gallery
        </h4>
      </div>
      {showCase && (
        <Search
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setQuery={setQuery}
        />
      )}
    </div>
  );
};

export default Header;
