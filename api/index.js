import express, { Router } from "express";
import mongoose from "mongoose";
const app = express();
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/api/user',userRouter);

app.listen(3000,()=>{
    console.log("server running 3000 port!");
})

 
