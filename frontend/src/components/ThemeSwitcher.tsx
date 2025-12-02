import { createContext, useContext,useState } from "react";
import React from "react";
import { ThemeGlobalVariable } from "./global/ThemeContext";

function ThemeSwitcher({ children }: { children: React.ReactNode })
{
    
    const [isDark, setIsDark] = useState<boolean>(true);
    return (
        
        <ThemeGlobalVariable.Provider value={isDark}>
            {children}
        {isDark ? 
        (<button onClick={()=>setIsDark(!isDark)} className="absolute right-10 bottom-6 bg-black text-white p-3 px-5 rounded-full
        border-2 border-gray-400 border-solid">Dark Mode</button>)
        :

        (<button onClick={()=>setIsDark(!isDark)} className="absolute right-10 bottom-6 bg-white text-black p-3 px-5 rounded-full
        border-2 border-gray-400 border-solid">Light Mode</button>)}
     </ThemeGlobalVariable.Provider>
     );
}

export default ThemeSwitcher;