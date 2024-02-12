import React from 'react'
export const ForwardRefComponent = React.forwardRef((props, ref)=>{
    return(
        <input
        {...props}
        ref={ref}
        
        />
    )
})