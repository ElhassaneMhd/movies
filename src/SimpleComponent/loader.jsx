export function Loader() {
    return (
        <div className="h-[70vh] w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 overflow-hidden">
            {Array.from({length:30},(e,i)=><Load key={i}/> )}
        </div>
    )
}
function Load() {
    return (
        <div className=" h-fit flex-col flex gap-1 items-center animate-pulse p-1">
            <div className="w-full h-[280px] md:[300px] flex items-center border border-Secondbm" >
                <div className="flex-col gap-4 w-full flex items-center justify-center">
                    <div className="w-16 h-16 border-8 text-Secondbm text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-Secondbm rounded-full" />
                </div>
            </div>
            <p className=" w-3/4 h-4 rounded-lg bg-Secondbm " />
            <p className="w-1/4 h-3 rounded-lg bg-Secondbm  " />
        </div> 
    )
}