function MovieCard({ image, title }) {
  return (
    <div className="group min-w-[180px] cursor-pointer md:min-w-[220px]">
      <div className="relative overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="h-[260px] w-full object-cover transition duration-300 group-hover:scale-110 md:h-[320px]"
        />

        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="p-4">
            <p className="font-semibold text-white">
              {title}
            </p>

            <p className="mt-1 text-xs text-gray-300">
              ▶ Play Now
            </p>
          </div>
        </div>
      </div>

      <h3 className="mt-2 text-sm font-semibold text-gray-200">
        {title}
      </h3>
    </div>
  );
}

export default MovieCard;