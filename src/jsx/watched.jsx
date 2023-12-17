import { useState } from "react";
import {
    FaArrowCircleUp1,
    MdDeleteForever1,
    FaArrowCircleDown1,
    FcRating1,
    PiClockCounterClockwiseDuotone1,
    RiUserStarLine1,
    RiFileList3Line1,
} from "../icons.jsx";

export function WatchedMovies({ watchedListe ,setToWatchedListe}) {
    const [show, setshow] = useState(true);
    function handelShow() {
        show ? setshow(false) : setshow(true);
    }
    function handelDelet(id) {
        setToWatchedListe(watchedListe.filter((e) => e.id !== id));
    }
    const allImdbRating = watchedListe.reduce((acc, curr) => acc + curr.vote_average, 0);
    const allUserRating = watchedListe.reduce((acc, curr) => curr.userRating? acc + curr.userRating:0, 0);
    return (
    <>
        {(show && watchedListe.length > 0)? (
            <>
                <HeaderWatched show={show }  handelShow={handelShow} watchedListe={watchedListe} allImdbRating={allImdbRating} allUserRating={allUserRating}/>
                <Allmovies watchedListe={watchedListe} handelDelet={handelDelet}/>
            </>
        ) : watchedListe.length > 0 ? (
                <EmptyListe watchedListe={watchedListe} hidden={true} show={show} handelShow={handelShow}/>             
        ) : (
                <EmptyListe watchedListe={watchedListe}  hidden={false} show={show} handelShow={handelShow}/>
            )
        }
    </>
    );
}
function HeaderWatched({watchedListe,allImdbRating,allUserRating,show,handelShow}) {
    return (
        <>
            {watchedListe.length > 0 ? (
                <>
                    <Showbtn show={show} handelShow={handelShow} />
                    <p className="flex  justify-around items-center w-full p-1 pe-5 mb-2 shadow-md shadow-black rounded-md bg-Secondbm " >              
                    <span> #{watchedListe.length} movies </span>
                    <span className="bg-bleuM-200 flex rounded-xl py-1 px-2 items-center hover:scale-105 shadow-black shadow-sm duration-500 hover:transition">  imdb  {(allImdbRating / watchedListe.length).toFixed(1)}<span className="ms-2 text-2xl"> <FcRating1 /></span></span>
                    <span className="bg-bleuM-200 flex rounded-xl px-2 py-1 items-center hover:scale-105 shadow-black shadow-sm duration-500 hover:transition"> User  {(allUserRating / watchedListe.length).toFixed(1)}<span className=" text-md ms-1 text-yellow-400 p-1 bg-red-500 rounded-2xl"> <RiUserStarLine1 /></span></span>
                    </p>
                </>
            ) : (
                <EmptyListe watchedListe={watchedListe}  show={show } handelShow={handelShow}/>             
            )}

        </>
    )
}
function Showbtn({show,handelShow}) {
    return (
        <>
            {show ? (
                <span
                    className="absolute text-bleuM-100 m-1 cursor-pointer grid place-content-center self-end bg-white rounded-full p-1"
                    onClick={handelShow}
                >
                <FaArrowCircleUp1 />
                </span>
            ) : (
                <span
                    className="absolute text-bleuM-100 m-1 cursor-pointer grid place-content-center self-end bg-white rounded-full p-1"
                    onClick={handelShow}
                >
                    <FaArrowCircleDown1 />
                </span>
            )}
        </>
    )
}
function Allmovies({watchedListe,handelDelet}) {
    return (
        <div className="snap-y h-[70vh] overflow-y-scroll scrollbar-thumb-Secondbm  scrollbar-thin scrollbar-thumb-rounded-full ">
            {watchedListe.map((movie) => (
                <MovieCrad key={movie.id} movie={movie} handelDelet={handelDelet } />
            ))}
        </div>
    )
}
function EmptyListe({show ,watchedListe, handelShow,hidden}) {
    return (
        <>
            <Showbtn show={show} handelShow={handelShow} />
            <p className="p-3 mb-2 shadow-md shadow-black rounded-s-xl rounded-b-xl bg-Secondbm ">
                {watchedListe.length>0? `you have  ${watchedListe?.length} watched movies` :"you have any watched movie"  }
            </p>
            <div className="flex items-center justify-center flex-col">
                <span className=" text-9xl m-5">  <RiFileList3Line1 /></span>
                <strong className="p-2">{hidden? 'your watch liste is hidden':'your watch liste is empty'}</strong>
            </div>
        </>
    )
}
function MovieCrad({ movie, handelDelet }) {
    return (
        <div key={movie.id} className="group movie flex m-1 rounded-xl snap-center">
            <MovieImg handelDelet={handelDelet} movie={movie}/>
            <MovieInfos movie={movie}/>            
        </div>
    )
}
function MovieInfos({ movie }) {
    return(
        <div className="flex flex-col m-2 w-max">
            <strong className="m-1 mx-2 text-2xl">  {movie.original_title}</strong>{" "}
            {movie.vote_average && <span className="m-1 mx-2 flex justify-start items-center"> imdb : <strong> { movie.vote_average.toFixed(2)}</strong>  <span className="ms-1">  <FcRating1 /></span></span>}
            {movie?.userRating && <span className="m-1 mx-2 flex justify-start items-center"> user  :  <strong> {movie.userRating}</strong>  <span className="ms-1 text-xl text-yellow-500"> <RiUserStarLine1 /></span></span>}
            {movie.runtime && <span className="m-1 mx-2 flex justify-start items-center"> run time : <strong > {movie.runtime} </strong> fois <span className="text-xl ms-1"> <PiClockCounterClockwiseDuotone1 /></span> </span>}              
        </div >
    )
}
function MovieImg({ movie,handelDelet}) {
    return (
        <div className=" w-[100px] h-[150px] flex items-center relative">
                <img className="absolute  rounded-xl m-1 border border-white w-[90%] h-[90%] " src={movie.poster_path?"https://image.tmdb.org/t/p/w300"+movie.poster_path:'/images/imgNotFound.svg'} alt={movie.original_title.slice(0,10)} />
            <span
                className=" opacity-0 w-[90%] cursor-pointer flex items-center p-1 bg-red-500 rounded-xl rounded-tr-none rounded-tl-none  absolute ms-1 top-[78%] group-hover:opacity-100 transition duration-500"
                onClick={() => handelDelet(movie.id)}
                >
                <strong> Delete</strong>
                <span className="ms-1  text-white text-2xl">   <MdDeleteForever1 /></span>
            </span>
        </div>
        
    )
}