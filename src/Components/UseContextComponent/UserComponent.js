import { useContext } from "react"
import {AppComponentContext} from './UseContextComponent'


export const UserComponent = ()=>{
    const appUseContext = useContext(AppComponentContext)
    const {userText} = appUseContext

    return(
        <>
         <div>
            <p>User: {userText}</p>
         </div>
        </>
    )
}