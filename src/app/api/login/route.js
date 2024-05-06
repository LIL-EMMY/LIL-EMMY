import userModel from "@/models/users"
import connectDb from '@/utils/db';
import bycrypt from 'bcryptjs'
import { NextResponse } from 'next/server';

export const POST = async (request) => {
    const { username, password } = await request.json()

    //connect db
    await connectDb()

    // check if user name, matches one in DB
    const user = await userModel.findOne({ userName: username });
    // check if user email is verified
    if (user.emailVerified) {
        // login
        if (user) {

            // find password., but remember we hashed outr password
            const passwordTrue = bycrypt.compareSync(password, user.password)
            if (passwordTrue) {

                return new NextResponse(JSON.stringify(user), { status: 200 })
            }

            else {
                return new NextResponse(JSON.stringify({ msg: "invalid credentials" }), { status: 400 })

            }
        }
        else {
            return new NextResponse(JSON.stringify({ msg: "invalid credentials" }), { status: 400 })

        }
    }
    else{
        return new NextResponse(JSON.stringify({msg:"email not verifieed"}),{status:400})

    }
}
    

    
