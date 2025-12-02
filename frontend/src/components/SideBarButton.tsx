import React from "react";
import { Link } from "react-router-dom";
function SideBarButton({name, icon}:{name:string, icon:string})
{
    let iconText:string = icon + ' sidebar-button-icon'; 
    return(
        <Link to="name" className="sidebar-button"><i className={iconText}></i>{name}</Link>
    );
}

export default SideBarButton;