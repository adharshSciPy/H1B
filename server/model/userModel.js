import mongoose,{Schema} from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const defaultRole = process.env.USER_ROLE;


const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        // 
    },
    password: {
        type: String,
        // 
    },
    phone: {
        type: Number,
        // 
    },
    
    role: {
        type: Number,
        default: defaultRole
    },
    hasLoggedIn: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true });
    
// Generate access token
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
            firstName: this.firstName,
            email: this.email,
            role: this.role
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '7d' }
    );
};
// Matching password for login
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};
// Generate refresh token
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            id: this._id,
            email: this.email,
            role: this.role
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '7d' }
    );
};


    // Hashing password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next();
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        return next(error);
    }
});

export const User = mongoose.model("User", userSchema);
