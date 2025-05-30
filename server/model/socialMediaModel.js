import mongoose, { Schema } from "mongoose";

const socialMediaSchema = new Schema({
  title: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  socialMediaLink: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
}, { timestamps: true });

export const socialMedia = mongoose.model("socialMedia", socialMediaSchema);
