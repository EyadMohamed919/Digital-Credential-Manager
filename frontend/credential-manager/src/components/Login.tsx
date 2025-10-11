import { useState } from "react";





function Login()
{
    function authenticate()
    {
        if(email.includes("@") && password == "123")
        {
            alert("Welcome");
        }
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className="flex flex-col bg-white/15 rounded-md border-t-[1.5px] border-[0.3px] border-white/20 border-solid h-auto p-5 pt-10 pb-10 w-1/5 m-auto mt-5 mb-5">
                <h1 className="text-2xl m-auto mb-5 text-white ">Welcome</h1>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" className="font-thin border-solid border p-1 border-white/25 mb-2 text-lg bg-white/10 rounded-md text-white" />
                <input value={password} onChange={(e) => setPassword(e.target.value)}  id="" type="text" placeholder="password" className="font-thin border-solid border p-1 border-white/25 mb-2 text-lg bg-white/10 rounded-md text-white" />
                <button onClick={()=>{authenticate()}} className="flex justify-center items-center p-2 mt-4 text-white bg-sky-600/40 border-solid border border-sky-300/25 rounded-md text-lg
                transition-all hover:bg-white hover:text-sky-700
                ">Login</button>
        </div>
    )
}

export default Login;