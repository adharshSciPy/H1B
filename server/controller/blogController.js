import { Blogs } from "../model/blogModel.js";

const createblog = async (req, res) => {
  try {
    const { title, subtitle, blogContent } = req.body;

    let image = "";
    if (req.file) {
      image = `uploads/${req.file.filename}`;
    } else {
      console.log("⚠️ No file uploaded!");
    }

    const newBlog = new Blogs({
      title,
      subtitle,
      blogContent,
      image 
    });

    await newBlog.save();
    res.status(200).json({
      message: "Blog created successfully",
      blog: newBlog
    });
  } catch (err) {
    console.error("Create webinar error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
const listallBlog=async(req,res)=>{
  try {
    const allBlogs=await Blogs.find();
    res.status(200).json({
      message: "Allwebinars",
      blog: allBlogs
    });
  } catch (error) {
    
  }
}
const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;

    const blog = await Blogs.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({
      message: "Blog fetched successfully",
      blog,
    });
  } catch (err) {
    console.error("Get blog by ID error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;

    const deletedBlog = await Blogs.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error("Delete blog error:", err);
    res.status(500).json({ message: "Server error" });
  }
};


export{createblog,deleteBlog,listallBlog,getBlogById}