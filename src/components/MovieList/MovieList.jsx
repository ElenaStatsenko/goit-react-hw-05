import { NavLink } from "react-router-dom";
export default function MovieList({movies}) {
    return (
        <div>
            <h1>Trending today</h1>
            <ul>
                {movies.map(({ id, title }) => {
        return (
             <li key={id}>
            <NavLink to={`/moviedetailspage/${id}`}>
            {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
        </div>
    )
}
