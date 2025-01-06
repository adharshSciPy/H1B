import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const defaultRole = process.env.USER_ROLE;


const userSchema = new Schema({
    firstName: {
        type: String
    },
    firstName: {
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
    address: {
        type: String,
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
