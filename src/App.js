import "./styles/App.css";
import { WatchedData, MovieData } from "./data";
import { Header } from "./jsx/header.jsx";
import { SerchedMovies } from "./jsx/searche.jsx";
import { WatchedMovies } from "./jsx/watched.jsx";
import { Footer } from "./jsx/footer.jsx";
function App() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex flex-col  md:flex-row md:justify-center md:items-start justify-center items-center">
        <div className="rounded-xl rounded-tr-none ms-1 mt-1 me-0 mb-1 w-[90%] md:w-[45%] p-2 flex-col flex-wrap flex text-white bg-bleuM-100">
          <SerchedMovies searched={MovieData} />
        </div>
        <div className=" rounded-xl rounded-tl-none ms-1 mt-1 me-0 mb-1 w-[90%] md:w-[45%] p-2 flex-col flex-wrap flex text-white bg-bleuM-100">
          <WatchedMovies watched={WatchedData} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
