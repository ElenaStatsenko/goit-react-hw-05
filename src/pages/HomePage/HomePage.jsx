import { useEffect, useState, } from "react";
import { useLocation} from "react-router-dom";
import { fetchTrendyMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  
  
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
   
    const getTrendyMovies = async () => {
      const data = await fetchTrendyMovies();
      setMovies(data);
    };
    getTrendyMovies();
  }, []);

  return <div>
     <h1>Trending today</h1>
     <MovieList movies={movies} />;
  </div>
 
}
