import connectDb from "./DB/index.js";
import dotenv from 'dotenv';
//import 'dotenv/config'
// require('dotenv').config({path:"./env"});/
dotenv.config({
    path : './.env'
})
//import dotenv from "dotenv";
connectDb();