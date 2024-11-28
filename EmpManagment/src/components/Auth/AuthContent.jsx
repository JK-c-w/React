import React, { Children, createContext, useEffect, useState } from "react";
import setLocalItem, { getLocalItem } from "../../content/LocalStorage";


export const   AuthContext = createContext();
function AuthContent ({children}){
    const [Data,setData] =useState();
    useEffect(() => {
        setLocalItem();
        const {employee}=getLocalItem();
        console.log(employee)
        setData(employee);
    },[])
    return (
        <> 
         <AuthContext.Provider value={[Data,setData]} >
            <div>{children}</div>
         </AuthContext.Provider>
        </>
    )
}
export default AuthContent;