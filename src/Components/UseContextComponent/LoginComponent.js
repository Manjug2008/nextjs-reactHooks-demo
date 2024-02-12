import { useContext } from "react"
import { AppComponentContext} from './UseContextComponent'
export const LoginComponent = ()=>{

    const appUseContext = useContext( AppComponentContext)
    const {setUserText} = appUseContext

    return(
        <>
         <div>
            <input
            placeholder='Eneter login user id'
            onChange={(e)=>{setUserText(e.target.value)}}
            />
         </div>
        </>
    )
}