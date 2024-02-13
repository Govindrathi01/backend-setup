import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDb =async() =>{
    try {
        const connectioninstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(` \n YO yo conected DB ${connectioninstance.connection.host}`);
        
    } catch (error) {
        console.log("Mogodb error");
        process.exit(1);
    }
}
export default connectDb