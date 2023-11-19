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
      <div className="main">
        <div className="serched">
          <SerchedMovies searched={MovieData} />
        </div>
        <div className="watched">
          <WatchedMovies watched={WatchedData} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
