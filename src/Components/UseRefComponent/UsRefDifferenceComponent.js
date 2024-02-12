import { useRef, useState } from "react"

export const UsRefDifferenceComponent = ()=>{
    const [counter, setCounter] = useState(0)
    /**
     * In this example useRef changed is not affected in react dom element because useRef hook function won't re-render page because update state changes won't happen
     * On other side of useState on update of state value
     */

    const ref = useRef(0)

    const handleOnclickEvent = ()=>{
        setCounter(counter + 1) /** On Update of state value re-render takes place and value displayed from react dom element*/
        ref.current++

        console.log(` counter: ${counter}`) /** counter value will be as previous bcoz on excution of this line re-render will not take place */
        console.log(` useRef: ${ref.current}`) /** Use ref*/ 
        console.log(`-------`)
    }

    return(
        <div>
            <div>
                <h1>{counter}</h1>
            </div>

            <div>
                <button onClick={handleOnclickEvent}> Increment</button>
            </div>
        </div>
    )
}