import "./styles/App.css";
import { WatchedData } from "./data";
import {
  getTranding,
  getPopularMovies,
  getTopRatedMovies,
  getUpcoming,
  getDataByName,
} from "./functions.js";
import { Header } from "./jsx/header.jsx";
import { SerchedMovies } from "./jsx/searche.jsx";
import { WatchedMovies } from "./jsx/watched.jsx";
import { Footer } from "./jsx/footer.jsx";
import { useEffect, useState } from "react";
function App() {
  const [toSearch, setToSearch] = useState("");
  const [findedByName, setFindedByName] = useState([]);
  const [popMovies, setpopMovies] = useState([]);
  const [topRatedMovies, settopRatedMovies] = useState([]);
  const [Upcoming, setUpcoming] = useState([]);
  const [Tranding, setTranding] = useState([]);
  
useEffect(() => {
  showTopMovies();
},[])
  function showPopMovies(page) {
    getPopularMovies(setpopMovies, page);
  }
  function showTopMovies(page ) {
    getTopRatedMovies(settopRatedMovies, page);
  }
  function showUpcoming(page) {
    getUpcoming(setUpcoming, page);
  }
  function showByname(toSearch, setFindedByName) {
    getDataByName(toSearch, setFindedByName);
  }
  function showTranding() {
    getTranding(setTranding);
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
          />
        </div>
        <div className=" rounded-md ms-1 mt-1 me-0 mb-1 w-[98%] h-[80vh]  md:w-[49%] p-2 flex-col flex text-white bg-bleuM-100">
          <WatchedMovies watched={WatchedData} />
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
