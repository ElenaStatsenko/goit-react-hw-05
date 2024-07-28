import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import Navigation from "../Navigation/Navigation";

export const App = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/moviespage" element={<MoviesPage />} />
        <Route path="/moviedetailspage/:id" element={<MovieDetailsPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
