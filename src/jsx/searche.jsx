import { useEffect, useState } from "react";
import "../styles/App.css";

import {
    FaArrowCircleUp1,  FaArrowCircleDown1,BsCalendar31, GiPopcorn1
} from "../icons.jsx";

export function SerchedMovies({ finded }) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (finded.length > 0) {
        setShow(true);
        }
    }, [finded]);

    function handleShow() {
        show ? setShow(false) : setShow(true);
    }
    return (
        <>
            <ShowBtn show={show} handleShow={handleShow} />
            <HeaderSearched data={finded} />
            {show ? <AllMovies data={finded} /> : <EmptyList />}
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
function EmptyList() {
    return (
        <div className="flex items-center justify-center flex-col ">
            <span className=" text-9xl m-5">  <GiPopcorn1 /></span>
            <strong className="p-2">find your favorite movies</strong>
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
                <MoviECard key={movie.Title} movie={movie } />
            ))}
        </div>
    )
}
function MoviECard({ movie }) {
    return (
        <div key={movie.Title} className=" snap-center movie flex m-1 rounded-xl">
            <div className="movieImg ">
                <img className="rounded-xl m-1 border border-white w-[80px] p-1" src={movie.Poster} alt={movie.Title.slice(5)} />
            </div>
            <div className="m-1">
                <p>
                    <strong className="text-2xl m-2">{movie.Title}</strong>
                </p>
                <p className="flex items-center">{movie.Year}<span className="ms-2"> <BsCalendar31/></span></p>
            </div>
        </div>
    )
}