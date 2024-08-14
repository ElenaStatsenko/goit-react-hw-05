import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Navigation from "../Navigation/Navigation";
// import HomePage from "../../pages/HomePage/HomePage";
// import MoviesPage from "../../pages/MoviesPage/MoviesPage";
// import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
// import MovieCast from "../MovieCast/MovieCast";
// import MovieReviews from "../MovieReviews/MovieReviews";
// import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
const Navigation = lazy(() => import("../Navigation/Navigation"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
