import { FaGithub1, FaRegCopyright1 } from "../icons";

export function Footer() {
    return (
            <div className=" p-1 text-xl text-Secondbm flex justify-center items-center flex-col ">
                <span className="flex text-sm items-center"> {('all right reserved by MHD HASSAN')} <span className="ms-2"><FaRegCopyright1/> </span> </span>
                <a href="https://github.com/Winnery05/movies" className="flex items-center hover:text-Secondbm">Git hub<span className="ms-2"><FaGithub1/> </span> </a>    
            </div>
    )
}