"use client"
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import style from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



export default function Login() {
  const [showPassword, setShowPassword]= useState(false);
  const [password, setPassword]= useState('');

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
          <div className={style.text}>
            <h1><span className={style.etext}>E</span>AGLE BANK</h1>
            <p className={style.motor}>Soar higher...</p>
            <Link href="/">Create New Account</Link>
            

          </div>
          <div className={style.input}>
            <h2>Sign In</h2>
           <form action="" method="post"  onSubmit={submitHandler}>
           <div className={style.formGroup}>
                    <label htmlFor="" className={style.label}>Username:</label>
                    <input type="text" placeholder="Username" 
                    className={style.formControl} />
                </div>
           <div className={style.formGroup}>
                    <label htmlFor="" className={style.label}>Password:</label>
                    <input type={showPassword ? 'text' : 'password'} 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Password"  className={style.formControl} />
                    <button className={style.pbtn} onClick={togglePasswordValue} >
                      {showPassword ? <FaEyeSlash  /> : <FaRegEye/>}
                    </button>
                </div>
                <Link href="/">Forgot Password ?..</Link>
          
           <button className={style.btn}>Login <MdOutlineArrowForwardIos className={style.icon}/></button>
           </form>
           


          </div>
          

        </div>
      </div>
    </>
  );
}
