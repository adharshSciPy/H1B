import mongoose,{Schema} from "mongoose";
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    blogContent: {
      type: String,
      required: true,
    },
    image: {
      type: String, 
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Blogs=mongoose.model("blog", blogSchema);
