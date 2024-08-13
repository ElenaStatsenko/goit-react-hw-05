import {useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
  return (
    <div>
      
      <SearchBar setMovies={setMovies}  />
      <MovieList movies={movies}/>
      
    </div>
  );
}
