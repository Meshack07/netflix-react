import MovieCard from "./MovieCard";

function MovieRow({ title, movies, id }) {
  return (
    <section id={id} className="px-6 py-8 md:px-12">
      <h2 className="mb-5 text-2xl font-bold md:text-3xl">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            image={movie.image}
            title={movie.title}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieRow;