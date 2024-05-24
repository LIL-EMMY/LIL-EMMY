import userModel from "@/models/users"
import connectDb from "@/utils/db"
import { NextResponse } from "next/server"

export const POST=async (req)=>{
    let {accountNumber}=await req.json()
    // accountNumber=Number(accountNumber)
    // console.log(typeof(accountNumber))
    console.log(accountNumber)
    try{
        // call database connection \
        await connectDb()
        // check if receipient acctNo exist in datbase
        const user=await userModel.findOne({accoutNumber:accountNumber});
        if(user){
            // send user full name
            const fullname=`${user.firstName} ${user.lastName}`
            const balance=user.balance
            const transferPin=user.TransferPin
        return new NextResponse(JSON.stringify({fullname,balance,transferPin}), {status:200})

        }
        else{
        return new NextResponse(JSON.stringify({msg:'Invalid Acct Number'}), {status:404})

        }


    }
    catch(err){
        console.log(err.message) 
           return new NextResponse(JSON.stringify({msg:'Server Error'}), {status:500})
    }
}