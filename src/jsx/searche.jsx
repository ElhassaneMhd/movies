import { useState,useEffect } from "react";
import "../styles/App.css";
import { BsCalendar31,TiStarFullOutline1,SiFireship1,FaSlideshare1,GiPopcorn1,FaUsers1,GiExtraTime1,IoIosPodium1, FaArrowUpRightFromSquare1,} from "../icons.jsx";

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
            {showedData === 'tranding' && <AllMovies data={Tranding} />}
            {!['tranding', 'searched'].includes(showedData)
            &&<Pagination page={page} setPage={setPage} showedData={showedData} showTranding={showTranding} showTopMovies={showTopMovies} showUpcoming={showUpcoming} showPopMovies={showPopMovies} />}
        </>
    );
}
function AllMovies({ data }) {    
    return (
        <div className="snap-y h-[70vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-Secondbm scrollbar-thumb-rounded-full ">
            {data?.length > 0
                ?data.map((movie) => <MoviECard key={movie.id} movie={movie} />)
                : <EmptyList hidden={false} />
            }
        </div>
    )
}
function MoviECard({ movie }) {
    return (
        <div key={movie.id} className="group snap-center movie flex m-1 rounded-md">
            <div className=" w-[100px] h-[150px] flex items-center relative">
                <img className="rounded-xl m-1 border border-white w-[90%] h-[90%] p-1" src={movie.poster_path?"https://image.tmdb.org/t/p/original"+movie.poster_path:'/images/imgNotFound.png'} alt={movie.original_title.slice(0,10)} />
            </div>
            <div className="m-1 shrink relative">
                <p>
                    <strong className="TextResponsive ">{(movie.original_title).slice(0,25)}</strong>
                </p>
                <div className="flex w-full gap-1">
                    <p className={` flex items-center rounded-md my-1 text-black w-min p-[2px] ${movie?.vote_average >= 8 ? 'bg-green-500' :movie?.vote_average >= 7 ? 'bg-green-600' :movie?.vote_average >= 6 ? 'bg-yellow-400' : movie?.vote_average >= 5 ? 'bg-orange-400' :movie?.vote_average >= 4 ? 'bg-red-400' : movie?.vote_average >= 2 ? 'bg-red-500' : 'bg-red-700'}`}>
                        <strong className=" mx-1 text-sm font-medium"> {(movie?.vote_average).toFixed(2)} </strong>
                        <span className=" text-indigo-950 "><TiStarFullOutline1 /></span>
                    </p>
                    <p className={'flex items-center gap-1 rounded-md my-1 p-[2px] bg-Secondbm w-min'}>
                        <strong className=" mx-1 text-sm font-medium"> {(movie?.vote_count).toFixed(0)} </strong>
                        <span className=" text-indigo-950 drop-shadow-xl"><FaUsers1 /></span>
                    </p>
                </div>
                <p className="group text-sm flex items-center ">{movie.release_date}<span className="ms-2"> <BsCalendar31 /></span></p>
                <p className={'hidden  group-hover:flex absolute top-[40%] items-center justify-center gap-1 rounded-md my-1 py-2 cursor-pointer w-full bg-Secondbm opacity-75 hover:opacity-100 hover:scale-105'}>
                        <span className=" mx-1 text-xs font-medium"> show details </span>
                        <span className=" text-indigo-950 text-xs drop-shadow-xl"><FaArrowUpRightFromSquare1 /></span>
                    </p>
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
        <div className="flex mt-1 gap-1 justify-center items-center top-full m-auto" >
            {page > 1 &&
            <input type="button" className=" hover:bg-red-700 cursor-pointer bg-bleuM-200 rounded-xl px-2 py-1 font-bold shadow-black shadow-sm duration-500 hover:transition" onClick={(e) => {
                    setPage(+e.target.value)
                    readMore(showedData, +e.target.value);
                }} value={page-1} />
                }
            <input type="button" className=" border-2 m-1 border-zinc-50 rounded-xl px-2 py-1 font-bold shadow-black shadow-sm scale-110" value={page} />
            <input type="button" className=" hover:bg-red-700 cursor-pointer bg-bleuM-200 flex rounded-xl px-2 py-1 font-bold items-center hover:scale-105 shadow-black shadow-sm duration-500 " onClick={(e) => {
                    setPage(+e.target.value)
                    readMore(showedData, +e.target.value)
                }} value={page+1}/>
        </div>
    )
}
function Tabs({setPage,showedData,showTopMovies,showPopMovies,setshowedData,showUpcoming,showTranding}) {
    return (
        <div id={'tabs'} className="flex gap-2 overflow-auto  justify-center items-center w-full p-1 mb-1 shadow-md shadow-black rounded-md bg-Secondbm " >
            <span> </span>
            <button className={`tabsButton shadow-black shadow-sm duration-300 ${showedData === 'topMovies'?'bg-bleuM-200 scale-105':'bg-bleuM-200 opacity-50'}`} onClick={() => {
                showTopMovies()
                setshowedData('topMovies');
                setPage(1)
                }}>
                <span className={`  sm:opacity-100 sm:w-full ${showedData === 'topMovies'?'w-full opacity-100':'opacity-0 w-0'}`   }>Top</span>
                <span className="mx-1 flex"><IoIosPodium1 /></span>
            </button>
            <button className={`tabsButton shadow-black shadow-sm duration-300 ${showedData === 'popMovies'?'bg-bleuM-200 scale-105':' bg-bleuM-200 opacity-50'}`} onClick={() => {
                showPopMovies()
                setshowedData('popMovies')
                setPage(1)
                }}>
                <span  className={`sm:opacity-100 sm:w-full ${showedData === 'popMovies'?'w-full opacity-100':'opacity-0 w-0'}`} >Popular</span>
                <span className="mx-1 "><FaSlideshare1 /></span>
            </button>
            <button className={`tabsButton shadow-black shadow-sm duration-300 ${showedData === 'upcoming'?'bg-bleuM-200 scale-105':'bg-bleuM-200 opacity-50'}`}  onClick={() => {
                showUpcoming() 
                setshowedData('upcoming')
                setPage(1)
            }}>
                <span  className={`  sm:opacity-100 sm:w-full ${showedData === 'upcoming'?'w-full opacity-100':'opacity-0 w-0'}`} >Recents</span>
                <span className="mx-1 text-xl"><GiExtraTime1 /></span>
            </button>
            <button className={`tabsButton shadow-black shadow-sm duration-300 ${showedData === 'tranding'?'bg-bleuM-200 scale-105':' bg-bleuM-200 opacity-50'}`}  onClick={() => {
                showTranding() 
                setshowedData('tranding')
                setPage(1)
            }}>
                <span  className={`  sm:opacity-100 sm:w-full ${showedData === 'tranding'?'w-full opacity-100':'opacity-0 w-0'}`} >Tranding</span>
                <span className="mx-1 text-xl"><SiFireship1 /></span>
            </button>
        </div>
    )
}
function EmptyList(hidden) {
    return (
        <div className="flex items-center justify-center flex-col h-full">
            <span className=" text-9xl m-5">  <GiPopcorn1 /></span>
            <strong className="p-2">{hidden?"no movies found ":"hidden section"}</strong>
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