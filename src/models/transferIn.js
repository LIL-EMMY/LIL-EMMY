import mongoose from "mongoose"

const transferSchema=new mongoose.Schema({
    sender:{
        type:String
    },
    amount:{
        type:Number
    },
    receiver:{
        type:Number
    },
    // true = in(money received) false= out(money sent )
    mode:{
        type:Boolean
    },
   
},{timestamps:true})

const transferIn=mongoose.models.transferIn || mongoose.model('transferIn', transferSchema)
export default transferIn