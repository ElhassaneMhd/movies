import {  useState } from 'react'
import {IoMdReturnLeft1, PiFilePlusFill1} from '../icons'
export function DetailedMovie({ detailedMovie, setdetailedMovie, onLoad,addToWatchedListe,watchedListe,PiFilePlusFill }) {
    const [readMore, setReadMore] = useState(false)
    function checkAfterAdd() {
       addToWatchedListe([...watchedListe.filter(el => el.id !== detailedMovie.id)])
        addToWatchedListe([...watchedListe,detailedMovie])
    }

    return (
    <>
        <div className='h-full w-full overflow-hidden'>
            {onLoad&& <p>Loding</p>}
            {detailedMovie && !onLoad &&
            <>
                <div className='headerDetailed flex justify-between w-full'>
                    <span className=" text-white m-1 cursor-pointer grid place-content-center self-end  text-2xl hover:scale-105" onClick={() => setdetailedMovie(null)}><IoMdReturnLeft1 /></span>
                     <strong key={detailedMovie.id} className="">
                        {detailedMovie.original_title}
                    </strong>
                </div>
                <div className='w-full flex flex-col'> 
                    <div className=" w-full flex items-center relative">
                        <img className="rounded-md  my-1 border border-white brightness-50" src={detailedMovie.backdrop_path?"https://image.tmdb.org/t/p/original"+detailedMovie.backdrop_path:'/images/imgNotFound.png'} alt={detailedMovie.original_title.slice(0,10)} />
                        <img className="rounded-md w-[100px] h-[120px]  absolute m-1 border border-white  " src={detailedMovie.poster_path ? "https://image.tmdb.org/t/p/w300" + detailedMovie.poster_path : '/images/imgNotFound.svg'} alt={detailedMovie.original_title.slice(0, 10)} />
                        <div  className="rounded-md w-[70px]  p-1 bottom-1  right-0   absolute m-1 border border-white bg-white">
                            <img className="" src={detailedMovie.production_companies.at(0).logo_path?"https://image.tmdb.org/t/p/w300"+detailedMovie.production_companies.at(0).logo_path    :'/images/imgNotFound.svg'} alt={detailedMovie.original_title.slice(0,10)} />
                        </div>
                    </div>
                </div>
                <div className='summary p-1 mx-1'>
                    <p>
                        {readMore
                            ? <p>{detailedMovie.overview }<span className=' cursor-pointer font-bold text-Secondbm' onClick={() => setReadMore(false)} >read less</span> </p>  
                            :<p>{detailedMovie.overview.slice(0, 100)}...<span className=' cursor-pointer font-bold text-Secondbm' onClick={() => setReadMore(true)} >read more</span></p>
                        }
                    </p>
                </div>
                    <div>
                        <button className='flex bg-yellow-500 items-center p-1 rounded-md hover: ' onClick={()=>checkAfterAdd()} ><span><PiFilePlusFill1/></span> watche liste </button>
                    </div>    
            </>
                }   
                
        </div>
    </>
    )
}