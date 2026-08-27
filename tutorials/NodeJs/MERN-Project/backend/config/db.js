// import mongoose from "mongoose";

// const connectDB = async () => {
//     try{
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log("MongoDB connected successfully.");
//     } catch (error) {
//         console.log(`Error: ${error.message}`);
//     }
// }

// export default connectDB;


import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const connectDB = async () => {
  try {
    const mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    await mongoose.connect(uri);
    console.log(`MongoDB Connected (Memory Server): ${uri}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB; // <--- Yeh hona zaroori hai!