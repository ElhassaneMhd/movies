import { useEffect, useState } from "react";
import "../styles/App.css";

import {
    FaArrowCircleUp1,  FaArrowCircleDown1,BsCalendar31, GiPopcorn1
} from "../icons.jsx";

export function SerchedMovies({ finded }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        finded.length > 0&&  setShow(true);
    }, [finded]);

    function handleShow() {
        show ? setShow(false) : setShow(true);
    }
    return (
        <>
            <ShowBtn show={show} handleShow={handleShow} />
            <HeaderSearched data={finded} />
            {show ? <AllMovies data={finded} /> : finded.length < 0 ? <EmptyList /> : <EmptyList hidden={ true} />}
        </>
    );
}
 
function ShowBtn({show,handleShow}) {
    return (
    <span className="absolute text-bleuM-100 m-1 cursor-pointer grid place-content-center self-end bg-white rounded-full p-1"
            onClick={handleShow}>
        {show?<FaArrowCircleUp1 />:  <FaArrowCircleDown1 />}
    </span>
    )    
}
function EmptyList(hidden=false) {
    return (
        <div className="flex items-center justify-center flex-col ">
            <span className=" text-9xl m-5">  <GiPopcorn1 /></span>
            <strong className="p-2">{hidden?"your searchd is hidden":"find your favorite movies"}</strong>
        </div>
    )
}
function HeaderSearched({ data }) {
    return (
        <div className="mb-2 shadow-md shadow-black rounded-s-xl rounded-b-xl bg-Secondbm ">
            {data.length > 0 ? (
                <p className="p-3">Serched Movies</p>
            ) : (
                <p className="p-3">you can serache a movie</p>
            )}
        </div>
    )
}
function AllMovies({data }) {
    return (
        <div className="snap-y h-[70vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-Secondbm scrollbar-thumb-rounded-full ">
            {data.map((movie) => (
                <MoviECard key={movie.original_title} movie={movie } />
            ))}
        </div>
    )
}
function MoviECard({ movie }) {
    return (
        <div key={movie.original_title} className=" snap-center movie flex m-1 rounded-xl">
            <div className=" w-[100px] h-[150px] flex items-center relative">
                <img className="rounded-xl m-1 border border-white w-[90%] h-[90%] p-1" src={"https://image.tmdb.org/t/p/original"+movie.poster_path} alt={movie.original_title.slice(0,10)} />
            </div>
            <div className="m-1">
                <p>
                    <strong className="text-2xl m-2">{(movie.original_title).slice(0,15)}</strong>
                </p>
                <p className="flex items-center">{movie.release_date}<span className="ms-2"> <BsCalendar31/></span></p>
            </div>
        </div>
    )
}