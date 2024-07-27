import { useEffect, useState } from "react";
import { fetchTrendyMovies } from "../../api";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getTrendyMovies = async () => {
      const data = await fetchTrendyMovies();
      setMovies(data);
    };
    getTrendyMovies();
  }, []);

  return <div>Home</div>;
}
