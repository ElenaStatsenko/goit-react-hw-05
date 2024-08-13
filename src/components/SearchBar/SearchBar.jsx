import { useEffect } from "react";
import { fetchSearchMovie } from "../../api";
import {  useSearchParams, } from "react-router-dom";

export default function SearchBar({setMovies}) {
 
  //   сохраняем список фильмов в состоянии
  const [searchParams, setSearchParams] = useSearchParams();
  // const location = useLocation();
  const query = searchParams.get("query") ?? "";
  console.log(query);

  useEffect(() => {
    if (query === "") {
      return;
    }
    const getSearchMovie = async () => {
      const data = await fetchSearchMovie(query);
      setMovies(data);
    };

    getSearchMovie();
  }, [query, setMovies]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newQuery = event.target.elements.topic.value;
    setSearchParams({ query: newQuery });
  };
  return (
    
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search images and photos"
          name="topic"
        />
        <button type="submit">Search</button>
      </form>
    
   
  );
}
