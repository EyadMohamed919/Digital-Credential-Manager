
function ViewerTable()
{
    const status:string =  "approved";
    return(
        <div className="w-full h-fit border-none border-2 rounded-md border-sky-600 mt-5 p-2">
            <table className="w-full h-fit">
                <thead className="bg-sky-600/25 rounded-lg">
                    <td className="pl-2 pt-2 pb-3 text-sky-900 border-none border-2 mr-2">Student Name</td>
                    <td className="pl-2 pt-2 pb-3 text-sky-900 border-none border-2 mr-2">Certificate Type</td>
                    <td className="pl-2 pt-2 pb-3 text-sky-900 border-none border-2 mr-2">Status</td>
                    <td className="pl-2 pt-2 pb-3 text-sky-900 border-none border-2 mr-2">Applying Date</td>
                    <td className="pl-2 pt-2 pb-3 text-sky-900 border-none border-2 mr-2">Actions</td>
                </thead>

                <tr className="bg-sky-600/10">
                    <td className="pl-2 pt-1 pb-1">Hamada Ahmed</td>
                    <td className="pl-2 pt-1 pb-1">Certificate of Recognition</td>
                    {
                        status == "pending" ? (<td className="pl-2 pt-1 pb-1 "><p className="bg-gray-800 text-white w-fit p-1 pr-3 pl-3 rounded-full"><i className="fa-solid fa-hourglass-half mr-1"></i>Pending</p></td>) :
                        (<td className="pl-2 pt-1 pb-1"><p className="bg-lime-300 text-lime-800 w-fit p-1 pr-3 pl-3 rounded-full"><i class="fa-solid fa-circle-check mr-1"></i>Approved</p></td>)
                    }
                    
                    <td className="pl-2 pt-1 pb-1">10-25-2025</td>
                    <td className="pl-2 pt-1 pb-1">See Details</td>
                </tr>
            </table>
        </div>
    );
}

export default ViewerTable;