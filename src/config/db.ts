import mongoose from "mongoose";
import { config } from "./config";

const connectToDatabase = async () => {
  try {
    // listen for successful connection event
    mongoose.connection.on("connected", () => {
      console.log("Successfully connected to the database!!");
    });

    // listen for connection error event
    mongoose.connection.on("error", (err) => {
      console.error("Database connection error:", err);
    });

    // attempt to connect to the database using URI and database name from config
    await mongoose.connect(`${config.db.uri}/${config.db.name}`);
  } catch (error) {
    // log any errors and exit the process if connection fails
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
