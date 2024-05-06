'use client'
import React, { useState } from 'react'

const page = () => {
    let [number,setNumber]=useState(1)

    const increment =()=>{
        if(number<10){
            setNumber(number+1)
        }else{
            setNumber(0)
        }
        
    }
     const decrement =()=>{
        if(number>0){
            setNumber(number-1)
        }else{
            setNumber(0)
        }
     }
  return (
    <div>
        <button onClick={increment} className='bg-teal-200 p-3 rounded-lg'>add</button><br />
      {number} <br />
      <button onClick={decrement}>subtract</button>

    </div>
  )
}

export default page
