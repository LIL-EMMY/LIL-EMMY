import userModel from "@/models/users";
import connectDb from "@/utils/db";
import { NextResponse } from "next/server";

export const POST=async (request)=>{
    // take incoming data
    const {email}=await request.json();
    try {
        // call database conncetion
        await connectDb()
        // get user balance whre emial matched incoming email from the request
        const user=await userModel.findOne({email:email})
        if(user){
            return
        }
        
    } catch (error) {
        console.log(error.message)
        return new NextResponse(JSON.stringify("Server Error"), {status:500})
    }
}