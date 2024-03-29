import { useState,useEffect } from "react";
import "../styles/App.css";
import {GiPopcorn1,GiExtraTime1,FaArrowUpRightFromSquare1,TiStarFullOutline1,SiFireship1,IoIosPodium1,FaSlideshare1} from "../icons.jsx";
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
                showPopMovies={showPopMovies} setshowedData={setshowedData} Tranding={Tranding} Upcoming={Upcoming} top={topRatedMovies} popular={popular}
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
        <div className={`grid ${data?.length > 0 ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6' : 'grid-cols-1'}  overflow-auto snap-y scrollbar-thin scrollbar-thumb-Secondbm h-[70vh] scrollbar-thumb-rounded-full w-full`}>
            {data?.length > 0
                ? data.map((movie) => <MoviECard key={movie.id} showDetailedMovie={showDetailedMovie} setdetailedID={setdetailedID} movie={movie} />)
                : <EmptyList hidden={false} />
            }
        </div>
    )
}
function MoviECard({ movie, showDetailedMovie }) {
  
    return (
        <div className="group flex flex-col flex-wrap  snap-center movie m-1 rounded-md" >
            <div className="group relative flex cursor-pointer justify-center items-center w-fit " onClick={() =>
                    {showDetailedMovie(movie.id)}}>
                <img className=" w-fit border-y border-Secondbm group-hover:opacity-40" src={movie.poster_path?"https://image.tmdb.org/t/p/original"+movie.poster_path:'images\\imgNotFound.svg'} alt={movie.original_title.slice(0,10)}/>    
                    <p className={`absolute flex self-end rounded-md m-3 text-black w-min p-[2px] ${movie?.vote_average >= 8 ? 'bg-green-500' :movie?.vote_average >= 7 ? 'bg-green-600' :movie?.vote_average >= 6 ? 'bg-yellow-400' : movie?.vote_average >= 5 ? 'bg-orange-400' :movie?.vote_average >= 4 ? 'bg-red-400' : movie?.vote_average >= 2 ? 'bg-red-500' : 'bg-red-700'}`}>
                        <strong className=" mx-1 text-sm font-medium"> {(movie?.vote_average).toFixed(2)} </strong>
                        <span className=" text-indigo-950 "><TiStarFullOutline1 /></span>
                </p>  
                 <p className='absolute p-1 rounded-md cursor-pointer bg-Secondbm hover:scale-105 invisible group-hover:visible' >
                    <span className=" text-black text-2xl drop-shadow-xl"><FaArrowUpRightFromSquare1 /></span>
                </p>  
            </div>
            <div className="text-center w-full">
                <p className="  text-white my-1" >
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
        <div className="flex mt-1 gap-1 justify-center items-center w-full  rounded-md m-auto" >
            {page > 1 &&
            <input type="button" className=" hover:opacity-100 opacity-50 border-2 border-Secondbm cursor-pointer text-Secondbm rounded-md px-2  font-bold duration-300 hover:transition scale-90" onClick={(e) => {
                    setPage(+e.target.value)
                    readMore(showedData, +e.target.value);
                }} value={page-1} />
                }
            <input type="button" className=" m-1 bg-Secondbm text-white rounded-md px-2 font-bold shadow-black shadow-sm scale-110" value={page} />
            <input type="button" className=" hover:opacity-100 opacity-50 hover:border-Secondbm cursor-pointer border-2 text-Secondbm border-Secondbm rounded-md px-2 font-bold items-center hover:scale-105 scale-90 duration-300 " onClick={(e) => {
                    setPage(+e.target.value)
                    readMore(showedData, +e.target.value)
                }} value={page+1}/>
        </div>
    )
}
function Tabs({setPage,showedData,showTopMovies,showPopMovies,setshowedData,showUpcoming,showTranding, Tranding,popular,Upcoming,top}) {
    return (
        <div id={'tabs'} className="flex gap-2 h-[6vh] w-full overflow-auto justify-center items-center p-1 mb-4 rounded-md " >     
        <Tab showedData={showedData} setshowedData={setshowedData} setPage={setPage} type={top} showUpcoming={showUpcoming} showTopMovies={showTopMovies} showPopMovies={showPopMovies} showTranding={showTranding} content={'topMovies'} nom={'Top'} />
        <Tab showedData={showedData} setshowedData={setshowedData} setPage={setPage} type={popular} showUpcoming={showUpcoming} showTopMovies={showTopMovies} showPopMovies={showPopMovies} showTranding={showTranding} content={'popMovies'} nom={'Popular'} />
        <Tab showedData={showedData} setshowedData={setshowedData} setPage={setPage} type={Upcoming} showUpcoming={showUpcoming} showTopMovies={showTopMovies} showPopMovies={showPopMovies} showTranding={showTranding} content={'upcoming'} nom={'Recent'} />
        <Tab showedData={showedData} setshowedData={setshowedData} setPage={setPage} type={Tranding} showUpcoming={showUpcoming} showTopMovies={showTopMovies} showPopMovies={showPopMovies} showTranding={showTranding} content={'tranding'} nom={'Tranding'} />
        </div>
    )
}
function EmptyList(hidden) {
    return (
        <div className="flex items-center justify-center flex-col w-full h-full">
            <span className=" text-9xl m-5 text-Secondbm">  <GiPopcorn1 /></span>
            <strong className="p-2 text-Secondbm">{hidden?"no movies found ":"hidden section"}</strong>
        </div>
    )
}
function Tab({ showedData, setshowedData, setPage, type, showTopMovies, showPopMovies, showUpcoming, showTranding, content, nom }) {
    function getData(content) {
        if (content==='upcoming') showUpcoming();
        if (content==='tranding') showTranding();
        if (content==='topMovies') showTopMovies();
        if (content==='popMovies') showPopMovies();
    }
    return (
        <div className={`tabsButton cursor-pointer transition duration-100 ${showedData === content?'bg-Secondbm scale-105':' border-2  border-Secondbm text-Secondbm opacity-50'}`}  onClick={() => {
                setPage(1)
                if (showedData!==content) setshowedData(content);
                if (showedData!==content&& type.length<=0) getData(content); 
            }}>
            <span className={`  sm:opacity-100 sm:w-full ${showedData === content ? 'w-full opacity-100' : 'opacity-0 w-0'}`} >{nom}</span>    
            {content=== 'upcoming'&&<span className="mx-1 text-xl" ><GiExtraTime1 /></span>}
            {content=== 'tranding'&&<span className="mx-1 text-xl" ><SiFireship1 /></span>}
            {content=== 'popMovies'&&<span className="mx-1 text-xl" ><FaSlideshare1 /></span>}
            {content=== 'topMovies'&&<span className="mx-1 text-xl" ><IoIosPodium1 /></span>}    
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