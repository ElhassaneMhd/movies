
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
function InputToSearch({setMovieData,setToSearch,getData}) {
  return (
    <div className="relative mx-2">
      <input
        autoFocus={true}
          maxLength={50}
          className="p-2 rounded-xl outline-none  border-none focus:border-none focus:outline-none focus:p-2 pe-[30px] focus:pe-[30px] font-bold text-white bg-Secondbm"
        onChange={(e) => {
          e.target.value.length >= 2
          ? setToSearch(e.target.value.trim())
          :(setMovieData([]) && setToSearch(e.target.value.trim()) )
          e.target.value.length>=4&&getData()
        }}
          type="text"
          placeholder="Search for a movie"
        />
        <span onClick={()=>  getData()}  className="absolute right-0 top-0 grid place-items-center w-8 h-full text-2xl hover:scale-125 text-white cursor-pointer">
          <MdManageSearch1 className="icon " />
        </span>
      </div>
  )
}
function Logo() {
  return (
      <span className="h-full text-6xl hover:scale-105 " > <SiThemoviedatabase1 /></span>
  )
}
function FindedResults({toSearch,finded}) {
  return (
    <div className='flex flex-col justify-end'>
      <span className="hidden md:inline-block">{toSearch ? `Searching for: ${toSearch}` : " item found"}</span>
      <span className="hidden md:inline-block">{finded.length>0 && `${finded.length} item finded`}</span>
    </div>
  )
}