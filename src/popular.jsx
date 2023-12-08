export let popular =[]
 const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWVmYTExOGExNzQwMzZkZTFhYjVlODYwYjdlMzViMiIsInN1YiI6IjY1NzEyNDc4YjA0NjA1MDExZDcyMmVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiGZd5g4nlw3bhAOPTUNySIgFHAR29JMEXufvWewCsU'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => popular=(response.results))
  .catch(err => console.error(err));