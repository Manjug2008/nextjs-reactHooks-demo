import { useCallback, useState } from "react"
import { UseCallBackChildComponent } from "./UseCallBackChildComponent"
import axios from "axios"

/**
 * useCallback hook is same as usememo hook
 * only difference is useMemo utilise memory to store value into variable
 * but useCallback hook wont use memory and does not store value in variable
 *  
 */
export const UseCallBackComponent = ()=>{
    const [toggleText, setToggleText] = useState(false)
    const [apiData, setApiData] = useState('Yo, please change channel')
     

    const handleApiCall = async()=>{

        return axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            return response.data
        })
    }

    /**
     * On each page render below function(api call) is called without using useCallBack
     * On utilise of useCallBack hook below function is called only once based on dependency
     * 
     * Read more about useCallback hook ? not clear yet
     * 
     *  
     */

    const handleFunction = useCallback(()=>{
        console.log('manju')
        return apiData
    },[apiData])

    return(
        <div>
            <div>
                <h1>Example of useCallBack hook</h1>
            </div>

            <div>
                <UseCallBackChildComponent handleFunction={handleFunction}/>
            </div>
            <hr/>

            <div>
                <button onClick={()=>{setToggleText(!toggleText)}}> Click button</button>
            </div>

            <div>
                {
                    toggleText && <p>Toggle text is visible</p>

                }
            </div>

        </div>
    )
}