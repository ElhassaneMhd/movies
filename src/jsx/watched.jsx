import {
    MdDeleteForever1,
    IoMdCloseCircle1,
    FcRating1,
    PiClockCounterClockwiseDuotone1,
    RiUserStarLine1,
    RiFileList3Line1,
} from "../icons.jsx";
export function WatchedMovies({ watchedListe ,setToWatchedListe,setshowWatchedList}) {
    function handelDelet(id) {
        setToWatchedListe(watchedListe.filter((e) => e?.id !== id));
    }
    return (
    <div className="relative  bg-bleuM-300 rounded-md h-[90%] w-[90%] md:h-[70dvh] md:w-5/6 border-bleuM-200 border">
        {(watchedListe.length > 0)? (
            <>
                <HeaderWatched  setshowWatchedList={setshowWatchedList} watchedListe={watchedListe} />
                <Allmovies watchedListe={watchedListe} handelDelet={handelDelet}/>
            </>
        ) :  (
                <EmptyListe watchedListe={watchedListe} setshowWatchedList={setshowWatchedList} hidden={false}/>
            )
        }
    </div>
    );
}
function HeaderWatched({watchedListe,show,handelShow,setshowWatchedList}) {
    return (
        <div className="absolute w-full z-10">
            <Showbtn show={show} setshowWatchedList={setshowWatchedList} handelShow={handelShow} />
            <p className="flex  justify-around items-center w-full p-1 mb-2 shadow-md shadow-black rounded-md bg-Secondbm " >              
                <span> #{watchedListe.length} movies </span>
            </p>
        </div>
    )
}
function Showbtn({setshowWatchedList}) {
    return (
        <span
            className="absolute cursor-pointer grid place-content-center self-end right-0 m-1 text-red-600 rounded-full text-xl hover:animate-spin "
            onClick={()=>setshowWatchedList(false)}
        >
        <IoMdCloseCircle1 />
        </span>
    )
}
function Allmovies({watchedListe,handelDelet}) {
    return (
        <div className="grid grid-cols-3 snap-y pt-8 h-full overflow-y-scroll scrollbar-thumb-Secondbm  scrollbar-thin scrollbar-thumb-rounded-full ">
            {watchedListe.length > 0 && watchedListe.map((movie) => (
                <MovieCrad key={movie?.id} movie={movie} handelDelet={handelDelet } />
            ))}
        </div>
    )
}
function EmptyListe({hidden,setshowWatchedList}) {
    return (
        <>
            <Showbtn  setshowWatchedList={setshowWatchedList} />
            <p className="p-3 mb-2  text-black rounded-md  bg-Secondbm ">
                0 watched movie
            </p>
            <div className="flex items-center text-Secondbm justify-center flex-col">
                <span className=" text-9xl  m-5">  <RiFileList3Line1 /></span>
                <strong className="p-2">{hidden? 'your watch liste is hidden':'your watch liste is empty'}</strong>
            </div>
        </>
    )
}
function MovieCrad({ movie, handelDelet }) {
    return (
        <div key={movie?.id} className="group grid-rows-[repeat(auto-fit,minmax(100px,1fr))] grid grid-cols-[auto,1fr] m-1 rounded-xl bg-Secondbm snap-center">
            <MovieImg handelDelet={handelDelet} movie={movie}/>
            <MovieInfos movie={movie}/>            
        </div>
    )
}
function MovieInfos({ movie }) {
    return(
        <div className="flex flex-wrap flex-col w-fit">
            <strong className="m-1 text-xl">{movie?.original_title}</strong>{" "}
            {movie?.vote_average && <span className="m-1 mx-2 flex justify-start items-center"> imdb : <strong> { movie?.vote_average.toFixed(2)}</strong>  <span className="ms-1">  <FcRating1 /></span></span>}
            {movie?.userRating && <span className="m-1 mx-2 flex justify-start items-center"> user  :  <strong> {movie?.userRating}</strong>  <span className="ms-1 text-xl text-yellow-500"> <RiUserStarLine1 /></span></span>}
            {movie?.runtime && <span className="m-1 mx-2 flex justify-start items-center"> run time : <strong > {movie?.runtime} </strong> fois <span className="text-xl ms-1"> <PiClockCounterClockwiseDuotone1 /></span> </span>}              
        </div >
    )
}
function MovieImg({ movie,handelDelet}) {
    return (
        <div className=" w-[100px] h-[150px] flex items-center relative">
                <img className="absolute  rounded-xl m-1 border border-white w-[90%] h-[90%] " src={movie?.poster_path?"https://image.tmdb.org/t/p/w300"+movie?.poster_path:'/images/imgNotFound.svg'} alt={movie?.original_title.slice(0,10)} />
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