'use client'
import React, { useState } from 'react'
import { GrLike } from "react-icons/gr";

const page = () => {
    const [color,setColor] = useState('gray')

    const handleColorChange = ()=>{
       if(color === 'gray') {
        setColor('skyblue')
    }else{
        setColor('gray')
    }
    }
  return ( 
    <div>
      <button onClick={handleColorChange} className=' bg-gray-300 p-2 border border-black r'><GrLike color={color} /></button>
    </div>
  )

}

export default page
