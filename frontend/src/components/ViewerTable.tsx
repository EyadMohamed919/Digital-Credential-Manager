import React, {useState, useEffect} from "react";
import axios from "axios";

function ViewerTable()
{
    interface person 
    {
        name:string,
        certificateType: string,
        status:string,
        date:Date
    }

    const [isLoading, setLoading] = useState<Boolean>(true);

    const [people, setPeople] = useState<person[]>([{
        name:"Eyad",
        certificateType: "Certificate of Recognition",
        status: "pending",
        date: new Date("11-12-2025")
    }]);

    useEffect(()=> {
        const fetchData = async ()=>{
            try {
                const response = await axios("https://dummyjson.com/users");
                const data = await response.data;
                const firstFiveUsers = data.users.slice(0, 5);
                const newPeople:person[] = firstFiveUsers.map((user:any)=>{
                    return {
                    name: user.firstName,
                    certificateType: user.company.department,
                    status:"approved",
                    date: new Date("11-12-2025")
                    }
                });
                setPeople(newPeople);
                setLoading(false);
            } catch (error) {
                
            }
            
        }

        fetchData();
    }, [])

    return(
        <div className="w-full h-fit border-none border-2 rounded-md border-sky-600 mt-1 pt-2 pb-2">
            {!isLoading ?
            (<table className="w-full h-fit max-h-[200px]">
                <thead className="bg-sky-600/25 rounded-lg">
                    <td className="pl-2 pt-2 pb-3 text-sky-900 border-none border-2 mr-2">Student Name</td>
                    <td className="pl-2 pt-2 pb-3 text-sky-900 border-none border-2 mr-2">Certificate Type</td>
                    <td className="pl-2 pt-2 pb-3 text-sky-900 border-none border-2 mr-2">Status</td>
                    <td className="pl-2 pt-2 pb-3 text-sky-900 border-none border-2 mr-2">Applying Date</td>
                    <td className="pl-2 pt-2 pb-3 text-sky-900 border-none border-2 mr-2">Actions</td>
                </thead>

                {
                    people.map((person:person)=>{
                        return(
                            <tr className="bg-sky-600/10">
                                <td className="pl-2 pt-1 pb-1">{person["name"]}</td>
                                <td className="pl-2 pt-1 pb-1">{person["certificateType"]}</td>
                                {
                                    person["status"] == "pending" ? (<td className="pl-2 pt-1 pb-1 "><p className="bg-gray-800 text-white w-fit p-1 pr-3 pl-3 rounded-full"><i className="fa-solid fa-hourglass-half mr-1"></i>Pending</p></td>) :
                                    (<td className="pl-2 pt-1 pb-1"><p className="bg-lime-300 text-lime-800 w-fit p-1 pr-3 pl-3 rounded-full"><i className="fa-solid fa-circle-check mr-1"></i>Approved</p></td>)
                                }
                                
                                <td className="pl-2 pt-1 pb-1">{person["date"].toLocaleDateString()}</td>
                                <td className="pl-2 pt-1 pb-1">See Details</td>
                            </tr>
                        )
                    })
                }
                
            </table>):(<h3>Loading..</h3>)
            }
        </div>
    );
}

export default ViewerTable;