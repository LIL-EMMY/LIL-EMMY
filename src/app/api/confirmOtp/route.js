import userModel from "@/models/users";
import connectDb from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    // collect incoming values
    // password here refers to  otp (OTP==password)
    
    const { email, password } = await request.json();
    const otp=password
    try {
       
        // call datab    ase connection
        await connectDb()
        
        // find user with the inputed email
        const user = await userModel.findOne({email:email});
        if(user){
             // compare otp to check if it's valid(that means if it's the one that was sent to the user mail'sbox)
            if(otp==user.emailOtp){
                // compare user otp, but before comparism , we want to chehck if the otp is expired
               if(Date.now()>user.emailOtpExpires){
                   return new NextResponse(JSON.stringify({body:"otp has expired"}), {status: 400})    
               }
               else{
                    // verify useremail()
                    user.emailVerified=true //we are change the emailVerified field in the Db from true to false
                    user.emailOtp=undefined 
                    await user.save() //we are updating the user table in the database
                   return new NextResponse(JSON.stringify({body:"otp valid"}), {status: 200}, )
                }
                
            }
            else{
                
                return new NextResponse(JSON.stringify({body:"invalid otp "}), {status: 401}, )
            }

        }
        else{
            return new NextResponse(JSON.stringify({msg:"Invalid email"}), {status: 401},  
            
            
          )
         
        }
    } catch (error) {
        console.log(error.message)
        return new NextResponse(JSON.stringify({msg:"Server Error"}), {status: 500})

    }



}