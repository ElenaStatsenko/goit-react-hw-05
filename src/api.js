import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmNkNGNiOGM3MmY4ZjVkZjY4ZDk4MjVmNDg4NTQ3MyIsIm5iZiI6MTcyMjA4NTM4NS4xMjM1NzcsInN1YiI6IjY2YTRlNmIwNTFmZGFjNWM4MzBjY2IyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TYW95rZcq0C3vxcAAT4mUNV0w2TrYd8CmpufefkmmPQ",
  },
};

export const fetchTrendyMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const response = await axios.get(url, options);
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const response = await axios.get(url, options);
  return response.data;
};
export const fetchMovieCast = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;

  const response = await axios.get(url, options);

  return response.data;
};
export const fetchMovieRewiew = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;

  const response = await axios.get(url, options);
  return response.data.results;
};

export const fetchSearchMovie= async (searchQuery) => {

  console.log(searchQuery)
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;

  const response = await axios.get(url, options);
  
  return response.data.results;
};