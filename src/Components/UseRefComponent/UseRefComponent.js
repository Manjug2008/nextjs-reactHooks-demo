import React, { useRef } from 'react'

export const UseRefComponent = () => {
    const inputRef = useRef(null)

    const handleButtonClick = ()=>{
        console.log(inputRef.current.value)
        inputRef.current.value = ''
        inputRef.current.focus()
    }

  return (
    <div>
        <div>
        <input
        type='text'
        placeholder='sample....'
        ref={inputRef}
        />
        </div>

        <div>
            <button onClick={handleButtonClick}>
                button click
            </button>
        </div>
        
    </div>
  )
}
