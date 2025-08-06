import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongo_uri = process.env.MONGO_URI;

const connectDB = async (req, res) => {
  try {
    await mongoose
      .connect(mongo_uri)
      .then(() => console.log(`DB Connected: ${mongo_uri}`))
      .catch((error) =>
        console.log(`Error while connecting database: ${error}`)
      );
  } catch (error) {
    console.log(`Error while connecting database: ${error}`);
    res.status(500).send("Internal Server Error");
    process.exit(1);
  }
};

export default connectDB;
