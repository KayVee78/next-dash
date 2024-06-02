import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    if (!process.env.MONGO) {
      throw new Error("MONGO environment variable not defined");
    }

    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log("Database connection established");
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};