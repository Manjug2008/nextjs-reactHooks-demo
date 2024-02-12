import React, { createContext, useState } from "react"
import { LoginComponent } from "./LoginComponent"
import { UserComponent } from "./UserComponent"

export const AppComponentContext = createContext()


export const UseContextComponent = ()=>{
    const [userText, setUserText] = useState()


    

    return(
        <div>

            <AppComponentContext.Provider value={{userText, setUserText}}>
             <LoginComponent/>
               <hr/>
             <UserComponent/>
           </AppComponentContext.Provider>

        </div>
    )
}