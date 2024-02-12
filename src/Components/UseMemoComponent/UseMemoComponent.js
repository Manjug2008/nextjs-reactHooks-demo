import axios from "axios"
import { useEffect, useMemo, useState } from "react"

/**
 * 
 * UseMemo hook is responsible to chache data in memory until the hook dependency value state changes
 * In simple word useMemo hook is same as react query functionality
 */
export const UseMemoComponent = ()=>{
    const [data, setData] = useState([])
    const [toggleText, setToggleText] = useState(false)

    useEffect(()=>{

        axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            setData(response.data)
        })
    },[])

    const getLongestCommentName = ()=>{
        let longestName = ''

        data.map((commentObj)=>{
            const {name} = commentObj
            if(name.length > longestName.length){
                longestName = name
            }            
            return null
        })
        console.log('repeating render')
        return longestName
    }
   
    const getLongestNameFromComment = useMemo(()=>getLongestCommentName(), [data])

    return(

        <div>
            <div>
                <h1>{getLongestNameFromComment}</h1>
            </div>

            <div>
                <button onClick={()=>{setToggleText(!toggleText)}}>
                    Switch-Toggle-Button
                </button>
            </div>

            <hr/>
            <div>
                {
                    toggleText && <p>Toggle text is visible!</p>
                }
            </div>

        </div>
    )
}