import "./styles/App.css";
import { WatchedData } from "./data";
import { Header } from "./jsx/header.jsx";
import { SerchedMovies } from "./jsx/searche.jsx";
import { WatchedMovies } from "./jsx/watched.jsx";
import { Footer } from "./jsx/footer.jsx";
import { useState } from "react";
function App() {
  const [toSearch, setToSearch] = useState("");
  const [MovieData, setMovieData] = useState([]);

  // const [finded, setFinded] = useState([]);
  // function findFilm() {
  //   MovieData.map(
  //     (movie) =>
  //       toSearch.length >= 1 &&
  //       !finded.find(e=>e.id===movie.id)&&
  //       movie.original_title.toLowerCase().includes(toSearch.toLowerCase()) &&
  //       setFinded([...finded, movie])
  //   );
  //   toSearch.length < 2 && setFinded([]);
  // }
  function getData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWVmYTExOGExNzQwMzZkZTFhYjVlODYwYjdlMzViMiIsInN1YiI6IjY1NzEyNDc4YjA0NjA1MDExZDcyMmVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiGZd5g4nlw3bhAOPTUNySIgFHAR29JMEXufvWewCsU",
      },
    };
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${toSearch}&include_adult=false&language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovieData(response.results))
      .catch((err) => console.error(err)) && console.log(MovieData);
  }
  return (
    <div className="flex flex-col h-full">
      <Header
        toSearch={toSearch}
        setMovieData={setMovieData}
        finded={MovieData}
        getData={getData}
        setToSearch={setToSearch}
      />
      <div className="flex flex-col  md:flex-row md:justify-center md:items-start justify-center items-center">
        <div className="rounded-xl rounded-tr-none ms-1 mt-1 me-0 mb-1 w-[98%] h-[80vh]  md:w-[49%] p-2 flex-col flex-wrap flex text-white bg-bleuM-100  ">
          <SerchedMovies toSearch={toSearch} finded={MovieData} />
        </div>
        <div className=" rounded-xl rounded-tl-none ms-1 mt-1 me-0 mb-1 w-[98%] h-[80vh]  md:w-[49%] p-2 flex-col flex-wrap flex text-white bg-bleuM-100">
          <WatchedMovies watched={WatchedData} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
