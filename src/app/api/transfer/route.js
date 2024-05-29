import transferIn from "@/models/transferIn"
import userModel from "@/models/users"
import connectDb from "@/utils/db"
import { NextResponse } from "next/server"


export const POST=async(req)=>{
    // take incoming values
    let {email,transferAmount,transferPin,acctNumber} =await req.json()
    // changing the datatype to Number
    transferAmount=Number(transferAmount)
    try {
        // call databse connection
        await connectDb()
        // get all senders details
        const userDetails=await userModel.findOne({email:email});
        // prevent one from tarnsferring to self
        console.log(typeof(acctNumber), typeof(userDetails.accoutNumber))
       if(acctNumber=== userDetails.accoutNumber){
        return new NextResponse(JSON.stringify({msg:"cannot transfer to self"} , {status:202}))

    }
    // check if  receivers account number exists
    const accountExists=userModel.findOne({accoutNumber:acctNumber}).count()
    if(accountExists<1){
        return new NextResponse(JSON.stringify({msg:"Incorrect account number"} , {status:206}))

    }

  
    //    sender pin matches dbPin
       else if(transferPin != userDetails.TransferPin){
           return new NextResponse(JSON.stringify({msg:"Incorrect Pin"} , {status:204}))
   
       }
    //    check if balance is greater than trasferAmount 
       else if(transferAmount>userDetails.balance){
        return new NextResponse(JSON.stringify({msg:"Insuffficient Balance"} , {status:201}))

       }
    //    debit sender
   

    // insert into transferIn table
    const transfer= new transferIn({sender:email, amount:transferAmount, receiver:acctNumber, mode:true})
    await transfer.save();
    if(transfer){
        userDetails.balance-=transferAmount
        await userDetails.save()
    
        // credit receiver
        const receiver=await userModel.findOne({accoutNumber:acctNumber})
        receiver.balance+=transferAmount
        await receiver.save()
        return new NextResponse(JSON.stringify({msg:"transfer successful "} , {status:200}))

    }




        
    } catch (error) {
        console.error(error.message)
        return new NextResponse(JSON.stringify({msg:"server Error"} , {status:500}))
    }
    
}