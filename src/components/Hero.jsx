function Hero() {
  return (
    <section
      className="relative flex min-h-[650px] items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero content */}
      <div className="relative z-10 max-w-2xl px-6 pt-20 md:px-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-300">
          Netflix Original
        </p>

        <h1 className="mb-4 text-5xl font-bold md:text-7xl">
          The Last Journey
        </h1>

        <p className="mb-6 max-w-xl text-base leading-7 text-gray-200 md:text-lg">
          A young hero embarks on an unforgettable journey through a world
          filled with danger, mystery and unexpected friendships.
        </p>

        <div className="mb-6 flex items-center gap-3 text-sm text-gray-300">
          <span>2026</span>
          <span>•</span>
          <span>16+</span>
          <span>•</span>
          <span>2h 15m</span>
          <span>•</span>
          <span>Adventure</span>
        </div>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-300">
            ▶ Play
          </button>

          <button className="flex items-center gap-2 rounded bg-gray-500/70 px-6 py-3 font-semibold text-white transition hover:bg-gray-500">
            ⓘ More Info
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#141414] to-transparent"></div>
    </section>
  );
}

export default Hero;