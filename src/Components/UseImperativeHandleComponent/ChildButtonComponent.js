import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { SubChildButtonComponent } from "./SubChildButtonComponent"

export const ChildButtonComponent = forwardRef((props, ref)=>{
    const [toggleText, setToggleText] = useState(false)

    const subChildRef = useRef()


    const handleImperativehook = ()=>({
        handleChildImperativeCall(){
            setToggleText(!toggleText)
        }
    })
    useImperativeHandle(ref, handleImperativehook)

    return(
        <>
         <div>
            <button onClick={()=>{subChildRef.current.handleSubChildButtonClick()}}>Child Button</button>
         </div>

         <div>
            {
             toggleText && <p>Toggle text for child is visible on alternate click of button</p>
            }
         </div>

         <hr/>

         <SubChildButtonComponent ref={subChildRef}/>
        </>
    )
})