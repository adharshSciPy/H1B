import mongoose from 'mongoose';
import { socialMedia } from "../model/socialMediaModel.js";

const postSocialMedia = async (req, res) => {
  const { title, description, socialMediaLink } = req.body;
  const image = req.file?.path;

  if (!title || !description || !socialMediaLink || !image) {
    return res.status(400).json({ message: "All fields are required (title, description, link, image)" });
  }

  try {
      const imageUrl = `/uploads/socialMedia/${req.file.filename}`;
    const newPost = await socialMedia.create({
      title,
      description,
      socialMediaLink,
       image: imageUrl, 
    });

    return res.status(200).json({
      message: "Social media post created successfully",
      data: newPost,
    });
  } catch (error) {
    console.error("Error creating social media post:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
 const getAllSocialMediaPosts = async (req, res) => {
  try {
    const posts = await socialMedia.find();
    res.status(200).json({ message: "Posts fetched successfully", data: posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getSocialMediaPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await socialMedia.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post fetched successfully", data: post });
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteSocialMediaPost = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await socialMedia.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully",data:deletedPost });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateSocialMediaPost = async (req, res) => {
  const { id } = req.params;
  const { title, description, socialMediaLink } = req.body;
  const image = req.file?.filename;

  try {
    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const updateFields = {};

    if (title !== undefined) updateFields.title = title;
    if (description !== undefined) updateFields.description = description;
    if (socialMediaLink !== undefined) updateFields.socialMediaLink = socialMediaLink;
    if (image !== undefined) updateFields.image = `/uploads/socialMedia/${image}`;

    const updatedPost = await socialMedia.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true, runValidators: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({
      message: "Post updated successfully",
      data: updatedPost,
    });
  } catch (error) {
    console.error("Error updating post:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export {
postSocialMedia,
  getAllSocialMediaPosts,
  getSocialMediaPostById,
  deleteSocialMediaPost,
  updateSocialMediaPost
};