import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { PORT, MONGODB_URI } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (req, res)=>{
    console.log(req);
    return res.status(200).json({message: "Welcome to MERN stack!"})
})



// connect to mongodb
mongoose
    .connect(MONGODB_URI)
    .then(()=>{
        console.log("App is connected to database");
        app.listen(PORT, ()=>{
            console.log(`App is listening to port: ${PORT}`)
        })
    })
    .catch((error)=> {
        console.log(error);
    })
