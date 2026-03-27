import { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites } = useContext(MovieContext);
  return (
    <div className="mt-20 max-w-6xl mx-auto border border-gray-600 rounded-lg overflow-hidden shadow-xl">
      <h1 className="text-center mt-3">
        Your Movie <span className="text-yellow-500">Picks</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
        {favorites.length === 0 ? (
          <div className="col-span-full text-center h-[50vh] flex items-center justify-center flex-col gap-4">
            <h4 className="text-gray-400 font-extrabold text-3xl max-w-3xl mx-auto">
              No Favorites Movies Yet.Start adding movies you love to see them
              here.
            </h4>
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:opacity-80 hover:scale-[1.05] transition duration-300"
              onClick={() => navigate("/")}
            >
              Browse Movies
            </button>
          </div>
        ) : (
          favorites.map((favorite) => (
            <div key={favorite.id}>
              <MovieCard movie={favorite} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
