import "./styles/App.css";
import {
  getFirstTopRatedMovies,
  getMovieDetails,
  getTranding,
  getPopularMovies,
  getTopRatedMovies,
  getUpcoming,
  getDataByName,
} from "./functions.js";
import { Header } from "./jsx/header.jsx";
import { SerchedMovies } from "./jsx/searche.jsx";
import { DetailedMovie } from "./jsx/DetailedMovie.jsx";
import { WatchedMovies } from "./jsx/watched.jsx";
import { Footer } from "./jsx/footer.jsx";
import { useEffect, useState } from "react";
function App() {
  const [toSearch, setToSearch] = useState("");
  const [findedByName, setFindedByName] = useState([]);
  const [onLoad, setonLoad] = useState({ searched: false, detailed: false });
  const [errOnLoad, seterrOnLoad] = useState(false);
  const [popMovies, setpopMovies] = useState([]);
  const [topRatedMovies, settopRatedMovies] = useState([]);
  const [Upcoming, setUpcoming] = useState([]);
  const [Tranding, setTranding] = useState([]);
  const [detailedMovie, setdetailedMovie] = useState(null);
  const [watchedListe, setToWatchedListe] = useState([]);
  useEffect(() => {
    showFirstTopMovies();
  }, []);
  function showPopMovies(page) {
    getPopularMovies(setonLoad, onLoad, seterrOnLoad, setpopMovies, page);
  }
  function showTopMovies(page) {
    getTopRatedMovies(setonLoad, onLoad, seterrOnLoad, settopRatedMovies, page);
  }
  function showFirstTopMovies() {
    getFirstTopRatedMovies(settopRatedMovies);
  }
  function showUpcoming(page) {
    getUpcoming(setonLoad, onLoad, seterrOnLoad, setUpcoming, page);
  }
  function showByname(toSearch, setFindedByName) {
    getDataByName(setonLoad, onLoad, seterrOnLoad, toSearch, setFindedByName);
  }
  function showTranding() {
    getTranding(setonLoad, onLoad, seterrOnLoad, setTranding);
  }
  function showDetailedMovie(id) {
    getMovieDetails(setonLoad, onLoad, seterrOnLoad, id, setdetailedMovie);
  }
  return (
    <div className="flex flex-col h-full">
      <Header
        toSearch={toSearch}
        setFindedByName={setFindedByName}
        findedByName={findedByName}
        getDataByName={getDataByName}
        showByname={showByname}
        setToSearch={setToSearch}
      />
      <div className="flex flex-col md:flex-row md:justify-center md:items-start justify-center items-center">
        <div className="rounded-md ms-1 mt-1 me-0 mb-1 w-[98%] h-[80vh]  md:w-[49%] p-2 flex-col  flex text-white bg-bleuM-100  ">
          <SerchedMovies
            onLoad={onLoad.searched}
            errOnLoad={errOnLoad}
            toSearch={toSearch}
            findedByName={findedByName}
            popular={popMovies}
            topRatedMovies={topRatedMovies}
            Upcoming={Upcoming}
            Tranding={Tranding}
            showTopMovies={showTopMovies}
            showPopMovies={showPopMovies}
            showUpcoming={showUpcoming}
            showTranding={showTranding}
            showDetailedMovie={showDetailedMovie}
          />
        </div>
        <div className=" rounded-md ms-1 mt-1 me-0 mb-1 w-[98%] h-[80vh]  md:w-[49%] p-2 flex-col flex text-white bg-bleuM-100">
          {detailedMovie ? (
            <DetailedMovie
              onLoad={onLoad.detailed}
              showDetailedMovie={showDetailedMovie}
              detailedMovie={detailedMovie}
              setdetailedMovie={setdetailedMovie}
              watchedListe={watchedListe}
              addToWatchedListe={setToWatchedListe}
            />
          ) : (
            <WatchedMovies
              watchedListe={watchedListe}
              setToWatchedListe={setToWatchedListe}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

// const [finded, setFinded] = useState([]);
// function findFilm() {
//   findedByName.map(
//     (movie) =>
//       toSearch.length >= 1 &&
//       !finded.find(e=>e.id===movie.id)&&
//       movie.original_title.toLowerCase().includes(toSearch.toLowerCase()) &&
//       setFinded([...finded, movie])
//   );
//   toSearch.length < 2 && setFinded([]);
//u

// useEffect(() => {
//   getPopularMovies(setpopMovies);
// }, []);
