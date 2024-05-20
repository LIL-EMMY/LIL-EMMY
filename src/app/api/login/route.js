import userModel from "@/models/users"
import connectDb from '@/utils/db';
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server';
import jwt from "jsonwebtoken"
import { generateToken } from "../helpers";

export const POST = async (request) => {
    const { username, password } = await request.json()
    
    try {
        //connect db
        await connectDb()

        // check if user name, matches one in DB
        const user = await userModel.findOne({ userName: username });
        // check if user email is verified


        // login
        if (user) {
            if (user.emailVerified) {
                // find password., but remember we hashed our password
                const passwordTrue = bcrypt.compareSync(String(password), user.password)
                console.log(passwordTrue)
                if (passwordTrue) {
      
                    // send back user data without certian fields(passwprd,emailOtp etc)
                      const { password , emailOtp,emailOtpExpires, ...others } = user._doc;
                        ///genrate jwt token
                       const token= generateToken(others._id)
                      return new NextResponse(JSON.stringify({others, "token":token} ), { status: 200 })
                }

                else {
                    return new NextResponse(JSON.stringify({ msg: "invalid credentials" }), { status: 400 })

                }
            }
            else {
                return new NextResponse(JSON.stringify({ msg: "email not verifieed" }), { status: 400 })

            }

        } else {
            return new NextResponse(JSON.stringify({ msg: "invalid credentials" }), { status: 400 })

        }

    } catch (error) {
        console.log(error.message)
        return new NextResponse(JSON.stringify({ msg: "server Error" }), { status: 500 })
    }

}



