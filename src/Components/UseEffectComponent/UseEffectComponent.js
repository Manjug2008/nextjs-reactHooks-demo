import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const UseEffectComponent = () => {
    const [data, setData] = useState();

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data[0].email)

        })
    },[])

  return (
    <div>

        <h1>{data}</h1>
    </div>
  )
}
