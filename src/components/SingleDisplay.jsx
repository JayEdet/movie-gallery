import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleDisplay = () => {
  /* movies id */
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function fetchMovie() {
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=39b4b73ef95e1724fc0086030209d22f`;
        const res = await axios.get(url);

        setMovie(res.data);
      } catch (err) {
        console.log("couldn't fetch", err);
      }
    }
    fetchMovie();
  }, [id]);

  /* download image logic */
  const handleDownload = async () => {
    try {
      const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      // Fetch the image as a blob
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create an anchor and click it to download
      const link = document.createElement("a");
      link.href = url;
      link.download = `${movie.title
        .replace(/[^a-z0-9]/gi, "_")
        .toLowerCase()}_poster.jpg`; // sanitized filename
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the image", error);
    }
  };

  if (!movie) return <p className="text-white p-4">Loading...</p>;

  return (
    <div className="flex px-4 py-16 md:p-16 lg:p-24 items-center text-white bg-mainColor-950 w-full h-full md:h-screen overflow-hidden">
      <div className="card md:flex gap-8 w-full overflow-hidden">
        <div className="img_div rounded-lg overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            className="w-full"
            alt=""
          />
        </div>
        <div className="description w-full pt-8 lg:pt-24 lg:w-[700px]">
          <h3 className="capitalize description_font ">{movie.title}</h3>
          <p className=" mt-1 text-amber-200">{movie.release_date}</p>
          <p className=" mt-2 text-amber-100 w-full">{movie.overview}</p>
          <p className=" mt-4 text-orange-600 w-full text-2xl cursor-pointer hover:text-orange-700 transition-colors duration-300">
            Watch trailer
          </p>
          <button
            className="p-4 rounded-md text-amber-100 mt-4 cursor-pointer bg-lime-600 hover:bg-lime-800 hover:text-white transition-colors duration-300"
            onClick={handleDownload}
          >
            Click here to download
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleDisplay;
