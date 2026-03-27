import React from "react";
import Search from "./Search";

const Hero = ({ searchTerm, setSearchTerm, fetchMovies}) => {
  return (
    <section>
      <div className="relative h-screen">
        <img
          src="/hero-bg.png"
          alt="hero-bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-center">
          <img
            src="/hero.png"
            alt="hero-image"
            className="w-[320px] md:w-[420px] lg:w-[520px]"
          />
          <h1 className="mt-6 text-4xl md:text-5xl font-bold max-w-3xl">
            Discover Your Next <span>Favorite Movie</span>
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} fetchMovies={fetchMovies} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
