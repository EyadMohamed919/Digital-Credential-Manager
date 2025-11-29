import SideBarButton from "./SideBarButton";
function SideBar()
{
    return(
        <aside className="w-[20%] m-auto ml-0 h-full flex 
        bg-gradient-to-b from-sky-600 to-sky-800
        justify-start items-center flex-col">
            <div className="w-[80%] m-auto mt-5">
                
                <SideBarButton icon={"fa-solid fa-gauge"} name={"Dashboard"} />
                <SideBarButton icon={"fa-solid fa-certificate"} name={"Edit Certificates"} />
                <SideBarButton icon={"fa-solid fa-user"}  name={"Granted People"} />
                <SideBarButton icon={"fa-solid fa-gear"}  name={"Settings"} />

            </div>
        </aside>
    );
}

export default SideBar;