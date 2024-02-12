import { forwardRef, useImperativeHandle, useState } from "react"

export const SubChildButtonComponent = forwardRef((props, ref)=>{
    const [toggleChildText, setToggleChildText] = useState(false)

    const handleSubChildImperativeHook = ()=>({
        handleSubChildButtonClick(){
            setToggleChildText(!toggleChildText)
        }

    })

    useImperativeHandle(ref, handleSubChildImperativeHook)

    return(
        <>
        <div>
            <button>
                SubChild Button
            </button>
        </div>

        <div>
            {
                toggleChildText && <p>Toggle subChild text on alternative button clicks</p>
            }
        </div>


        </>
    )
})