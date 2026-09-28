function VideoSection() {
  return (
    <section id="video" className="px-6 py-12 md:px-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold md:text-3xl">
          Watch the Trailer
        </h2>

        <p className="mt-2 text-gray-400">
          Take a look at what's coming to Netflix.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg bg-black shadow-2xl">
        <video
          className="h-auto w-full"
          controls
          poster="/images/hero.jpg"
        >
          <source src="/video/trailer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default VideoSection;