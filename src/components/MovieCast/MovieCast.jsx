import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../api";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const { id } = useParams();

  const [moviesCredit, setMoviesCredit] = useState(null);

  useEffect(() => {
    const getMoviesCast = async () => {
      const data = await fetchMovieCast(id);
      setMoviesCredit(data.cast);
      console.log(data.cast)
    };
    getMoviesCast();
  }, [id]);
console.log(moviesCredit)
  return (
    <>
      {moviesCredit ? (
        <ul>
          {moviesCredit.map(({ id, name, profile_path, character, known_for_department }) => (
            <li key={id}>
              
              <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} />
              <p>{name}</p>
              <p>{character}</p>
              <p>{known_for_department}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Нет данных об актерах</div>
      )}
    </>
  );
}
