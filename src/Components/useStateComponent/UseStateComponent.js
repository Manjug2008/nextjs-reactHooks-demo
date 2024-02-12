import React, { useState } from 'react'

export const UseStateComponent = () => {
    const [counter, setCounter] = useState(0)
    const [searchvalue, setSearchValue] = useState('')


    const handleNumberIncrement = ()=>{
      setCounter(counter + 1)
    }

    const handleSearchInput = (e)=>{
      setSearchValue(e.target.value)

    }
    
  return (
    <div>

     <div>
        <h1>{counter}</h1>
        </div>

     <div>

     <button onClick={handleNumberIncrement}>Increment Number</button>
     </div>
     
     <div>
      <input
      placeholder='Searching value here .....'
      value={searchvalue}
      onChange={handleSearchInput}
      />

      <p>{searchvalue}</p>
     </div>

    </div>
    
  )
}
