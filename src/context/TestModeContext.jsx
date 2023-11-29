import React,{useContext,createContext,useState} from "react";

const TestModeContext = createContext();

export const TestModeContextProvider = ({children})=>{
   
    const [testTime,setTestTime] = useState(15);
    const value ={
        testTime,
        setTestTime,

} 
    return (<TestModeContext.Provider value={value}>{children}</TestModeContext.Provider>)
}

export const useTestMode =()=> useContext(TestModeContext);