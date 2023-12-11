import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://samuelbp3005:hola1234@cluster0.zwsidkt.mongodb.net/?retryWrites=true&w=majority"; // Tirarlo a un .env

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};