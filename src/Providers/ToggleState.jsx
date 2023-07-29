import { createContext, useState } from "react";

export const ToggleContext= createContext(null);

const ToggleState = ({children}) => {
    const [toggle,setToggle]=useState(false);
    const [activeRoute,setRouteName]=useState('Dashboard');

    const toggleState={
        toggle,
        setToggle,
        activeRoute,
        setRouteName
    };
    
    return (
        <ToggleContext.Provider value={toggleState}>
            {children}
        </ToggleContext.Provider>
    );
};

export default ToggleState;