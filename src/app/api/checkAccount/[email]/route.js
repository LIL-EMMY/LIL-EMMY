import userModel from "@/models/users"
import connectDb from "@/utils/db"
import { NextResponse } from "next/server"

export const GET=async (request,{params})=>{
    try{
        await connectDb()
        // get user balance 
        const email=params.email
        const user =await userModel.findOne({email:email})
        if(!user){
        return new NextResponse(JSON.stringify({msg:"user not found"}),{status:404})
            
        }
        const balance=user.balance
        return new NextResponse(JSON.stringify({balance}),{status:200})
    }
    catch(err){
        console.log(err.message)
    return new NextResponse(JSON.stringify({msg:"server error"}),{status:500})


    }

   
}