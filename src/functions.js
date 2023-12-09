export const getPopularMovies = async (setpopMovies,page=1) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWVmYTExOGExNzQwMzZkZTFhYjVlODYwYjdlMzViMiIsInN1YiI6IjY1NzEyNDc4YjA0NjA1MDExZDcyMmVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiGZd5g4nlw3bhAOPTUNySIgFHAR29JMEXufvWewCsU",
    },
  };
  await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
    options
  )
    .then((response) => response.json())
    .then((response) => setpopMovies(response.results))
    .catch((err) => console.error(err));
};
export const getTopRatedMovies = async (setpopMovies,page=1) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWVmYTExOGExNzQwMzZkZTFhYjVlODYwYjdlMzViMiIsInN1YiI6IjY1NzEyNDc4YjA0NjA1MDExZDcyMmVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiGZd5g4nlw3bhAOPTUNySIgFHAR29JMEXufvWewCsU",
    },
  };

  await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
    options
  )
    .then((response) => response.json())
    .then((response) => setpopMovies(response.results))
    .catch((err) => console.error(err));
};
export const getDataByName = async (toSearch, setToSearch) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWVmYTExOGExNzQwMzZkZTFhYjVlODYwYjdlMzViMiIsInN1YiI6IjY1NzEyNDc4YjA0NjA1MDExZDcyMmVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiGZd5g4nlw3bhAOPTUNySIgFHAR29JMEXufvWewCsU",
    },
  };
  await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${toSearch}&include_adult=false&language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((response) => setToSearch(response.results))
    .catch((err) => console.error(err));
}
export const getUpcoming = async (setUpcoming,page) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWVmYTExOGExNzQwMzZkZTFhYjVlODYwYjdlMzViMiIsInN1YiI6IjY1NzEyNDc4YjA0NjA1MDExZDcyMmVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiGZd5g4nlw3bhAOPTUNySIgFHAR29JMEXufvWewCsU",
    },
  };
  await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
    options
  )
    .then((response) => response.json())
    .then((response) => setUpcoming(response.results))
    .catch((err) => console.error(err));
};
export const getTranding = async (setTranding) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWVmYTExOGExNzQwMzZkZTFhYjVlODYwYjdlMzViMiIsInN1YiI6IjY1NzEyNDc4YjA0NjA1MDExZDcyMmVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiGZd5g4nlw3bhAOPTUNySIgFHAR29JMEXufvWewCsU",
    },
  };
  fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  )
    .then((response) => response.json())
    .then((response) => setTranding(response.results))
    .catch((err) => console.error(err));
};