import userModel from "@/models/users";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer"
import bcrypt from "bcryptjs"
import connectDb from "@/utils/db";



export const POST= async(request)=>{
    // ?
// destructure  incoming user values

const {firstName,lastName,email,userName,phone,password}=await request.json()

// send email function
function sendOTPByEmail(email, otp) {
    try{
      
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
    catch(error){
      console.log(error)
    }
  }

//   generater email otp
function generateOTP() {
    return Math.floor(10000 + Math.random() * 90000).toString();
  }


  function generateAccountNumber(){
    return Math.floor(2000002031 + Math.random()* 999999999).toString()
  }

  try {
    // call datbase conection
    await connectDb()

    // chehck if user email exists in the database
    const userEmailExists= await userModel.findOne({email:email})

          if(userEmailExists){
            return new NextResponse(JSON.stringify("user email already exists"), {status:400})
          }
          else{
              // has user password
    const salt=bcrypt.genSaltSync(16)
    const hashPassword=bcrypt.hashSync(password,salt)
      //   save into db

      const accountNumber=generateAccountNumber();
      const emailOtp=generateOTP();
      // email otp expiration(10 mins)
      const emailOtpExpires=Date.now() + 100000;
        const user=await new userModel({firstName:firstName, lastName:lastName, email:email, phone:phone, userName:userName, password:hashPassword, accoutNumber:accountNumber, emailOtp:emailOtp,emailOtpExpires})
        await user.save();

        if(user){
          // send user an eamil
          sendOTPByEmail(email,emailOtp);
           return  new NextResponse(JSON.stringify({ message: `user registred successfully` }), {status:200})
        }
          }
    
    
    } catch (error) {
        console.log(error.message)
      return  new NextResponse(JSON.stringify({ message: `server Errory`  }), {status:500})
    
  }
}