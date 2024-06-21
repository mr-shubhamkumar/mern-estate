import express from 'express'
import mongoose from 'mongoose';
const app = express();
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to mongodb");

}).catch((err)=>{
    console.log(err);
});

app.listen(3000, ()=>{
    console.log('server runing on port 3000');
}

)