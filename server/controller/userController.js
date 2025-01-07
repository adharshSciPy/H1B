import { User } from "../model/userModel.js";
import { Admin } from "../model/adminModel.js";
import jwt from "jsonwebtoken";
import { passwordValidator } from "../utils/passwordValidator.js";
import { Collaborator } from "../model/collaboratorModel.js";

const registerUser = async (req, res) => {
    const { firstName,lastName, email, password, phone } = req.body;
  
    try {
      // Sanitizing inputs
      if (!firstName || !lastName || !email || !password || !phone ) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      if (!email.trim()) {
        return res.status(400).json({ message: "Email cannot be empty" });
      }
  
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
  
      // Validate password
      const isValidPassword = passwordValidator(password);
      if (!isValidPassword) {
        return res.status(400).json({
          message:
            "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one number",
        });
      }
  
      // Prevent duplicate accounts
      const existingUser = await User.findOne({ email });
      // const existingAdmin = await Admin.findOne({ email });
      if (existingUser ) {
        
        return res.status(400).json({ message: "Email is already in use" });
      }
    
    // User creation
    const role = process.env.USER_ROLE || "user"; // Default to 'user' if environment variable is not set
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      role,
      phone
    });
    const createdUser = await User.findById(user._id).select("-password");
    if (!createdUser) {
      return res.status(500).json({ message: "User registration failed" });
    }

    return res
      .status(201)
      .json({ message: "User Registration Successful", data: createdUser });
  } catch (err) {
    if (err) {
      return res.status(409).json({ message: "Email is already in use" });
    }
    console.error("Error during registration:", err);
    return res
      .status(500)
      .json({ message: `Internal Server Error: ${err.message}` });
  }
};

// @POST
// user/login
// desc: Login API for user with credentials
const adminlogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const isEmptyField = [email, password].some(
            (field) => !field || field.trim() === '' 
        );
        if (isEmptyField) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        let admin = await Admin.findOne({ email: email });
        let role = 500; // Role for Admin

        if (!admin) {
            admin = await User.findOne({ email: email });
            role = 300; // Role for User
        }

        if (!admin) {
            admin = await Collaborator.findOne({ email: email });
            role = 400; // Role for Collab
        }

        if (!admin) {
            return res.status(404).json({ message: 'No user found' });
        }

        const isPasswordCorrect = await admin.isPasswordCorrect(password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Incorrect Password' });
        }

        const accessToken = await admin.generateAccessToken();
        const refreshToken = await admin.generateRefreshToken();

        // Store refresh token in a cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Set to true in production
            sameSite: "None",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
        });

        return res.status(200).json({
            message: `${role} login successful`,
            role,
            token: accessToken,
            admin,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: `Internal server error: ${error.message}` });
    }
};


// @POST
// user/refresh
// desc: To create new access token once it has expired
const refreshAccessToken = async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).json({ message: "Unauthorized API request" });
  }

  try {
    // Verify refresh token
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) {
          if (err.name === "TokenExpiredError") {
            return res
              .status(403)
              .json({ message: "Refresh token expired. Please log in again." });
          }
          return res.status(403).json({ message: "Forbidden. Invalid token." });
        }

        let user;
        const role = Number(decoded.role);

        // Retrieve user based on role from decoded token
        if (!role) {
          return res
            .status(403)
            .json({ message: "Forbidden. Invalid user role." });
        }

        const adminRole = Number(process.env.ADMIN_ROLE);
        const userRole = Number(process.env.USER_ROLE);

        switch (role) {
          case adminRole:
            user = await Admin.findById(decoded.id);
            break;
          case userRole:
            user = await User.findById(decoded.id);
            break;
          default:
            return res.status(404).json({ message: "Invalid role" });
        }

        if (!user) {
          return res.status(404).json({ message: "Cannot find user" });
        }

        // Generate new access token
        const accessToken = await user.generateAccessToken();

        return res
          .status(200)
          .json({ message: "User validation successful", data: accessToken });
      }
    );
  } catch (err) {
    console.error("Error during token refresh:", err);
    return res
      .status(500)
      .json({ message: `Internal Server Error: ${err.message}` });
  }
};

// @POST
// user/logout
// desc: To logout a user and clear cookies
const logoutUser = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      return res.status(204).json({ message: "No refresh token found" });
    }

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure only in production
      sameSite: "None",
    });

    return res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    console.error("Error during logout:", err);
    return res
      .status(500)
      .json({ message: `Internal Server Error: ${err.message}` });
  }
};

export{
    registerUser,
    refreshAccessToken,
    logoutUser,
    adminlogin
}