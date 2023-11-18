import { useState } from "react";
import "../styles/App.css";

import {
  FaArrowCircleUp1,  FaArrowCircleDown1
} from "../icons.jsx";

export function SerchedMovies({ searched }) {
  const [data, setData] = useState([]);
  const [show, setshow] = useState(false);
  function handelShow() {
    show ? setshow(false) : setshow(true);
    setData(searched);
    }
    return (
    <>
    <div className="mb-2 shadow-md shadow-black rounded-s-xl rounded-b-xl bg-Secondbm ">
        {data.length > 0 ? (
            <p className="p-3">Serched Movies</p>
        ) : (
            <p className="p-3">you can serache a movie</p>
        )}
    </div>  
        {show ?
            <>
                <span className="absolute text-bleuM-100 m-1 cursor-pointer grid place-content-center self-end bg-white rounded-full p-1"
                onClick={handelShow}>
                    <FaArrowCircleUp1 />
                </span>
                {searched.map((e) => (
                    <div key={e.Title} className="movie">
                        <div className="movieImg ">
                            <img className="rounded-xl m-1" src={e.Poster} alt={e.Title.slice(5)} />
                        </div>
                        <div>
                            <p>
                                <strong>{e.Title}</strong>
                            </p>
                            <p>{e.Year} 📅</p>
                        </div>
                    </div>
                ))}
            </>
                :
            <>
                <span
                    className="absolute text-bleuM-100 m-1 cursor-pointer grid place-content-center self-end bg-white rounded-full p-1"
                    onClick={handelShow}
                    >
                        <FaArrowCircleDown1 />
                </span>
                <strong className="p-2">you can serache a movie</strong>
            </>
        }
    </>
  );
}