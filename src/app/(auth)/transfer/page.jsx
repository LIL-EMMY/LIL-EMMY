import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Quicktransfer from '@/component/Quicktransfer/page'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'


export default function TransferPage() {

    const session=getServerSession(authOptions)


    if(!session){
      return redirect('/login')
    }

    return (  <Quicktransfer/> )
   
}
