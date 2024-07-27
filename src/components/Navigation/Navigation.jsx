
import { NavLink } from "react-router-dom";
 export default function Navigation() {
    return (
        <nav >
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="moviespage" >
        Movies
        </NavLink>
        {/* <NavLink to="/moviedetailspage">
        MovieDetailsPage
        </NavLink>
        <NavLink to="*">
        MovieDetailsPage
        </NavLink> */}
      </nav>
    )
  }
  