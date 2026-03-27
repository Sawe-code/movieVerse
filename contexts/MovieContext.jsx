import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const storedFavs = localStorage.getItem("favorites");
      const parsed = storedFavs ? JSON.parse(storedFavs) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const AddToFavorites = (movie) => {
    setFavorites((prev) => {
      const exists = prev.some((m) => m.id === movie.id);
      if (exists) return prev;
      return [...prev, movie];
    });
  };
  const RemoveFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((m) => m.id !== movieId));
  };

  const toggleFavorites = (movie) => {
    setFavorites((prev) => {
      const exists = prev.some((m) => m.id === movie.id);
      if (exists) {
        // remove from favorites
        return prev.filter((m) => m.id !== movie.id);
      } else {
        // add to favorites
        return [...prev, movie];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <MovieContext.Provider
      value={{
        AddToFavorites,
        RemoveFromFavorites,
        toggleFavorites,
        favorites,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
