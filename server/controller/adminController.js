import { Admin } from "../model/adminModel.js";
import { passwordValidator } from "../utils/passwordValidator.js";
import jwt from 'jsonwebtoken';




const registerAdmin=async(req,res)=>{
    const{firstName,lastName,email,password,gender,country,language,timezone}=req.body;

    try {
        const isEmptyField=[firstName,lastName,email,password,gender,country,language,timezone].some((field)=>(
            field.trim()=== ''||field===undefined
        ));
        if(isEmptyField){
            return res.status(401).json({ message: 'Please fill in all fields' });

        }
        const validPassword=passwordValidator(password);
        if(!validPassword){
            
            return res.status(401).json({ message: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character' });
        }
        const existingAdmin=await Admin.findOne({email:email});
        if(existingAdmin){
            return res.status(409).json({ message: 'Email already in use' });

        }
        const role = process.env.ADMIN_ROLE;
        const admin=await Admin.create({
            firstName,
            lastName,
            email,
            password,
            role,
            gender,
            country,
            language,
            timezone
        });
        const createdAdmin=await Admin.findOne({_id:admin._id}).select("-password")
        if (!createdAdmin) {
            return res.status(500).json({ message: 'Admin Registeration Failed' })
        }

        res.status(200).json({ message: 'Admin registered successfully', data: createdAdmin })
    } catch (error) {
        return res.status(500).json({ message: `Internal server error due to ${error.message}` })
        
    }
}
const adminLogout = async (req, res) => {
    try {
        const { refreshToken } = req.cookies;
        if (!refreshToken) {
            return res.status(204).json({ message: "Invalid Cookie" })
        }
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: false,//Secure only in production
            sameSite: "None"
        })
        return res.status(200).json({ message: "Logout Successfully" })
    } catch (error) {
        return res.status(500).json({ message: `Internal server error due to ${error.message}` })
    }
}
    const editAdmin = async (req, res) => {
        const { id } = req.params;
        // const file = req.file;
        const { firstName,lastName,gender,country,language} = req.body;
    
        // if (!file) {
        //     return res.status(400).json({ error: "No file uploaded" });
        // }
    
        try {
            // Update admin record with the provided data
            const editResult = await Admin.findByIdAndUpdate(
                id,
                {
                    firstName,
                    // image: `/uploads/${file.filename}`,
                    lastName,
                    gender,
                    country,
                    language
                },
                { new: true } // Return the updated document
            );
    
            if (!editResult) {
                return res.status(404).json({ error: "Admin not found" });
            }
    
            res.status(200).json({
                message: "Updated successfully",
                data: editResult,
            });
    
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: error.message });
        }
    };
    


export{registerAdmin,adminLogout,editAdmin}