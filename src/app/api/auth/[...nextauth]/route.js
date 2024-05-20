import userModel from "@/models/users";
import NextAuth from "next-auth"
import bcrypt   from "bcryptjs"
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from "@/utils/db";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        // which provider are we using? (we are using credentials)
        CredentialsProvider({
            name: "credentials",
            id: "credentials",
            //  we need to authorize our credntials , that is chehck if the submitted user crdentials matches the one in the Db
            async authorize(credentials) {
                try {
                    // remeber to take username and password sent from the /login page in the front end
                    const {username,password}=credentials
                    console.log(username,password)
                    // call database connection
                    await connectDb();
                    // check if user credentials(username) matches the one in the DB
                    const user=await userModel.findOne({userName:username})
                    if(user){
                        // compare user password to the hashed one stored in the databse
                        const passwordTrue=bcrypt.compareSync(password,user.password)
                        if(passwordTrue){
                            return user
                        }
                        else{
                             throw new Error("Invalid credentials")                        }

                    }
                    else{
                         throw new Error("Invalid credentials")                    }

                
                } catch (error) {
                    console.log(error.message)
                    throw new Error("server error")
                }

            }
        }),
    ],

    // set error pages
    pages:{
        error:"/login"

    }
}
const handler=NextAuth(authOptions)
export {handler as GET, handler as POST}
