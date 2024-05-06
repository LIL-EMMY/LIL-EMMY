import userModel from "@/models/users";
import connectDb from "@/utils/db";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export const POST = async (request) => {
    const { email } = await request.json()
    try {
        // call databse connection\
        await connectDb()
          // send email function
    function sendOTPByEmail(email, otp) {
        try {

            // Create a nodemailer transporter with your email service settings
            const transporter = nodemailer.createTransport({
                service: 'gmail', // Use the email service you prefer
                port: 587,
                auth: {
                    user: process.env.EMAIL_ADDRESS,
                    pass: process.env.EMAIL_APP_PASSWORD,
                },
                tls: {
                    // do not fail on invalid certs
                    rejectUnauthorized: false,
                },
            });

            // Email content
            const mailOptions = {
                from: process.env.EMAIL_ADDRESS,
                to: email,
                subject: 'Verification Code for Registration',
                text: `Your OTP (One-Time Password) for registration is: ${otp}`,
            };

            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });

            
        }
        catch (error) {
            console.log(error)
        }
    }

    //   generater email otp
    function generateOTP() {
        return Math.floor(10000 + Math.random() * 90000).toString();
    }
    const otp=generateOTP()
    const emailOtpExpires=Date.now() + 100000;
    //update user otp
    const user =  await userModel.findOneAndUpdate({ email: email },
        {
            $set:
            {
                emailOtp: otp,
                emailOtpExpires
              
            }
        }

        

    )

    if(user){
        // send user new otp
        sendOTPByEmail(email,otp)
        return new NextResponse(JSON.stringify({msg:'ortp send'} ,{status:200} ))
    }
    } catch (error) {
        console.log(error.message)
        return new NextResponse(JSON.stringify({msg:"server error"},{status:500}))
    }
  

}