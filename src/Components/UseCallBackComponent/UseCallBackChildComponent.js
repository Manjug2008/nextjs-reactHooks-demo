import { useEffect } from "react"


export const UseCallBackChildComponent = ({handleFunction})=>{

    useEffect(()=>{
        console.log('function is called')

    },[handleFunction])


    return(
        <div>

        
            <h1>{handleFunction()}</h1>
        </div>
    )
}