const Search = ({ searchTerm, setSearchTerm, fetchMovies }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    fetchMovies(searchTerm);
    setSearchTerm("");
  };
  const isFormValid = searchTerm.trim() !== "";
  return (
    <form
      className="flex items-center gap-3 form-input"
      onSubmit={handleSubmit}
    >
      <img src="/search.svg" alt="search-icon" className="object-cover" />
      <label htmlFor="Text"></label>
      <input
        type="text"
        placeholder="Search through a thousand of movies..."
        name="movie"
        required
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full outline-none"
      />
      <button
        type="submit"
        className={`px-2 py-1 rounded-lg text-white font-semibold ${isFormValid ? "bg-yellow-500 hover:opacity-80" : "bg-gray-400 cursor-not-allowed"}`}
        disabled={!isFormValid}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
