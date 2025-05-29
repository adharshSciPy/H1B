import express from "express";
import { createblog,deleteBlog,getBlogById,listallBlog } from "../controller/blogController.js";
import upload from '../multer/multer.js';


const blogrouter = express.Router();
blogrouter.post('/createblog', upload.single('image'), createblog);
blogrouter.get('/listallblog',listallBlog);
blogrouter.delete("/deleteblog/:id", deleteBlog);
blogrouter.get('/getblog/:id',getBlogById)
export default blogrouter;