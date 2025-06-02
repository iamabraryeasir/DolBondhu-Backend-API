import mongoose from "mongoose";
import { config } from "./config";

const connectToDatabase = async () => {
  try {
    // Listen for successful connection event
    mongoose.connection.on("connected", () => {
      console.log("Successfully connected to the database!!");
    });

    // Listen for connection error event
    mongoose.connection.on("error", (err) => {
      console.error("Database connection error:", err);
    });

    // Attempt to connect to the database using URI and database name from config
    await mongoose.connect(`${config.db.uri}/${config.db.name}`);
  } catch (error) {
    // Log any errors and exit the process if connection fails
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
