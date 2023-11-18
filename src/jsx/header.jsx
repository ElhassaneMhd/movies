import { useState } from "react";
import {  MdManageSearch1,SiThemoviedatabase1} from '../icons'

export function Header() {
  const [toSearch, setToSearch] = useState('');

  return (
    <div className="header">
      <span className="h-full text-6xl hover:scale-105 " > <SiThemoviedatabase1 /></span>
      <div className="relative">
        <input
          onChange={(e) => setToSearch(e.target.value)}
          type="text"
          placeholder="Search for a movie"
        />
        <span className="absolute right-0 top-0 grid place-items-center w-8 h-full text-2xl text-white">
          <MdManageSearch1 className="icon" />
        </span>
      </div>
      <span>{toSearch ? `Searching for: ${toSearch}` : "No item found"}</span>
    </div>
  );
}



