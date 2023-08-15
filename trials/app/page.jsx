"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
    // const data = 2121
    const [num, setNum] = useState("")
    const [num1, setNum1] = useState([])
    const gg = async () => {
        const  datagg  = await axios.get("https://jsonplaceholder.typicode.com/users")
        // setNum1({datagg})\s
    }
  return (
    <div className='p-5'>
      <input type='number' className='border-2 rounded-md px-4 py-2' placeholder='enteryour num ' onChange={(e)=>{
         console.log(e.target.value) 
      }} />
      <div className='21'>
      
      </div>
    </div>
  )
}

export default page
