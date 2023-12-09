import { useState,useEffect } from "react";
import "../styles/App.css";
import { BsCalendar31,TiStarFullOutline1,SiFireship1,FaSlideshare1,GiPopcorn1,FaUsers1,GiExtraTime1,IoIosPodium1, } from "../icons.jsx";

export function SerchedMovies({ findedByName,popular,topRatedMovies,Upcoming,showTopMovies,showPopMovies,showUpcoming ,showTranding,Tranding}) {
    const [showedData, setshowedData] = useState('topMovies');
    const[page ,setPage]=useState(1)
    useEffect(() => {
            if (findedByName.length > 0) setshowedData('searched'); 
    }, [findedByName]);
    return (
        <>
            <Tabs setPage={setPage} showTopMovies={showTopMovies} showTranding={showTranding} showedData={showedData} showUpcoming={showUpcoming} showPopMovies={showPopMovies} setshowedData={setshowedData} />
            {showedData==='topMovies' && <AllMovies data={topRatedMovies} />}
            {showedData==='popMovies' && <AllMovies data={popular} />}
            {showedData==='searched' && <AllMovies data={findedByName} />}
            {showedData==='upcoming' && <AllMovies data={Upcoming} />}
            {showedData==='tranding' && <AllMovies data={Tranding} />}
        <Pagination page={page} setPage={setPage} showedData={showedData} showTranding={showTranding} showTopMovies={showTopMovies} showUpcoming={showUpcoming} showPopMovies={showPopMovies} />
        </>
    );
}
function AllMovies({ data }) {    
    return (
        <div className="snap-y h-[70vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-Secondbm scrollbar-thumb-rounded-full ">
            {data.length > 0
                ?data.map((movie) => <MoviECard key={movie.id} movie={movie} />)
                : <EmptyList hidden={false} />
            }
        </div>
    )
}
function MoviECard({ movie }) {
    return (
        <div key={movie.id} className=" snap-center movie flex m-1 rounded-xl">
            <div className=" w-[100px] h-[150px] flex items-center relative">
                <img className="rounded-xl m-1 border border-white w-[90%] h-[90%] p-1" src={movie.poster_path?"https://image.tmdb.org/t/p/original"+movie.poster_path:'/images/imgNotFound.png'} alt={movie.original_title.slice(0,10)} />
            </div>
            <div className="m-1 shrink">
                <p>
                    <strong className="TextResponsive ">{(movie.original_title).slice(0,25)}</strong>
                </p>
                <div className="flex w-full gap-1">
                    <p className={` flex items-center rounded-xl my-1 text-black w-min p-[2px] ${movie?.vote_average >= 8 ? 'bg-green-500' :movie?.vote_average >= 7 ? 'bg-green-600' :movie?.vote_average >= 6 ? 'bg-yellow-400' : movie?.vote_average >= 5 ? 'bg-orange-400' :movie?.vote_average >= 4 ? 'bg-red-400' : movie?.vote_average >= 2 ? 'bg-red-500' : 'bg-red-700'}`}>
                        <strong className=" mx-1 text-sm font-medium"> {(movie?.vote_average).toFixed(2)} </strong>
                        <span className=" text-indigo-950 "><TiStarFullOutline1 /></span>
                    </p>
                    <p className={'flex items-center gap-1 rounded-xl my-1 p-[2px] bg-Secondbm w-min'}>
                        <strong className=" mx-1 text-sm font-medium"> {(movie?.vote_count).toFixed(0)} </strong>
                        <span className=" text-indigo-950 drop-shadow-xl"><FaUsers1 /></span>
                    </p>
                </div>
                <p className=" text-sm flex items-center ">{movie.release_date}<span className="ms-2"> <BsCalendar31 /></span></p>
            </div>
        </div>
    )
}
function Pagination({showedData,page,setPage, showPopMovies,showUpcoming,showTopMovies,showTranding }) {
    function readMore(showedData,page) {
        showedData==='topMovies' && showTopMovies(page);
        showedData==='popMovies' && showPopMovies(page)
        showedData==='upcoming' && showUpcoming(page)
        showedData==='tranding' && showTranding()
    }
    return (
        <div className="flex gap-1 justify-center items-center w-full p-1 pe-5 mb-2 shadow-md shadow-black rounded-md bg-Secondbm " >
            <button className=" hover:bg-red-700 bg-bleuM-200 flex rounded-xl px-2 py-1 font-bold items-center hover:scale-105 shadow-black shadow-sm duration-500 hover:transition" onClick={() => {
                readMore(showedData, page);
                setPage(page>1?page - 1:1)
            }}> previous </button>
            <button className=" hover:bg-red-700 bg-bleuM-200 flex rounded-xl px-2 py-1 font-bold items-center hover:scale-105 shadow-black shadow-sm duration-500 hover:transition"> {page} </button>
            <button disabled={showedData==='searched'&&true} className=" hover:bg-red-700 bg-bleuM-200 flex rounded-xl px-2 py-1 font-bold items-center hover:scale-105 shadow-black shadow-sm duration-500 hover:transition" onClick={() => {
                readMore(showedData, page)
                setPage(page + 1)
            }}> Next </button>
        </div>
    )
}
function Tabs({setPage,showTopMovies,showPopMovies,setshowedData,showUpcoming,showTranding}) {
    return (
        <div className="flex overflow-hidden gap-1 justify-center items-center w-full p-1 pe-5 mb-2 shadow-md shadow-black rounded-md bg-Secondbm " >
            <button className=" TextResponsive hover:bg-red-700 bg-bleuM-200 flex rounded-xl px-2 py-1 font-bold items-center hover:scale-105 shadow-black shadow-sm duration-500 hover:transition" onClick={() => {
                showTopMovies()
                setshowedData('topMovies');
                setPage(1)
                }}>
                Top<span className="mx-1 "><IoIosPodium1 /></span>
            </button>
            <button className="p-1 w-max px-2 bg-bleuM-200 hover:bg-orange-500 font-bold rounded-xl flex items-center hover:scale-105 shadow-sm transition duration-500 shadow-black" onClick={() => {
                showPopMovies()
                setshowedData('popMovies')
                setPage(1)
                }}>
                Popular <span className="mx-1 "><FaSlideshare1 /></span>
            </button>
            <button className="p-1 w-max px-2  bg-bleuM-200  hover:bg-teal-200 text-white hover:text-black font-bold rounded-xl flex items-center hover:scale-105 shadow-sm transition duration-500 shadow-black" onClick={() => {
                showUpcoming() 
                setshowedData('upcoming')
                setPage(1)
                }}>
                Upcoming <span className="mx-1 text-2xl"><GiExtraTime1 /></span>
            </button>
            <button className="p-1 w-max px-2  bg-bleuM-200  hover:bg-teal-200 text-white hover:text-black font-bold rounded-xl flex items-center hover:scale-105 shadow-sm transition duration-500 shadow-black" onClick={() => {
                showTranding() 
                setshowedData('tranding')
                setPage(1)
                }}>
                tranding <span className="mx-1 text-xl"><SiFireship1 /></span>
            </button>
        </div>
    )
}
function EmptyList(hidden) {
    return (
        <div className="flex items-center justify-center flex-col h-full">
            <span className=" text-9xl m-5">  <GiPopcorn1 /></span>
            <strong className="p-2">{hidden?"Any movies ":"hidden section"}</strong>
        </div>
    )
}
// function HeaderSearched({ data }) {
//     return (
//         <div className="mb-2 shadow-md shadow-black rounded-s-xl rounded-b-xl bg-Secondbm ">
//             {data.length > 0 ? (
//                 <p className="p-3">Serched Movies</p>
//             ) : (
//                 <p className="p-3">you can serache a movie</p>
//             )}
//         </div>
//     )
// }
// function ShowBtn({show,handleShow}) {
//     return (
//     <span className="absolute text-bleuM-100 m-1 cursor-pointer grid place-content-center self-end bg-white rounded-full p-1 z-20"
//             onClick={handleShow}>
//         {show?<FaArrowCircleUp1 />:  <FaArrowCircleDown1 />}
//     </span>
//     )    
// }