
function SideBar()
{
    return(
        <aside className="w-[20%] m-auto ml-0 h-full flex 
        bg-gradient-to-b from-sky-600 to-sky-800
        justify-start items-center flex-col">
            <div className="w-[80%] m-auto mt-5">
                <a href="Dashboard" className="w-full text-white flex min-w-fit p-2 
                bg-white/20 border-solid border border-white rounded-md text-lg justify-start items-center
                transition-all hover:bg-white hover:text-sky-700"><i className="fa-solid fa-gauge justify-start flex items-center mr-1 text-sky-700 bg-white border-solid border border-white rounded-md p-2"></i>Dashboard</a>
                
            </div>
        </aside>
    );
}

export default SideBar;