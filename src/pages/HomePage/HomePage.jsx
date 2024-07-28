import { useEffect, useState } from "react";
import { fetchTrendyMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getTrendyMovies = async () => {
      const data = await fetchTrendyMovies();
      setMovies(data);
    };
    getTrendyMovies();
  }, []);

  return <MovieList movies={movies}/>;
}
