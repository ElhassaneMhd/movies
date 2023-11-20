import { useState } from "react";
import {  MdManageSearch1,SiThemoviedatabase1} from '../icons'

export function Header() {
  const [toSearch, setToSearch] = useState('');

  return (
    <div className="header m-1 mb-0 p-3 rounded-xl text-white bg-bleuM-100 flex justify-between items-center font-bold">
      <span className="h-full text-6xl hover:scale-105 " > <SiThemoviedatabase1 /></span>
      <div className="relative mx-2">
        <input
          className="p-2 rounded-xl outline-none  border-none focus:border-none focus:outline-none focus:p-2 pe-[30px] focus:pe-[30px] font-bold text-white bg-Secondbm"
          onChange={(e) => setToSearch(e.target.value)}
          type="text"
          placeholder="Search for a movie"
        />
        <span className="absolute right-0 top-0 grid place-items-center w-8 h-full text-2xl text-white">
          <MdManageSearch1 className="icon" />
        </span>
      </div>
      <span className="hidden md:inline-block">{toSearch ? `Searching for: ${toSearch}` : "No item found"}</span>
    </div>
  );
}



