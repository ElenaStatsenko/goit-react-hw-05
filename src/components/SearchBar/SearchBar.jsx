import { useEffect, useState } from "react";
import { fetchSearchMovie } from "../../api";
import { NavLink } from "react-router-dom";

export default function SearchBar() {
  const [searchMovie, setSearchMovie] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.elements.topic.value);
    console.log(setSearchQuery);
  };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    const getSearchMovie = async () => {
      const data = await fetchSearchMovie(searchQuery);
      setSearchMovie(data);
    };

    getSearchMovie();
  }, [searchQuery, setSearchMovie]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search images and photos"
          name="topic"
        />
        <button type="submit">Search</button>
      </form>
      {searchMovie ? (
        <ul>
          {searchMovie.map(({ id, title }) => (
            <li key={id}>
            <NavLink to={`/moviedetailspage/${id}`}>
            {title}
            </NavLink>
          </li>
          ))}
        </ul>
      ) : (
        <div>Нет совпадений</div>
      )}
    </div>
  );
}
