import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";

const trendingMovies = [
  {
    id: 1,
    title: "Movie One",
    image: "/images/movie1.jpg",
  },
  {
    id: 2,
    title: "Movie Two",
    image: "/images/movie2.jpg",
  },
  {
    id: 3,
    title: "Movie Three",
    image: "/images/movie3.jpg",
  },
  {
    id: 4,
    title: "Movie Four",
    image: "/images/movie4.jpg",
  },
  {
    id: 5,
    title: "Movie Five",
    image: "/images/movie5.jpg",
  },
  {
    id: 6,
    title: "Movie Six",
    image: "/images/movie6.jpg",
  },
];

const popularMovies = [
  {
    id: 1,
    title: "Popular One",
    image: "/images/movie4.jpg",
  },
  {
    id: 2,
    title: "Popular Two",
    image: "/images/movie2.jpg",
  },
  {
    id: 3,
    title: "Popular Three",
    image: "/images/movie6.jpg",
  },
  {
    id: 4,
    title: "Popular Four",
    image: "/images/movie1.jpg",
  },
  {
    id: 5,
    title: "Popular Five",
    image: "/images/movie5.jpg",
  },
  {
    id: 6,
    title: "Popular Six",
    image: "/images/movie3.jpg",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navbar />

      <Hero />

      <MovieRow
        id="trending"
        title="Trending Now"
        movies={trendingMovies}
      />

      <MovieRow
        id="popular"
        title="Popular on Netflix"
        movies={popularMovies}
      />

      <VideoSection />

      <Footer />
    </div>
  );
}

export default App;