import express from "express";
import { createblog,deleteBlog,listallBlog } from "../controller/blogController.js";
import upload from '../multer/multer.js';


const blogrouter = express.Router();
blogrouter.post('/createblog', upload.single('image'), createblog);
blogrouter.get('/listallblog',listallBlog);
blogrouter.delete("/deleteblog/:id", deleteBlog);

export default blogrouter;