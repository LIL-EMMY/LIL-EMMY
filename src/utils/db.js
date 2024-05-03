import mongoose from "mongoose"

const connectDb = async ()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URL);
      
            console.log("Db connected")
      
           
        
        
    } catch (err) {
        console.log(`data base not conneced ${err}`)
    }
}

export default connectDb