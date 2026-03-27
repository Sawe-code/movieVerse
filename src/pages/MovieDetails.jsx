import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MovieDetailsCard from '../components/MovieDetailsCard';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovieDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }
      const data = await response.json();
      console.log(data);
      if (!data) {
        setError("No Movie details found")
      }
      setMovie(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className='h-[50vh] flex items-center justify-center text-blue-600 text-2xl font-semibold'>
        <div className='animate-spin border-t-4 border-blue-500 rounded-full h-8 w-8'></div>
        Loading...
      </div>
    );
  }
  if (error) {
    return <div className='h-[50vh] flex items-center text-red-600 justify-center text-2xl font-bold'>{error}</div>;
  }

  return (
    <div className='pt-20 max-w-7xl mx-auto'>
        <MovieDetailsCard key={movie.id} moviedetail={movie} />
    </div>
  )
}

export default MovieDetails;