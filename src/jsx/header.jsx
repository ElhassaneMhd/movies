
import {  MdManageSearch1,SiThemoviedatabase1} from '../icons'

export function Header({toSearch,finded,getData,setMovieData, setToSearch}) {
  return (
    <div className="header m-1 mb-0 p-3 rounded-xl text-white bg-bleuM-100 flex justify-between items-center">
      <Logo />
      <InputToSearch setMovieData={setMovieData} getData={getData} setToSearch={setToSearch}/>
      <FindedResults finded={finded} toSearch={toSearch}/>
    </div>
  );
}
function InputToSearch({ setMovieData, setToSearch, getData }) {
  function handlSumit(e) {
    e.preventDefault()
    getData()
  }
  return (
    <form onSubmit={(e)=>handlSumit(e)} className="group relative mx-2 w-[70%]">
      <input
        autoFocus={true}
          maxLength={50}
          className="peer p-2 rounded-xl  outline-none  border-none focus:scale-x-105 transition duration-500 focus:border-none w-[100%] focus:outline-none focus:p-2 pe-[30px] focus:pe-[30px] font-bold text-white bg-Secondbm"
        onChange={(e) => {
          e.target.value.length >= 2
          ? setToSearch(e.target.value.trim())
            : (setToSearch(e.target.value.trim()) )
          e.target.value.length>=4&&getData()
          e.target.value.length<2&& setMovieData([])
        }}
          type="text"
          placeholder="Search for a movie"
        />
        <span onClick={()=>  getData()}  className="absolute right-0 top-0 grid place-items-center w-8 h-full text-2xl hover:scale-125 text-white cursor-pointer transition duration-500 peer-focus:translate-x-2">
          <MdManageSearch1 className="icon " />
        </span>
      </form>
  )
}
function Logo() {
  return (
      <span className="h-full text-6xl hover:scale-105 " > <SiThemoviedatabase1 /></span>
  )
}
function FindedResults({toSearch,finded}) {
  return (
    <div className=' flex-col justify-end hidden md:flex w-fit text-right'>
      <span >{toSearch ? ` ${toSearch}` : " item found"}</span>
      <span >{finded.length>0 && `${finded.length} item finded`}</span>
    </div>
  )
}