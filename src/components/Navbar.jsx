function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-5 md:px-12">
      <h1 className="text-3xl font-bold text-red-600">
        NETFLIX
      </h1>

      <div className="hidden items-center gap-6 text-sm md:flex">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>

        <a href="#trending" className="hover:text-gray-300">
          Trending
        </a>

        <a href="#popular" className="hover:text-gray-300">
          Popular
        </a>

        <a href="#video" className="hover:text-gray-300">
          Trailer
        </a>
      </div>

      <button className="rounded bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-700">
        Sign In
      </button>
    </nav>
  );
}

export default Navbar;