import userModel from "@/models/users"
import connectDb from "@/utils/db"
import { NextResponse } from "next/server"

export const POST= async(request)=>{
    try {
        const {userEmail,pin}=await request.json()
        // await db connection
        await connectDb()
        const user=await userModel.findOneAndUpdate({email:userEmail}, {TransferPin:pin} , {new:true})
        if(user){
            return new NextResponse(JSON.stringify({msg:"pin changed",user}),{status:200});
        }

    
    } catch (error) {
        const err=error.message
        console.log(error.message)
        return new NextResponse(JSON.stringify({msg:"server Error",err}),{status:500});
        
    }
}