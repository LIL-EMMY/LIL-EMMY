import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        lowercase:true,
        trim:true,

    },
    lastName:{
        type:String,
        lowercase:true,
        trim:true,

    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        unique:true

    },
    Phone:{
        type:Number,
        lowercase:true,
        trim:true,
        max:11

    },
    userName:{
        type:String,
        lowercase:true,
        trim:true,
        unique:true

    },
    password:{
        type:String,
        
       

    },
    accoutNumber:{
        type:Number,
        trim:true,
        unique:true

    },
    balance:{
        type:Number,
        default:100
       

    },
    emailVerified:{
        type:Boolean,
       default:false

    },
    emailOtp:{
        type:Number,
       

    },

    emailOtpExpires:{
        type:Number,
        

    },

    TransferPin:{
    type:Number,
    default:1111
    
    }
    
      
},{timestamps:true})

// lets model our table
const userModel=mongoose.models.user || mongoose.model('user', userSchema)
export default userModel;