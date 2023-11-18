import { useState } from "react";
import {
    FaArrowCircleUp1,
    MdDeleteForever1,
    FaArrowCircleDown1,
    FcRating1,
    PiClockCounterClockwiseDuotone1,
    RiUserStarLine1,
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
    let allImdbRating = data.reduce((acc, curr) => acc + curr.imdbRating, 0);
    let allUserRating = data.reduce((acc, curr) => acc + curr.userRating, 0);
    return (
    <>
        {show ? (
            <>
                <div className="p-3 mb-2 shadow-md shadow-black rounded-s-xl rounded-b-xl bg-Secondbm ">
                    {data.length > 0 ? (
                    <p className="text-bold flex" >
                        #{data.length} movies ,
                        <span className="flex items-center">
                            imdb Ratings{allImdbRating / data.length}<FcRating1 />
                           User Ratings{(allUserRating / data.length).toFixed(1)}<span className=" text-xl text-yellow-500"> <RiUserStarLine1 /></span>
                        </span> 
                    </p>
                    ) : (
                        <strong className="">you have any watched movie</strong>
                    )}
                </div>
                <Showbtn show={show} handelShow={handelShow}/>
                <Allmovies data={data} handelDelet={handelDelet}/>
            </>
        ) : data.length > 0 ? (
            <>
                <p className="p-3 mb-2 shadow-md shadow-black rounded-s-xl rounded-b-xl bg-Secondbm ">
                    you have <strong>{data?.length}</strong> watched movies
                </p>
                <Showbtn show={show} handelShow={handelShow}/>
            </>
        ) : (
            <>
                <p className="p-3 mb-2 shadow-md shadow-black rounded-s-xl rounded-b-xl bg-Secondbm ">
                    you have any watched movie
                </p>
                <Showbtn show={show} handelShow={handelShow}/>
            </>
        )}
    </>
    );
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
                <div key={e.Title} className="movie">
                    <div className="movieImg">
                        <img className="rounded-xl m-1" src={e.Poster} alt={e.Title.slice(0, 7)} />
                    </div>
                    <div>
                        <p>
                            <strong> {e.Title}</strong>{" "}
                        </p>
                        <div className="flex m-2">
                            {e.imdbRating && <p className="m-2 flex justify-center items-center"> { e.imdbRating}  <FcRating1/></p>}
                            {e.userRating && <p className="m-2 flex justify-center items-center">  { e.userRating} <span className=" text-xl text-yellow-500"> <RiUserStarLine1 /></span></p>}
                            {e.runtime && <p className="m-2 flex justify-center items-center">{ e.runtime} fois <PiClockCounterClockwiseDuotone1/> </p>}
                            <p
                                className="cursor-pointer m-2  text-red-600 text-2xl"
                                onClick={() => {
                                    handelDelet(e.imdbID);
                                }}
                            >  
                                <MdDeleteForever1 />
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}