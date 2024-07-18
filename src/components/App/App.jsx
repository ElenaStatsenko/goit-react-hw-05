import { Routes, Route } from "react-router-dom";


export const App = () =>{
    return(
        <div>

      <nav className={css.nav}>
        <NavLink to="/" className={}>
          HomePage
        </NavLink>
        <NavLink to="/moviespage" className={}>
        MoviesPage
        </NavLink>
        <NavLink to="/moviedetailspage" className={}>
        MovieDetailsPage
        </NavLink>
        <NavLink to="*" className={}>
        MovieDetailsPage
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/moviespage" element={<MoviesPage/>} />
        <Route path="/moviedetailspage" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage/>} />
        
      </Routes>
    </div>
    )

}