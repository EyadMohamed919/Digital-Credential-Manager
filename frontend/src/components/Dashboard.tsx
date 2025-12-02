import { useContext } from "react";
import SideBar from "./SideBar";
import ViewerTable from "./ViewerTable";
import QuickActions from "./QuickActions";
import { ThemeGlobalVariable } from "./global/ThemeContext";

function Dashboard({email}: {email:string})
{
    const THEME = useContext(ThemeGlobalVariable);
    


    return(
        <main className={THEME ? "main-light" : "main-dark"}>
            <SideBar/>

            <div className=" w-full h-full p-5 ">
                <h1 className="text-5xl">Dashboard</h1>

                {/* <div className="flex justify-between items-center mt-5">
                    <h2 className="text-xl font-thin">Certificates Applications</h2>
                    <button className="p-2 rounded-md text-white bg-sky-600"><i className="fa-solid fa-certificate"></i>Add a New Certificate</button>
                </div> */}

                <QuickActions/>

                <h3 className="text-2xl mt-5">Recent Activities</h3>
                <ViewerTable/>
            </div> 

            
        </main>
    )
}

export default Dashboard;