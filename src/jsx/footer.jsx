import { FaGithub1, FaRegCopyright1 } from "../icons";

export function Footer() {
    return (
        <>
            <div className=" p-3 m-1 mt-0 rounded-xl bg-bleuM-100 text-xl text-white flex justify-center items-center flex-col ">
                <span className="flex text-sm items-center"> {('all right reserved by Winnery05').toUpperCase()} <span className="ms-2"><FaRegCopyright1/> </span> </span>
                <a href="https://github.com/Winnery05/movies" className="flex items-center hover:text-Secondbm">Git hub<span className="ms-2"><FaGithub1/> </span> </a>
                
            </div>
        </>
    )
}