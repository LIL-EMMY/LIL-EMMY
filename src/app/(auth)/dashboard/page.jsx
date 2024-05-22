
import React from 'react'
import Dashboard from "@/component/dashboardBigDaav/page";

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import axios from "axios"
export default async function DashboardPage() {
  // const session = useSession()
  
  // uwe use getServerSession if we want to to get sesson in a server componenet
  const session=await getServerSession(authOptions)
  // const session=await getServerSession(authOptions)

  console.log("this is the session  email " +  session?.user.email)
  const userEmail=session?.user.email
  const getBalance=async(email)=>{
    try{
      const res=await axios.get(`http://localhost:3000/api/checkAccount/${email}`)
        console.log(res.data.balance)
         const balance=res.data.balance
         return balance
  
    }
    catch(err){
      console.log(err)
    }
  }
  
  
  const userBalance=await getBalance(userEmail)
  console.log(userBalance)

  if (!session) {
     return redirect('/login')
  }
  return (
    <div className="body">  
      <Dashboard balance={userBalance}/>
      <pre>{JSON.stringify(session, null, 2)}</pre>

      {/* teach them logout */}
     
</div>
  )
}
