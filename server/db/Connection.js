import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const MONGODB_URI = process.env.MONGO_URI;

const mongoConnect = async ()=>{
    try {
        mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connected to MongoDB Atlas")
    } catch (error) {
        console.log('Error connecting to MongoDB Atlas:', error)
    }
}
mongoConnect()

export default mongoConnect;
