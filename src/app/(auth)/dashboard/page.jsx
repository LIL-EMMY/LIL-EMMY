"use client"
import React from 'react'
import Dashboard from "@/component/dashboardBigDaav/page";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
export default async function DashboardPage() {
  // const session = useSession()
  const router = useRouter()
  // uwe use getServerSession if we want to to get sesson in a server componenet
  const session=await getServerSession(authOptions)
  // const session=await getServerSession(authOptions)

  console.log("this is the session " +  session)
  
  const { data, status } = session
  

  // getting the logged in user email
   console.log(session?.data?.user.email)
   const email=session?.data?.user.email
  //  make a request to get all user details
  // hoisted
  const getBalance=async ()=>{
    const res=await fetch('/api/getBalance/',{
     method:"POST",
     headers:{
      "Content-Type":"application/json"
     },
     body:JSON.stringify({email})
    })

  }

  if (status == 'unauthenticated') {
        router.push('/login')
  }
  return (
    <div className="body">
      <Dashboard/>

</div>
  )
}
