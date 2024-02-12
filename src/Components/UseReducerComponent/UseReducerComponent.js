import React, { useReducer } from 'react'

const reducer = (state, action)=>{
    switch(action.type){
        case "INCREMENT":
            return {counter: state.counter + 1, showText: state.showText}
        case "toggerShowText":
            return {counter: state.counter, showText: !state.showText}
        default:
            return state
    }

}


export const UseReducerComponent = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0, showText: true})

    const handleButtonClickEvent = ()=>{
        dispatch({type: "INCREMENT"})
        dispatch({type: "toggerShowText"})
    
    }
  return (
    <div>
        <div>
          <h1>{state.counter}</h1>
        </div>

        <div>
            <button onClick={handleButtonClickEvent}>Incrementer</button>
        </div>

        <div>
            {state.showText && <p>Text visible based on alternate clicks!</p>}
        </div>
        
        

    </div>
  )
}
