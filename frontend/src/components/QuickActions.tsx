import React from "react";
import { Link } from "react-router-dom";
function QuickActions()
{
    return(
        <div className="w-full h-28 mt-5 flex flex-row justify-between
        items-center">
            <Link to="name" className="quick-action-button">Grant Certificate</Link>
            <Link to="name" className="quick-action-button">
                Set Templates
            </Link>
            <Link to="name" className="quick-action-button">Grant Certificate</Link>
        </div>
    );
}

export default QuickActions;