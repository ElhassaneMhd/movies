
import {  FaSearch1,SiThemoviedatabase1,CiMenuKebab1} from '../icons'

export function Header({toSearch,findedByName,setFindedByName, setToSearch,showByname,setshowWatchedList}) {
  return (
    <div>
    <div className="header m-1 mb-0 p-1 ps-5 rounded-md text-white bg-black flex justify-between items-center">
        <Logo />
        <div className='w-[70%] hidden sm:flex'>
          <InputToSearch toSearch={toSearch } setFindedByName={setFindedByName} showByname={showByname} setToSearch={setToSearch}/>
        </div>
      <FindedResults findedByName={findedByName} toSearch={toSearch} />
        <div onClick={()=>setshowWatchedList(true)} className='cursor-pointer'>
          <span className='text-4xl text-Secondbm' ><CiMenuKebab1 /></span>
      </div>
      </div>
      <div className='flex justify-center sm:hidden'>
         <InputToSearch toSearch={toSearch } setFindedByName={setFindedByName} showByname={showByname} setToSearch={setToSearch}/>
      </div>
    </div>
  );
}
function InputToSearch({ setFindedByName,toSearch, setToSearch ,showByname}) {
  function handlSumit(e) {
    e.preventDefault()
    showByname(toSearch,setFindedByName)
  }
  return (
    <form onSubmit={(e)=>handlSumit(e)} className=" relative mx-2 w-full">
      <input
        autoFocus={true}
          maxLength={20}
        className="peer p-2 rounded-md outline-none border-none sm:scale-x-75 sm:focus:scale-x-100 transition duration-500 focus:border-none w-[100%] focus:outline-none focus:p-2 pe-[30px] focus:pe-[30px] font-bold text-black bg-Secondbm placeholder:text-black placeholder:opacity-40"
        
        onChange={(e) => {
          e.target.value.trim().length >= 2 ? setToSearch(e.target.value.trim()):setToSearch('')
          e.target.value.trim().length >= 4&&showByname(toSearch,setFindedByName)
          e.target.value.trim().length < 2 && setFindedByName([])
        }}
          type="text"
          placeholder="Search for a movie"
        />
        <span onClick={()=>  showByname(toSearch,setFindedByName)}  className="absolute right-0 top-0 grid place-items-center w-8 h-full text-xl hover:scale-105 text-black bg-Secondbm rounded-md cursor-pointer transition border-s-2 border-black duration-500 sm:-translate-x-14  md:peer-focus:translate-x-2">
          <FaSearch1 className="icon " />
        </span>
      </form>
  )
}
function Logo() {
  return (
      <span className="h-full text-6xl hover:scale-105 text-Secondbm  cursor-pointer" onClick={()=>(window.location.reload())} > <SiThemoviedatabase1 /></span>
  )
}
function FindedResults({toSearch,findedByName}) {
  return (
    <div className=' flex-col text-center flex w-fit '>
      <span >{toSearch ? ` ${toSearch}` : ""}</span>
      <span >{findedByName.length>0 && `${findedByName.length} movies finded`}</span>
    </div>
  )
}