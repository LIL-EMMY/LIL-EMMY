"use client"
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import style from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";



export default function Confirmemail() {
  const router=useRouter()
  const [showPassword, setShowPassword]= useState(false);
  const [password, setPassword]= useState('');

  const submitHandler=async (e)=>{
    // prevent default form submission
    console.log(e)
    e.preventDefault()

    const res=await fetch('http://localhost/3000/api/confirmEmail',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      // password here represents email otp
      body:JSON.stringify({email,password})
    })

    await res.json()

    if(res.status==200){
      router.push('/login')
    }

  }
  const togglePasswordValue = ()=>{
    setShowPassword(!showPassword)
  }

 

  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.input}>
            <h2>Confirm Email</h2>
           <form action=""   onSubmit={submitHandler}>
           <div className={style.formGroup}>
                    <label htmlFor="" className={style.label}>Email:</label>
                    <input type="email" placeholder="Email" 
                    className={style.formControl} />
                </div>
           <div className={style.formGroup}>
                    <label htmlFor="" className={style.label}>Email otp:</label>
                    <input type="text"
                  
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Enter email code"  className={style.formControl} />
                    <button className={style.pbtn} onClick={togglePasswordValue} >
                      {showPassword ? <FaEyeSlash  /> : <FaRegEye/>}
                    </button>
                </div>
               
          
           <button className={style.btn}>Submit<MdOutlineArrowForwardIos className={style.icon}/></button>
           </form>
           


          </div>
          

        </div>
      </div>
    </>
  );
}

