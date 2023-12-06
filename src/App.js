import "./styles/App.css";
import { WatchedData, MovieData } from "./data";
import { Header } from "./jsx/header.jsx";
import { SerchedMovies } from "./jsx/searche.jsx";
import { WatchedMovies } from "./jsx/watched.jsx";
import { Footer } from "./jsx/footer.jsx";
import { useState } from "react";
function App() {
  const [toSearch, setToSearch] = useState("");
  const [finded, setFinded] = useState([]);
  function findFilm() {
    MovieData.map(
      (movie) =>
        toSearch.length > 2 &&
        !finded.find((e) => e.imdbID === movie.imdbID) &&
        movie.Title.toLowerCase().includes(toSearch.toLowerCase()) &&
        setFinded([...finded, movie])
    );
    toSearch.length < 2 && setFinded([]);
  }
  return (
    <div className="flex flex-col h-full">
      <Header
        toSearch={toSearch}
        onFined={findFilm}
        setToSearch={setToSearch}
      />
      <div className="flex flex-col  md:flex-row md:justify-center md:items-start justify-center items-center">
        <div className="rounded-xl rounded-tr-none ms-1 mt-1 me-0 mb-1 w-[98%] h-[80vh]  md:w-[49%] p-2 flex-col flex-wrap flex text-white bg-bleuM-100  ">
          <SerchedMovies toSearch={toSearch} finded={finded} />
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
