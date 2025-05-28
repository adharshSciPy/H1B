import express from "express";
import { createblog,deleteBlog } from "../controller/blogController.js";
import upload from '../multer/multer.js';


const blogrouter = express.Router();
blogrouter.post('/createblog', upload.single('image'), createblog);
blogrouter.delete("/deleteblog/:id", deleteBlog);

export default blogrouter;