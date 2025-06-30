import { useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
const Search = ({ searchInput, setSearchInput, setQuery }) => {
  /* handle ENTER CLICKED event */
  function handlePressEnter(e) {
    if (e.key === "Enter") {
      setQuery(searchInput);
    }
  }
  useEffect(() => {
    if (searchInput.trim() === "") {
      setQuery("");
    }
  }, [searchInput, setQuery]);
  /* remove item on click of cancel button */
  function removeInput() {
    setSearchInput("");
    setQuery("");
  }
  return (
    <div className="flex justify-end bg-white rounded-lg overflow-hidden 1p-2 w-full max-w-[400px] p-2">
      <input
        type="text"
        placeholder="Search movie"
        value={searchInput}
        className="bg-white rounded outline-none px-1 w-full "
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handlePressEnter}
      />
      {searchInput.trim().length > 0 && (
        <FaTimes
          className="text-lg cursor-pointer mr-1 text-gray-600"
          onClick={removeInput}
        />
      )}

      <IoSearchSharp
        className="text-xl text-black cursor-pointer"
        onClick={() => {
          setQuery(searchInput);
        }}
      />
    </div>
  );
};

export default Search;
