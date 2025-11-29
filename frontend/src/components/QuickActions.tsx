import React from "react";

function QuickActions()
{
    return(
        <div className="w-full h-28 mt-5 flex flex-row justify-between
        items-center">
            <button className="h-full w-[32%] bg-gradient-to-br from-sky-400 to-sky-500 rounded-md text-2xl transition-all duration-150
            hover:bg-blue-950 hover:text-white">Grant Certificate</button>
            <button className="h-full w-[32%] bg-gradient-to-br from-sky-400 to-sky-500 rounded-md text-2xl transition-all duration-150
            hover:bg-blue-950 hover:text-white">Grant Certificate</button>
            <button className="h-full w-[32%] bg-gradient-to-br from-sky-400 to-sky-500 rounded-md text-2xl transition-all duration-150
            hover:bg-blue-950 hover:text-white">Grant Certificate</button>
        </div>
    );
}

export default QuickActions;