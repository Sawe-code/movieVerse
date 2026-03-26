import Hero from "../components/Hero";

const Home = () => {
  return (
    <main className="pt-20">
        <header>
          <Hero />
        </header>
        <section className="m-6">
          <h2>All Movies</h2>
          <div className="mt-4 border w-[320px] h-[320px] rounded-xl overflow-hidden flex items-center justify-center">
            <img src="/no-movie.png" alt="" />
          </div>
        </section>
      </main>
  )
}

export default Home;