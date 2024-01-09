export function Loader() {
    return (
        <div className="h-[70vh] overflow-hidden">
            <Load/>
            <Load/>
            <Load/>
            <Load/>
            <Load/>
            <Load/>
        </div>
    )
}
function Load() {
    return (
        <div className="w-full flex m-1 animate-pulse gap-2 p-1">
                <div className="h-[90px] w-[70px] m-1 rounded-md bg-slate-400" />
                <div className="flex-1 w-max my-1">
                    <div className="mb-1 w-3/4 h-6 rounded-lg bg-slate-400 text-lg" />
                    <div className="my-1 h-5 w-1/3 rounded-lg bg-slate-400 text-lg" />
                </div>
            </div> 
    )
}