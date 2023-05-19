import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
// import cookieParser from "cookie-parse";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
const path = require("path");


//configure
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//databse connection
mongoose.set("strictQuery",false);
const connect = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
    });
    console.log('MongoDB is connected');
  } catch (err) {
    console.log('MongoDB connection  successfully restored :) :) :)  '); //ii failed
  }
}


//for testing
app.get("/",(req , res) => {
    res.send("api is working");
});

// middlewars
app.use(express.json());
app.use(cors());
// app.use(cookieParser());
app.use('/tours.js ', tourRoute);
app.use("/users.js ", userRoute);



//porting

const port = process.env.PORT;
app.listen(port, () => {
  connect();
  console.log('server listening  on port' , port);
      
  });


