import { useEffect, useRef, useState } from "react"
import { ForwardRefComponent } from "./ForwardrefInput"

export const UseRefForwarderComponent = ()=>{
    const [input, setInput] = useState()
    const [inputFwd, setInputFwd] = useState()

    const counterRef = useRef(0)
    const inputRef = useRef(null)
    const inputFwdRef = useRef(null)

    const handleInputValue = (e)=>{
        counterRef.current++
        setInput(e.target.value)
    }

    const handleInputFwdValue = (e)=>{
        inputFwdRef.current++
        setInputFwd(e.target.value)
    }

    const handleOnclickOfSubmit = ()=>{
        if(input===undefined || input.length == 0){
            inputRef.current.focus()
        } else{
            alert(input)
        }
    }

    const handleOnclickOfFwdSubmit = ()=>{
        if(inputFwd===undefined || inputFwd.length == 0){
            inputFwdRef.current.focus()
        } else{
            alert(inputFwd)
        }
    }

    return(
        <div>
            <div><p>Regular ref example</p></div>
            <div>
            <input
            value={input}
            onChange={handleInputValue}
            placeholder="Enter value ...."
            ref={inputRef}
            />
            <button onClick={handleOnclickOfSubmit}>submit</button>
            </div>

            

            <div>
                <p>Entered text reflects here ' {input} '</p>
            </div>
            <div>
                <p>The conuter value based on text change render ' {counterRef.current} '</p>
            </div>

            <hr/>
            <div><p>forward ref example</p></div>
            <div>
            <ForwardRefComponent
            value={inputFwd}
            onChange={handleInputFwdValue}
            placeholder="Enter value for forwardRef ...."
            ref={inputFwdRef}
            />
            <button onClick={handleOnclickOfFwdSubmit}>submit</button>
            </div>
        </div>
    )
}