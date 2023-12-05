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
        {show ? (
            <>
                <HeaderWatched data={data} allImdbRating={allImdbRating} allUserRating={allUserRating}/>
                <Showbtn show={show} handelShow={handelShow}/>
                <Allmovies data={data} handelDelet={handelDelet}/>
            </>
        ) : data.length > 0 ? (
            <>
                <p className="p-3 mb-2 shadow-md shadow-black rounded-s-xl rounded-b-xl bg-Secondbm ">
                    you have <strong>{data?.length}</strong> watched movies
                </p>
                        <Showbtn show={show} handelShow={handelShow} />
                <div className="flex items-center justify-center flex-col ">
                    <span className=" text-9xl m-5">  <RiFileList3Line1 /></span>
                            <strong className="p-2">{ data.length} watched movies</strong>
                </div>
            </>
        ) : (
            <>
                <p className="p-3 mb-2 shadow-md shadow-black rounded-s-xl rounded-b-xl bg-Secondbm ">
                    you have any watched movie
                </p>
                <Showbtn show={show} handelShow={handelShow} />
                <div className="flex items-center justify-center flex-col ">
                    <span className=" text-9xl m-5">  <RiFileList3Line1 /></span>
                    <strong className="p-2">your watch liste is empty</strong>
                </div>
            </>
            )
        }
    </>
    );
}

function HeaderWatched({data,allImdbRating,allUserRating}) {
    return (
        <div className="">
            {data.length > 0 ? (
            <p className="flex  justify-around items-center w-full p-3 pe-5 mb-2 shadow-md shadow-black rounded-s-xl rounded-b-xl bg-Secondbm " >              
                <span> #{data.length} movies </span>
                <span className="bg-bleuM-200 flex rounded-xl p-2 items-center hover:scale-105 shadow-black hover:shadow-2xl duration-500 hover:transition">  imdb  {allImdbRating / data.length}<span className="ms-2 text-2xl"> <FcRating1 /></span></span>
                <span className="bg-bleuM-200 flex rounded-xl p-2 items-center hover:scale-105 shadow-black hover:shadow-2xl duration-500 hover:transition"> User  {(allUserRating / data.length).toFixed(1)}<span className=" text-lg ms-1 text-yellow-400 p-1 bg-red-500 rounded-2xl"> <RiUserStarLine1 /></span></span>
            </p>
            ) : (
                    <>
                <p className="w-full p-3 pe-5 mb-2 shadow-md shadow-black rounded-s-xl rounded-b-xl bg-Secondbm ">you have any watched movie</p>
                    <div className="flex items-center justify-center flex-col ">
                    <span className=" text-9xl m-5">  <RiFileList3Line1 /></span>
                    <strong className="p-2">your watch liste is empty</strong>
                </div>
                    </>
            )}
        </div>
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
        <>
            {data.map((e) => (
                <div key={e.Title} className="movie flex m-1 rounded-xl">
                    <div className="movieImg">
                        <img className="rounded-xl m-1 border border-white w-[100px] p-1" src={e.Poster} alt={e.Title.slice(0, 7)} />
                    </div>
                        <div className="flex flex-col m-2 w-max">
                            <strong className="m-1 mx-2 text-2xl">  {e.Title}</strong>{" "}
                            {e.imdbRating && <span className="m-1 mx-2 flex justify-start items-center"> imdb rating : <strong> { e.imdbRating}</strong>  <span className="ms-1">  <FcRating1/></span></span>}
                            {e.userRating && <span className="m-1 mx-2 flex justify-start items-center"> user rating :  <strong> { e.userRating}</strong>  <span className="ms-1 text-xl text-yellow-500"> <RiUserStarLine1 /></span></span>}
                            {e.runtime && <span className="m-1 mx-2 flex justify-start items-center"> run time : <strong > { e.runtime} </strong> fois <span className="text-xl ms-1"> <PiClockCounterClockwiseDuotone1/></span> </span>}
                            <span
                                className="cursor-pointer flex items-center p-1 bg-red-500 rounded-xl w-min self-center"
                                onClick={() => {
                                    handelDelet(e.imdbID);
                                }}
                            >  
                                Delete <span className="ms-1  text-white text-2xl">   <MdDeleteForever1 /></span>
                            </span>
                    </div>
                </div>
            ))}
        </>
    )
}