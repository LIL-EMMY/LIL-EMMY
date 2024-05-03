import userModel from "@/models/users";
import connectDb from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    // collect incoming values
    const { email, password } = await request.json();
    try {
        // call datab    ase connection
        await connectDb()
        
        // find user with the inputed email
        const user = await userModel.findOne({email:email});
        if(user){
            // compare user otp, but before comparism , we want to chehck if the otp is expired
            if(Date.now()>user.emailOtpExpires){
                return new NextResponse(JSON.stringify({msg:"otp has expired"}), {status: 400})
            }

            return new NextResponse(JSON.stringify(user), {status: 200})
        }
        else{
            return new NextResponse(JSON.stringify({msg:"Invalid email"}), {status: 400})
         
        }
    } catch (error) {
        console.log(error.message)
        return new NextResponse(JSON.stringify({msg:"Server Error"}), {status: 500})

    }



}