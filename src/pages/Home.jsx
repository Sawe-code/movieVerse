import Hero from "../components/Hero.jsx";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async (query) => {
    setLoading(true);
    setError("");
    try {
      const endpoint = query
        ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
        : `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
      const res = await fetch(endpoint);
      if (!res.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await res.json();
      if (!data.results || data.results.length === 0) {
        setError("No Movies Found");
      }
      setMovies(data.results);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, []);

  return (
    <main className="pt-20 min-h-screen">
      <header>
        <Hero
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          fetchMovies={fetchMovies}
        />
      </header>
      <section className="m-3 max-w-6xl mx-auto">
        <h2 className="text-heading">All Movies</h2>
        {loading && (
          <div className="flex items-center justify-center h-[50vh] gap-2 text-blue-500 text-2xl font-semibold">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
            Loading...
          </div>
        )}

        {!loading && error && (
          <div className="flex items-center justify-center h-[50vh] text-red-500 text-xl font-semibold">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {movies.length === 0 ? (
              <div className="col-span-full flex items-center justify-center h-24 text-gray-500 text-2xl font-semibold">
                No Movies Found
              </div>
            ) : (
              movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
