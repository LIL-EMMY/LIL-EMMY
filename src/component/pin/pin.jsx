"use client"
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './pin.css'

export default function SetPin() {
    const session=useSession()
    const userEmail=session?.data?.user.email
    console.log('pin userEmail' + userEmail)
    const  notify=() => {
        toast.success("Pin Changed !")
         
        
    }
    const [pin,setPin]=useState('')
   async function changePin(e){
        e.preventDefault()
        const res=await axios.post('/api/setPin',{userEmail,pin})
        console.log(res)
        if(res.status==200){
            notify()
        }

    }
  return (
    <div className='container'>
      <h2>reset pin</h2>
      <form action="" onSubmit={changePin}>
        <input type="password" onChange={(e)=>setPin(e.target.value)}/>
        <button type="submit">Set pin</button>
        <ToastContainer/>
      </form>
    </div>
  )
}

