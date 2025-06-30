import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieDisplay = ({ query, setQuery }) => {
  /* state for movies */
  const [movies, setMovies] = useState([]);

  /* state for empty search/no movies */
  const [noResults, setNoResults] = useState(false);
  useEffect(() => {
    fetchData();
  }, [query]);
  /* fetch movie data */
  const fetchData = async () => {
    try {
      const search = query.trim().length > 0;
      const searchedData = search
        ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            query
          )}&api_key=39b4b73ef95e1724fc0086030209d22f`
        : `https://api.themoviedb.org/3/movie/popular?api_key=39b4b73ef95e1724fc0086030209d22f`;

      const response = await axios.get(searchedData);
      const results = response.data.results;
      setMovies(results);
      setNoResults(search && results.length === 0); // set true only if searching and results are empty
    } catch (error) {
      console.log("couldn't fetch data", error);
    }
  };
  return (
    <div className="w-full  pt-24 bg-mainColor-950 ">
      {noResults && (
        <div className="flex justify-center h-screen items-center">
          <p className="text-amber-100 text-2xl">
            No such movie available,{" "}
            <span className="text-amber-500 italic">mbok fiak check!</span>
          </p>
        </div>
      )}
      <div className="card_container text-white grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-8  p-4 lg:p-8">
        {!noResults &&
          movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <div
                  className="card  overflow-hidden rounded-lg hover:scale-95 transition-all duration-300 hover:bg-neutral-700 hover:p-2"
                  key={movie.id}
                >
                  <div className="img_div aspect-[2/3]">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      className="w-full rounded-lg"
                      alt={movie.title}
                    />
                  </div>
                  <h4 className="text-center mt-2">{movie.title}</h4>
                  <p className="text-center mt-2 text-amber-200">
                    {movie.release_date}
                  </p>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default MovieDisplay;
