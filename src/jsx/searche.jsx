import { useState,useEffect } from "react";
import "../styles/App.css";
import { SiFireship1,FaSlideshare1,GiPopcorn1,GiExtraTime1,IoIosPodium1, FaArrowUpRightFromSquare1,TiStarFullOutline1} from "../icons.jsx";
import { Loader } from "../SimpleComponent/loader.jsx";
export function SerchedMovies({ findedByName,popular,topRatedMovies,Upcoming,showTopMovies,showPopMovies,showUpcoming ,showTranding,Tranding,showDetailedMovie,onLoad,errOnLoad}) {
    const [showedData, setshowedData] = useState('popMovies');
    const [page, setPage] = useState(1)
    useEffect(() => {
            if (findedByName.length > 0) setshowedData('searched'); 
    }, [findedByName]);
    return (
        <>
            <Tabs setPage={setPage} showTopMovies={showTopMovies} showTranding={showTranding} showedData={showedData} showUpcoming={showUpcoming}
                showPopMovies={showPopMovies} setshowedData={setshowedData} Tranding={Tranding} Upcoming={Upcoming} topRatedMovies={topRatedMovies} popular={popular}
            />
            {onLoad && !errOnLoad && <Loader />}
            {errOnLoad &&<p>connexion failed</p>}
            {showedData==='topMovies'&&!onLoad && <AllMovies data={topRatedMovies} showDetailedMovie={showDetailedMovie}  />}
            {showedData==='popMovies'&&!onLoad && <AllMovies data={popular} showDetailedMovie={showDetailedMovie}       />}
            {showedData==='searched'&& !onLoad && <AllMovies data={findedByName} showDetailedMovie={showDetailedMovie}  />}
            {showedData==='upcoming'&& !onLoad && <AllMovies data={Upcoming} showDetailedMovie={showDetailedMovie}      />}
            {showedData==='tranding'&& !onLoad && <AllMovies data={Tranding} showDetailedMovie={showDetailedMovie}      />}
            {!['tranding', 'searched'].includes(showedData)&&!errOnLoad&&!onLoad
            &&<Pagination page={page} setPage={setPage} showedData={showedData} showTranding={showTranding} showTopMovies={showTopMovies} showUpcoming={showUpcoming} showPopMovies={showPopMovies} />}
        </>
    );
}
function AllMovies({ data,setdetailedID,showDetailedMovie }) {    
    return (
        <div className=" flex flex-wrap justify-around overflow-auto snap-y scrollbar-thin scrollbar-thumb-Secondbm h-[70vh] scrollbar-thumb-rounded-full w-full ">
            {data?.length > 0
                ? data.map((movie) => <MoviECard key={movie.id} showDetailedMovie={showDetailedMovie} setdetailedID={setdetailedID} movie={movie} />)
                : <EmptyList hidden={false} />
            }
        </div>
    )
}
function MoviECard({ movie, showDetailedMovie }) {
  
    return (
        <div key={movie.id} className="group flex flex-col flex-wrap flex-grow snap-center movie m-1 gap-1 rounded-md" >
            <div className="group relative flex cursor-pointer justify-center items-center w-full " onClick={() =>
                    {showDetailedMovie(movie.id)}}>
                <img loading="lazy" className="rounded-md m-auto border w-[180px]  border-white group-hover:backdrop-contrast-50" src={movie.poster_path?"https://image.tmdb.org/t/p/original"+movie.poster_path:'/images/imgNotFound.svg'} alt={movie.original_title.slice(0,10)}/>    
                    <p className={`absolute flex self-end rounded-md m-3 text-black w-min p-[2px] ${movie?.vote_average >= 8 ? 'bg-green-500' :movie?.vote_average >= 7 ? 'bg-green-600' :movie?.vote_average >= 6 ? 'bg-yellow-400' : movie?.vote_average >= 5 ? 'bg-orange-400' :movie?.vote_average >= 4 ? 'bg-red-400' : movie?.vote_average >= 2 ? 'bg-red-500' : 'bg-red-700'}`}>
                        <strong className=" mx-1 text-sm font-medium"> {(movie?.vote_average).toFixed(2)} </strong>
                        <span className=" text-indigo-950 "><TiStarFullOutline1 /></span>
                </p>  
                 <p className='absolute p-1 rounded-md cursor-pointer bg-black hover:scale-105 invisible group-hover:visible' >
                    <span className=" text-white text-2xl drop-shadow-xl"><FaArrowUpRightFromSquare1 /></span>
                </p>  
            </div>
            <div className="text-center w-full">
                <p className="  text-white" onClick={()=>console.log(movie)}>
                    <strong className=" text-sm">{movie.original_title.length>20?movie.original_title.slice(0,20)+'...':movie.original_title}</strong>
                </p>
                <p className=" text-xs font-bold  text-gray-400">
                    {(movie.release_date).split('-').at(0)}
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
        <div className="flex mt-1 gap-1 justify-center items-center w-full bg-black rounded-md border-white border  m-auto" >
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
function Tabs({setPage,showedData,showTopMovies,showPopMovies,setshowedData,showUpcoming,showTranding, Tranding,popular,Upcoming,topRatedMovies}) {
    return (
        <div id={'tabs'} className="flex gap-2 h-[6h] md:h-[8vh] overflow-auto justify-center items-center w-full p-1 mb-1 border border-white rounded-md bg-black" >
            <span> </span>
            <button className={`tabsButton shadow-black shadow-sm duration-300 ${showedData === 'topMovies'?'bg-Secondbm scale-105':'bg-Secondbm opacity-50'}`} onClick={() => {
                setPage(1)
                showedData!=='topMovies'&&setshowedData('topMovies');
                showedData!=='topMovies'&& topRatedMovies.length<=0&&showTopMovies()
                }}>
                <span className={`  sm:opacity-100 sm:w-full ${showedData === 'topMovies'?'w-full opacity-100':'opacity-0 w-0'}`   }>Top</span>
                <span className="mx-1 flex"><IoIosPodium1 /></span>
            </button>
            <button className={`tabsButton shadow-black shadow-sm duration-300 ${showedData === 'popMovies'?'bg-Secondbm scale-105':' bg-Secondbm opacity-50'}`} onClick={() => {
                setPage(1)
                showedData!=='popMovies'&&setshowedData('popMovies')
                showedData!=='popMovies'&&popular.length<=0&&showPopMovies()
                }}>
                <span  className={`sm:opacity-100 sm:w-full ${showedData === 'popMovies'?'w-full opacity-100':'opacity-0 w-0'}`} >Popular</span>
                <span className="mx-1 "><FaSlideshare1 /></span>
            </button>
            <button className={`tabsButton shadow-black shadow-sm duration-300 ${showedData === 'upcoming'?'bg-Secondbm scale-105':'bg-Secondbm opacity-50'}`}  onClick={() => {
                setPage(1)
                showedData!=='upcoming'&& setshowedData('upcoming')
                showedData!=='upcoming'&& Upcoming.length<=0&&showUpcoming() 
            }}>
                <span  className={`  sm:opacity-100 sm:w-full ${showedData === 'upcoming'?'w-full opacity-100':'opacity-0 w-0'}`} >Recents</span>
                <span className="mx-1 text-xl"><GiExtraTime1 /></span>
            </button>
            <button className={`tabsButton shadow-black shadow-sm duration-300 ${showedData === 'tranding'?'bg-Secondbm scale-105':' bg-Secondbm opacity-50'}`}  onClick={() => {
                setPage(1)
                showedData !== 'tranding' && setshowedData('tranding');
                showedData !== 'tranding' &&Tranding.length<=0 && showTranding() 
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
// function ErrorNetwork() {
//     return (
//         <div>
            
//         </div>
//  )   
// }



























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