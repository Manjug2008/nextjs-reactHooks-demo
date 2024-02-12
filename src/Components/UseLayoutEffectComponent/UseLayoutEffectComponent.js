import { useEffect, useLayoutEffect, useState } from "react"

/**
 * Use of layout effect example
 * 
 * useLayoutEffect is similar to useEffect the difference is only
 * Always useLayoutEffect is executed inital stage of rendering
 * which means useLayoutEffect is executed before useEffect
 * Below is the example shown
 * 
 * console displays 'Before' keyword bcoz UseLayoutEffect executes first than useEffect hook
 */
export const UseLayoutEffectComponent = ()=>{
    const [inputValue, setInputValue] = useState('Before')

    useEffect(()=>{
        setInputValue('After')
    },[])


    useLayoutEffect(()=>{
        console.log(inputValue)
    },[])

    return(
        <div>
            <div>
              <h1>Use Of Layout effect component</h1>
            </div>

            <div>
                <input value={inputValue} type="text"/>
            </div>

            <div>
              <p>Check console for difference between useEffect and useLayoutEffect hook</p>
            </div>
            
        </div>
    )
}