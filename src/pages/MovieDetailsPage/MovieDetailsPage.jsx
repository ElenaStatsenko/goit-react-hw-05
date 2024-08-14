import { useEffect, useRef, useState } from "react";
import { Suspense } from "react";
import { fetchMovieDetails } from "../../api";

import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const location = useLocation();
  const backLinkUrl = useRef(location.state ?? "/");
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
      <Link to={backLinkUrl.current}>Go back</Link>
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
            <NavLink to="cast">Актеры</NavLink>
            <NavLink to="reviews">Отзывы</NavLink>
          </nav>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      ) : (
        <div>Нет данных о фильме</div>
      )}
    </div>
  );
}
