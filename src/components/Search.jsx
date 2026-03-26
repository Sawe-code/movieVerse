import React from "react";
import { useState } from "react"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };
  return (
    <form className="flex items-center gap-3 form-input" onClick={handleSubmit}>
      <img src="/search.svg" alt="search-icon" className="object-cover" />
      <label htmlFor="Text"></label>
      <input type="text"
       placeholder="Search through a thousand of movies..." 
       name="movie" 
       required 
       value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
       className="w-full outline-none"
       />
      {/* <button type="submit">Search</button> */}
    </form>
  );
};

export default Search;
