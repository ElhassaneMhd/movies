import {  useEffect, useState } from 'react'
import {IoMdReturnLeft1, PiFilePlusFill1,TiStarFullOutline1,IoMdCloseCircle1} from '../icons'
export function DetailedMovie({ detailedMovie, setdetailedMovie, onLoad,addToWatchedListe,watchedListe,setshowWatchedList,setaddedMovie }) {
    const [readMore, setReadMore] = useState(false)
    useEffect(() => {
        detailedMovie?
        document.title=detailedMovie.original_title:
        document.title='popcorne'
    }, [detailedMovie])
    
    const[alreadyExists,setalreadyExists]=useState(false)
    function checkAfterAdd() {
        console.log(detailedMovie)
        !watchedListe.map(movie => movie).includes(detailedMovie)
            ? setaddedMovie(detailedMovie) 
            : setalreadyExists(true)
        console.log(alreadyExists)
    }

    return (
    <div className='bg-bleuM-300 h-[90%] w-[90%] md:h-[70dvh] md:w-5/6 p-3 rounded-md border-bleuM-200 border '>
        <div className='h-full w-full relative overflow-auto'>
                {onLoad &&
                    <div className='h-full text-center flex items-center justify-center w-full'>
                        <div className="flex flex-row gap-2">
                            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
                            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]" />
                            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
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
                        <div className=' w-full md:w-[50%] flex flex-col gap-2 p-2'>
                            <p className='flex gap-1 items-center' onClick={() => console.log(detailedMovie)}> imdb rating :{detailedMovie.vote_average.toFixed(2)}
                                <span className='text-lg text-yellow-400'><TiStarFullOutline1 /></span>
                            </p>
                            <p className='flex items-center  gap-1 flex-wrap'>
                              genres :   {detailedMovie.genres.map(e=><span className='px-1 bg-Secondbm rounded-md'>{e.name}</span>)}
                            </p>
                            <p>
                                runtime : {detailedMovie.runtime } min
                            </p>
                              <div className='flex gap-1'>
                            <button className='flex bg-bleuM-400 items-center p-1 rounded-md hover:scale-105 ' onClick={() => { checkAfterAdd(); setdetailedMovie(null); setshowWatchedList(true)}} ><span><PiFilePlusFill1/></span> watche liste </button>
                            <a target='_blank' rel='noreferrer' href={detailedMovie?.homepage} className='flex bg-bleuM-400 hover:scale-105 items-center p-1 rounded-md  '>Web Site</a>
                        </div>  
                        </div>
                </div>     
                <div className='summary p-2 mx-1'>
                        Story :
                        <div className='my-2 italic'>
                        {readMore
                            ?<p className='cursor-pointer p-2 rounded-md transitcion duration-500 hover:bg-bleuM-400' onClick={() => setReadMore(false)} >{detailedMovie.overview }... </p>  
                            :<p className='cursor-pointer p-2 rounded-md  transition duration-500 hover:bg-bleuM-400' onClick={() => setReadMore(true)} >{detailedMovie.overview.slice(0, 200)}</p>
                        }
                    </div>
                    
                </div>
            </>
                }   
        </div>
    </div>
    )
}