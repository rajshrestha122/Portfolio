import mongoose from "mongoose";

const connectDb = async ()=> {
    try{
   await mongoose.connect(process.env.MONGODB_URI);
    console.log("MONGODB connected❤️");
    }catch(error){
        console.log("something went wrong in db.js", error.message);
        
    }
}

export default connectDb;