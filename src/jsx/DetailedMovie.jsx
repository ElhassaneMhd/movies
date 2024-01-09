import {  useEffect, useState } from 'react'
import {IoMdReturnLeft1, PiFilePlusFill1,TiStarFullOutline1,IoMdCloseCircle1} from '../icons'
export function DetailedMovie({ detailedMovie, setdetailedMovie, onLoad,addToWatchedListe,watchedListe,setshowWatchedList }) {
    const [readMore, setReadMore] = useState(false)
    useEffect(() => {
        detailedMovie?
        document.title=detailedMovie.original_title:
        document.title='popcorne'
    },[detailedMovie])
    const[alreadyExists,setalreadyExists]=useState(false)
    function checkAfterAdd() {
        !watchedListe.map(movie => movie.id).includes(detailedMovie.id) 
            ? addToWatchedListe([...watchedListe, detailedMovie])
            : setalreadyExists(true)
        console.log(alreadyExists)
    }

    return (
    <div className='bg-black w-3/4 p-3 rounded-md border'>
        <div className='h-full w-full relative overflow-auto'>
                {onLoad &&
                    <div className='h-full text-center flex items-center justify-center w-full'>
                        <div className="flex flex-row gap-2">
                            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                        </div>
                    </div>}
            {detailedMovie && !onLoad &&
            <>
                <div className='headerDetailed flex justify-between items-center w-full'>
                        <span className=" text-white m-1 cursor-pointer grid place-content-center self-end  text-2xl hover:scale-105" onClick={() => { setshowWatchedList(true);  setdetailedMovie(null)}}><IoMdReturnLeft1 /></span>
                     <strong key={detailedMovie.id} className="">
                        {detailedMovie.original_title}
                    </strong>
                    <span className=" text-white m-1 cursor-pointer grid place-content-center self-end  text-2xl hover:scale-105" onClick={() => setdetailedMovie(null)}><IoMdCloseCircle1 /></span>
                </div>
                <div className='w-full flex-col md:flex-row flex-wrap flex'> 
                    <div className=" w-full  md:w-[50%] flex ">
                        <img className="brightness-50 rounded-md" src={detailedMovie.backdrop_path?"https://image.tmdb.org/t/p/original"+detailedMovie.backdrop_path:'/images/imgNotFound.png'} alt={detailedMovie.original_title.slice(0,10)} />
                        </div>
                        <div className=' w-full md:w-[50%] p-2'>
                            <p className='flex gap-1 items-center' onClick={() => console.log(detailedMovie)}> imdb rating :{detailedMovie.vote_average.toFixed(2)}
                                <span className='text-lg'><TiStarFullOutline1 /></span>
                            </p>
                            <p className='flex items-center gap-1'>
                              genres :   {detailedMovie.genres.map(e=><span className='px-1 bg-bleuM-100 rounded-md'>{e.name}</span>)}
                            </p>
                            <p>
                                runtime : {detailedMovie.runtime } min
                            </p>
                        </div>
                </div>     
                <div className='summary p-2 mx-1'>
                    <div className='my-2'>
                        {readMore
                            ?<p className='cursor-pointer p-2 rounded-md transitcion duration-500 hover:bg-bleuM-300' onClick={() => setReadMore(false)} >{detailedMovie.overview }... </p>  
                            :<p className='cursor-pointer p-2 rounded-md  transition duration-500 hover:bg-bleuM-300' onClick={() => setReadMore(true)} >{detailedMovie.overview.slice(0, 200)}</p>
                        }
                    </div>
                     <div className='flex gap-1'>
                            <button className='flex bg-yellow-500 items-center p-1 rounded-md hover:bg-bleuM-300 ' onClick={() => { checkAfterAdd(); setdetailedMovie(null); setshowWatchedList(true)}} ><span><PiFilePlusFill1/></span> watche liste </button>
                            <a target='_blank' rel='noreferrer' href={detailedMovie?.homepage} className='flex bg-yellow-500 items-center p-1 rounded-md hover:bg-bleuM-300 '>Web Site</a>
                        </div>   
                </div>
            </>
                }   
        </div>
    </div>
    )
}