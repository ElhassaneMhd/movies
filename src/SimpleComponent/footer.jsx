import { FaGithub1, FaRegCopyright1 } from "../icons";

export function Footer() {
    return (
            <div className=" bg-black text-Secondbm flex justify-center items-center flex-col ">
                <a href="https://github.com/Winnery05/movies" className="flex items-center hover:text-Secondbm">Git hub<span className="ms-2"><FaGithub1/> </span> </a>    
                <span className="flex text-sm items-center"> {('MHD HASSAN')} <span className="mx-2"><FaRegCopyright1/> </span> </span>
            </div>
    )
}