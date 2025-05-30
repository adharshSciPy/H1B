import { Admin } from "../model/adminModel.js";
import { generateAccessToken } from "../utils/jwt.js";

const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const role = process.env.ADMIN_ROLE;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const newAdmin = new Admin({ email, password, role }); // Password will be hashed by model
    await newAdmin.save();

    res
      .status(201)
      .json({ message: "Admin registered successfully", newAdmin });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.isPasswordCorrect(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = await admin.generateAccessToken();

    res.status(200).json({
      message: "Login successfully",
      token, // Include the token in the response
      email: admin.email,
      role: admin.role,
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
const getAllAdmin=async(req,res)=>{
  try {
    const response = await Admin.find()
    res.status(200).json({
      message: "All Admins",
      response
    });
  } catch (error) {
    console.log(error);
    
  }
}
const logoutAdmin = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(400).json({ message: "Token required" });

    // Delete refresh token from DB or blacklist
    await Token.deleteOne({ token: refreshToken });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: "Logout failed" });
  }
};
const deleteAdminById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAdmin = await Admin.findByIdAndDelete(id);

    if (!deletedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.error("Delete Admin Error:", error);
    res.status(500).json({ message: "Server error while deleting admin" });
  }
};

export { registerAdmin, loginAdmin ,logoutAdmin,getAllAdmin,deleteAdminById};
