import React from "react";

function SideBarButton({name, icon}:{name:string, icon:string})
{
    let iconText:string = icon + ' justify-start flex items-center mr-1 text-sky-700 bg-white border-solid border border-white rounded-md p-2'; 
    return(
        <a href="name" className="w-full text-white flex min-w-fit p-2 mt-2
                bg-white/20 border-solid border border-white rounded-md text-lg justify-start items-center
                transition-all hover:bg-white hover:text-sky-700">
                    <i className={iconText}>
                        </i>{name}</a>
    );
}

export default SideBarButton;