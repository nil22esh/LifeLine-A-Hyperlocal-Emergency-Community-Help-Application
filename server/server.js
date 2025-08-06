import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";
import userRouter from "./routes/user.routes.js";

// configure environment variables
dotenv.config();
// connect to the database
connectDB();

// creating instance of express and variables
const app = express();
const port = process.env.PORT || 8080;
const env = process.env.ENV || "development";

// to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// to enable CORS
app.use(cors());
app.use(cookieParser());

// test routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// main routes of application
app.use("/api/v1/auth/users", userRouter);

// creating a server to listen on the specified port
app.listen(port, () => {
  console.log(`${env} server is running on port ${port}`);
});
