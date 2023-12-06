
import {  MdManageSearch1,SiThemoviedatabase1} from '../icons'

export function Header({toSearch,onFined, setToSearch}) {
  return (
    <div className="header m-1 mb-0 p-3 rounded-xl text-white bg-bleuM-100 flex justify-between items-center font-bold">
      <Logo />
      <InputToSearch findFilm={onFined} setToSearch={setToSearch}/>
      <FindedResults toSearch={toSearch}/>
    </div>
  );
}
function InputToSearch({setToSearch,findFilm}) {
  return (
    <div className="relative mx-2">
        <input
          maxLength={50}
          className="p-2 rounded-xl outline-none  border-none focus:border-none focus:outline-none focus:p-2 pe-[30px] focus:pe-[30px] font-bold text-white bg-Secondbm"
        onChange={(e) => {
          setToSearch(e.target.value.trim())
          findFilm()
        }}
          type="text"
          placeholder="Search for a movie"
        />
        <span  className="absolute right-0 top-0 grid place-items-center w-8 h-full text-2xl hover:scale-125 text-white cursor-pointer">
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
function FindedResults({toSearch}) {
  return (
    <span className="hidden md:inline-block">{toSearch ? `Searching for: ${toSearch}` : "No item found"}</span>
  )
}