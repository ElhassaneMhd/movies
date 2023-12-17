export const getPopularMovies = async (
  setonLoad,
  onLoad,
  seterrOnLoad,
  setpopMovies,
  page = 1
) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWVmYTExOGExNzQwMzZkZTFhYjVlODYwYjdlMzViMiIsInN1YiI6IjY1NzEyNDc4YjA0NjA1MDExZDcyMmVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiGZd5g4nlw3bhAOPTUNySIgFHAR29JMEXufvWewCsU",
    },
  };
  setonLoad({ ...onLoad, searched: true });
  console.log(onLoad);
  seterrOnLoad(false);
  await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
    options
  )
    .then((response) => response.json())
    .then((response) => setpopMovies(response.results))
    .then(() => setonLoad({ ...onLoad, searched: false }))
    .catch(() => seterrOnLoad(true));
};

export const getTopRatedMovies = async (
  setonLoad,
  onLoad,
  seterrOnLoad,
  setpopMovies,
  page = 1
) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWVmYTExOGExNzQwMzZkZTFhYjVlODYwYjdlMzViMiIsInN1YiI6IjY1NzEyNDc4YjA0NjA1MDExZDcyMmVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiGZd5g4nlw3bhAOPTUNySIgFHAR29JMEXufvWewCsU",
    },
  };
  setonLoad({ ...onLoad, searched: true });
  seterrOnLoad(false);
  await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
    options
  )
    .then((response) => response.json())
    .then((response) => setpopMovies(response.results))
    .then(() => setonLoad({ ...onLoad, searched: false }))
    .catch(() => seterrOnLoad(true));
};
export const getFirstTopRatedMovies = async (setpopMovies) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWVmYTExOGExNzQwMzZkZTFhYjVlODYwYjdlMzViMiIsInN1YiI6IjY1NzEyNDc4YjA0NjA1MDExZDcyMmVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiGZd5g4nlw3bhAOPTUNySIgFHAR29JMEXufvWewCsU",
    },
  };
  await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => setpopMovies(response.results))
    .catch((err) => console.log(err));
};
export const getDataByName = async (
  setonLoad,
  onLoad,
  seterrOnLoad,
  toSearch,
  setToSearch
) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWVmYTExOGExNzQwMzZkZTFhYjVlODYwYjdlMzViMiIsInN1YiI6IjY1NzEyNDc4YjA0NjA1MDExZDcyMmVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiGZd5g4nlw3bhAOPTUNySIgFHAR29JMEXufvWewCsU",
    },
  };
  setonLoad({ ...onLoad, searched: true });
  seterrOnLoad(false);
  await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${toSearch}&include_adult=false&language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((response) => setToSearch(response.results))
    .then(() => setonLoad({ ...onLoad, searched: false }))
    .catch(() => seterrOnLoad(true));
};
export const getUpcoming = async (
  setonLoad,
  onLoad,
  seterrOnLoad,
  setUpcoming,
  page = 1
) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWVmYTExOGExNzQwMzZkZTFhYjVlODYwYjdlMzViMiIsInN1YiI6IjY1NzEyNDc4YjA0NjA1MDExZDcyMmVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiGZd5g4nlw3bhAOPTUNySIgFHAR29JMEXufvWewCsU",
    },
  };
  setonLoad({ ...onLoad, searched: true });
  seterrOnLoad(false);
  await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
    options
  )
    .then((response) => response.json())
    .then((response) => setUpcoming(response.results))
    .then(() => setonLoad({ ...onLoad, searched: false }))
    .catch(() => seterrOnLoad(true));
};
export const getTranding = async (
  setonLoad,
  onLoad,
  seterrOnLoad,
  setTranding
) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWVmYTExOGExNzQwMzZkZTFhYjVlODYwYjdlMzViMiIsInN1YiI6IjY1NzEyNDc4YjA0NjA1MDExZDcyMmVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiGZd5g4nlw3bhAOPTUNySIgFHAR29JMEXufvWewCsU",
    },
  };
  setonLoad({ ...onLoad, searched: true });
  seterrOnLoad(false);
  fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  )
    .then((response) => response.json())
    .then((response) => setTranding(response.results))
    .then(() => setonLoad({ ...onLoad, searched: false }))
    .catch(() => seterrOnLoad(true));
};
export const getMovieDetails = async (
  setonLoad,
  onLoad,
  seterrOnLoad,
  id,
  setdetailedMovie
) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWVmYTExOGExNzQwMzZkZTFhYjVlODYwYjdlMzViMiIsInN1YiI6IjY1NzEyNDc4YjA0NjA1MDExZDcyMmVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiGZd5g4nlw3bhAOPTUNySIgFHAR29JMEXufvWewCsU",
    },
  };
  setonLoad({ ...onLoad, detailed: true });
  seterrOnLoad(false);
  fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    .then((response) => response.json())
    .then((response) => setdetailedMovie(response))
    .then(() => setonLoad({ ...onLoad, detailed: false }))
    .catch(() => seterrOnLoad(true));
};
