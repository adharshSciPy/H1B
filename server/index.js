import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import path from "path";
import connectMongodb from "./mongoDb/mongoConnect.js";
import dotenv from "dotenv";


 
dotenv.config();
const app =express()
dotenv.config({
    path: './env'
})
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cors())
app.use(bodyParser.json())
connectMongodb().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running ⚙️ at port : ${process.env.PORT}`);
    })
})
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    })

  