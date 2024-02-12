
/**
 * useImperativeHandle hook to call function from child component useRef and forwardRef
 * useRef in parent component and forwardRef in child component
 * below is the example for parent and child component
 * 
 * Also useImperativeHandle hook use in child to sub child component for this example which is optional
 * 
 */

import { useRef } from "react"
import { ChildButtonComponent } from "./ChildButtonComponent"


export const UseImperativeHandlerComponent = ()=>{

    const childButtonUseRef = useRef(null)


    return(
        <div>
            <div>
                <h1>Example for use imperative handler</h1>
            </div>

            <div>
                <button onClick={(()=>{childButtonUseRef.current.handleChildImperativeCall()})}>Parent Button</button>
            </div>

            <hr/>

            <ChildButtonComponent ref={childButtonUseRef}/>

        </div>
    )

}