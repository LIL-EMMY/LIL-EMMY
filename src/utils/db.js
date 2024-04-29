import mongoose from "mongoose"

const connectDb = async ()=>{
    try {
        const connect = await mongoose.connection(process.env.MONGODB_URL);
        if(connect){
            console.log("Db connected")
        }
        
    } catch (err) {
        console.log(`data base not conneced ${err}`)
    }
}

export default connectDb