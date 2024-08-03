import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../../api";
import { useParams } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";

export default function MovieDetailsPage() {
  const { id } = useParams();

  const [moviesDetails, setMoviesDetails] = useState(null);
  useEffect(() => {
    const getMoviesDetais = async () => {
      const data = await fetchMovieDetails(id);
      setMoviesDetails(data);
    };
    getMoviesDetais();
  }, [id]);
  return (
    <div>
      {moviesDetails ? (
        <div>
          <h1>{moviesDetails.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${moviesDetails.backdrop_path}`}
          />
          <p>Overview:{moviesDetails.overview}</p>
          <p>
            User score:{" "}
            {(moviesDetails.popularity / moviesDetails.vote_count).toFixed(2)}%
          </p>
          <p>Genres:{moviesDetails.genres.map((genre) => genre.name)}</p>
          <nav>
            <NavLink to="cast">Хрень</NavLink>
            <NavLink to="reviews">Отзывы</NavLink>
          </nav>
          <Outlet />
        </div>
      ) : (
        <div>Нет данных о фильме</div>
      )}
    </div>
  );
}
