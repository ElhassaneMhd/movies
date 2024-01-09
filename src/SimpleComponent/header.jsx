
import {  MdManageSearch1,SiThemoviedatabase1,CiMenuKebab1} from '../icons'

export function Header({toSearch,findedByName,setFindedByName, setToSearch,showByname,setshowWatchedList}) {
  return (
    <div className="header m-1 mb-0 p-1 px-5 rounded-md text-white bg-black flex justify-between items-center">
      <Logo />
      <InputToSearch toSearch={toSearch } setFindedByName={setFindedByName} showByname={showByname} setToSearch={setToSearch}/>
      <FindedResults findedByName={findedByName} toSearch={toSearch} />
        <div onClick={()=>setshowWatchedList(true)} className='cursor-pointer'>
          <span className='text-2xl' ><CiMenuKebab1 /></span>
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
    <form onSubmit={(e)=>handlSumit(e)} className=" relative mx-2 w-[70%]">
      <input
        autoFocus={true}
          maxLength={20}
        className="peer p-2 rounded-md outline-none  border-none focus:scale-x-105 transition duration-500 focus:border-none w-[100%] focus:outline-none focus:p-2 pe-[30px] focus:pe-[30px] font-bold text-white bg-Secondbm"
        
        onChange={(e) => {
          e.target.value.trim().length >= 2 ? setToSearch(e.target.value):setToSearch('')
          e.target.value.trim().length >= 4&&showByname(toSearch,setFindedByName)
          e.target.value.trim().length < 2 && setFindedByName([])
        }}
          type="text"
          placeholder="Search for a movie"
        />
        <span onClick={()=>  showByname(toSearch,setFindedByName)}  className="absolute right-0 top-0 grid place-items-center w-8 h-full text-2xl hover:scale-125 text-white cursor-pointer transition duration-500 peer-focus:translate-x-2">
          <MdManageSearch1 className="icon " />
        </span>
      </form>
  )
}
function Logo() {
  return (
      <span className="h-full text-6xl hover:scale-105  cursor-pointer" onClick={()=>(window.location.reload())} > <SiThemoviedatabase1 /></span>
  )
}
function FindedResults({toSearch,findedByName}) {
  return (
    <div className=' flex-col justify-end hidden md:flex w-fit text-right'>
      <span >{toSearch ? ` ${toSearch}` : " 0 item found"}</span>
      <span >{findedByName.length>0 && `${findedByName.length} item finded`}</span>
    </div>
  )
}