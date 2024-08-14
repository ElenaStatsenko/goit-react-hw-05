import { NavLink, useLocation } from "react-router-dom";
export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={location}>
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
