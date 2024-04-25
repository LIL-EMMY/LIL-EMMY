"use client"
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import style from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



export default function Resetpassword() {
  const [showPassword, setShowPassword]= useState(false);
  const [Newpassword, setnewPassword]= useState('');

  const submitHandler=async (e)=>{
    // prevent default form submission
    console.log(e)
    e.preventDefault()
  }
  const togglePasswordValue = ()=>{
    setShowPassword(!showPassword)
  }

 

  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.input}>
            <h2>Reset Password</h2>
           <form action="" method="post"  onSubmit={submitHandler}>
           <div className={style.formGroup}>
                    <label htmlFor="" className={style.label}>Email:</label>
                    <input type="email" placeholder="Email address" 
                    className={style.formControl} />
                </div>
           <div className={style.formGroup}>
                    <label htmlFor="" className={style.label}> New password:</label>
                    <input type={showPassword ? 'text' : 'password'} 
                    value={Newpassword}
                    onChange={(e)=> setnewPassword(e.target.value)}
                    placeholder="Enter new password"  className={style.formControl} />
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

