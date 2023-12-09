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

export function WatchedMovies({ watched }) {
    const [data, setData] = useState(watched);
    const [show, setshow] = useState(true);
    function handelShow() {
        show ? setshow(false) : setshow(true);
    }
    function handelDelet(id) {
        setData(data.filter((e) => e.imdbID !== id));
    }
    const allImdbRating = data.reduce((acc, curr) => acc + curr.imdbRating, 0);
    const allUserRating = data.reduce((acc, curr) => acc + curr.userRating, 0);
    return (
    <>
        {(show && data.length > 0)? (
            <>
                <HeaderWatched show={show }  handelShow={handelShow} data={data} allImdbRating={allImdbRating} allUserRating={allUserRating}/>
                <Allmovies data={data} handelDelet={handelDelet}/>
            </>
        ) : data.length > 0 ? (
                <EmptyListe data={data} hidden={true} show={show} handelShow={handelShow}/>             
        ) : (
                <EmptyListe data={data}  hidden={false} show={show} handelShow={handelShow}/>
            )
        }
    </>
    );
}
function HeaderWatched({data,allImdbRating,allUserRating,show,handelShow}) {
    return (
        <>
            {data.length > 0 ? (
                <>
                    <Showbtn show={show} handelShow={handelShow} />
                    <p className="flex  justify-around items-center w-full p-1 pe-5 mb-2 shadow-md shadow-black rounded-s-xl rounded-b-xl bg-Secondbm " >              
                    <span> #{data.length} movies </span>
                    <span className="bg-bleuM-200 flex rounded-xl py-1 px-2 items-center hover:scale-105 shadow-black shadow-sm duration-500 hover:transition">  imdb  {(allImdbRating / data.length).toFixed(1)}<span className="ms-2 text-2xl"> <FcRating1 /></span></span>
                    <span className="bg-bleuM-200 flex rounded-xl px-2 py-1 items-center hover:scale-105 shadow-black shadow-sm duration-500 hover:transition"> User  {(allUserRating / data.length).toFixed(1)}<span className=" text-md ms-1 text-yellow-400 p-1 bg-red-500 rounded-2xl"> <RiUserStarLine1 /></span></span>
                    </p>
                </>
            ) : (
                <EmptyListe data={data}  show={show } handelShow={handelShow}/>             
            
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
function Allmovies({data,handelDelet}) {
    return (
        <div className="snap-y h-[70vh] overflow-y-scroll scrollbar-thumb-Secondbm  scrollbar-thin scrollbar-thumb-rounded-full ">
            {data.map((movie) => (
                <MovieCrad key={movie.imdbID} movie={movie} handelDelet={handelDelet } />
            ))}
        </div>
    )
}
function EmptyListe({show ,data, handelShow,hidden}) {
    return (
        <>
            <Showbtn show={show} handelShow={handelShow} />
            <p className="p-3 mb-2 shadow-md shadow-black rounded-s-xl rounded-b-xl bg-Secondbm ">
                {data.length>0? `you have  ${data?.length} watched movies` :"you have any watched movie"  }
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
        <div key={movie.imdbID} className="group movie flex m-1 rounded-xl snap-center">
            <MovieImg handelDelet={handelDelet} movie={movie}/>
            <MovieInfos movie={movie}/>            
        </div>
    )
}
function MovieInfos({ movie }) {
    return(
        <div className="flex flex-col m-2 w-max">
            <strong className="m-1 mx-2 text-2xl">  {movie.Title}</strong>{" "}
            {movie.imdbRating && <span className="m-1 mx-2 flex justify-start items-center"> imdb rating : <strong> { movie.imdbRating}</strong>  <span className="ms-1">  <FcRating1 /></span></span>}
            {movie.userRating && <span className="m-1 mx-2 flex justify-start items-center"> user rating :  <strong> {movie.userRating}</strong>  <span className="ms-1 text-xl text-yellow-500"> <RiUserStarLine1 /></span></span>}
            {movie.runtime && <span className="m-1 mx-2 flex justify-start items-center"> run time : <strong > {movie.runtime} </strong> fois <span className="text-xl ms-1"> <PiClockCounterClockwiseDuotone1 /></span> </span>}              
        </div >
    )
}
function MovieImg({ movie,handelDelet}) {
    return (
        <div className=" w-[100px] h-[150px] flex items-center relative">
            <img className="rounded-xl m-1 border border-white w-[90%] h-[90%] p-1" src={movie.Poster} alt={movie.Title.slice(0, 7)} />
            <span
                className=" opacity-0 w-[90%] cursor-pointer flex items-center p-1 bg-red-500 rounded-xl rounded-tr-none rounded-tl-none  absolute ms-1 top-[75%] group-hover:opacity-100 transition duration-500"
                onClick={() => handelDelet(movie.imdbID)}
                >
                <strong> Delete</strong>
                <span className="ms-1  text-white text-2xl">   <MdDeleteForever1 /></span>
            </span>
        </div>
        
    )
}