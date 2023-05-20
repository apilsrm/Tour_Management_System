import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import cookieParser from "cookie-parse";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/booking.js";

const path = require("path");


//configure
dotenv.config();
const app = express();
const corsOptions = {
  origin : true,
  credentials : true
} 

//databse connection
mongoose.set("strictQuery",false);
const connect = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
    });
    console.log('MongoDB is connected');
  } catch (error) {
    console.log('MongoDB connection  successfully restored :) :) :)  '); //ii failed
  }
}


//for testing
app.get("/",(req , res) => {
    res.send("api is working");
});

// middlewars
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());


app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/booking", bookingRoute);




//porting

const port = process.env.PORT;
app.listen(port, () => {
  connect();
  console.log('server listening  on port' , port);
      
  });