import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const ADMIN_ROLE =( process.env.ADMIN_ROLE)
const adminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: ADMIN_ROLE,
    },
  },
  { timestamps: true }
);

// Hashing admin password
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    return next(error);
  }
});

// Generate Access Token
adminSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
      role: this.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1h" }
  );
};

// Generate Refresh Token
adminSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
      role: this.role,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "7d" }
  );
};

// Compare password
adminSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const Admin = mongoose.model("Admin", adminSchema);
