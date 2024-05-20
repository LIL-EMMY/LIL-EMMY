"use client"
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import style from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Router } from "next/router";
import { redirect, useRouter } from "next/navigation";



export default function Login() {
  const router=useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('')
  const [loader,setLoader]=useState(false)

  const [err, setErr] = useState('')
// Not the ideal  way to handle login in next
  const submitHandler = async (e) => {
    // prevent default form submission

    e.preventDefault()
    if (!password || !username) {
      setErr('provide login credentials')

    }
    else {
      setLoader(true)
      // send credentials to api/auth/[...nextauth]/
      // we use redirect to show error on the login instaed of redirecting to the default error page
      const res=await signIn('credentials',{username,password,redirect:false})
      console.log("response: ", res)
      if(res.ok){
        router.push('/dashboard')
      }
      else{
        // show user error 
        setLoader(false)
        setErr('Invalid Credentials')
      }

       // make api request
      // const res = fetch('http://localhost:3000/api/login', {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({ username, password })
      // })
    }
  }
    const togglePasswordValue = () => {
      setShowPassword(!showPassword)
    
     

      
    }
  
    // NEXT WAY TO HANDLE LOGIN
const session=useSession()
const {data,status}=session
console.log(data,status)


  return (
    <>
      <div className={style.container}>
        {err && (<p className="err">{err} </p>)}
        <div className={style.content}>
          <div className={style.text}>
            <h1><span className={style.etext}>E</span>AGLE BANK</h1>
            <p className={style.motor}>Soar higher...</p>
            <Link href="/">Create New Account</Link>


          </div>
          <div className={style.input}>
            <h2>Sign In</h2>
            <form onSubmit={submitHandler}>
              <div className={style.formGroup}>
                <label htmlFor="" className={style.label}>Username or Email:</label>
                <input type="text" placeholder="Username or Email"
                  className={style.formControl} onChange={(e) => setUsername(e.target.value)} />
              </div>

              <div className={style.formGroup}>
                <label htmlFor="" className={style.label}>Password:</label>
                <input type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password" className={style.formControl} />


                <button className={style.pbtn} onClick={togglePasswordValue} >
                  {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                </button>
              </div>
              <Link href="/">Forgot Password ?..</Link>

              <button className={style.btn}>Login <MdOutlineArrowForwardIos className={style.icon}/></button>
            </form>
            {loader && (<div className="loader"></div>)   }
         
            



          </div>
      <button onClick={()=>signOut('credentials')}>Logout</button>

        </div>
      </div>
    </>
  );
}
