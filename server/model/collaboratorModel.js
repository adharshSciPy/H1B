import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import mongoose, { Schema } from "mongoose";
const defaultRole = process.env.COLLABORATOR_ROLE
const collaboratorSchema = new Schema({
    firstName: {
        type: String
    },
    lastName:{
        type:String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: Number,
        default: defaultRole
    },
   
    gender:{
        type:String
    },
    // image:{
    //     type:String
    // },
    country:{
        type:String
    },
    language:{
        type:String
    },
    timezone:{
        type:String
    }
}, { timestamps: true })


// hashing admin password

collaboratorSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        return next(error);
    }
})

//generate access token
collaboratorSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            id: this._id,
            firstName: this.firstName,
            email: this.email,
            role: this.role
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    )
}

// generate refresh token
// adminSchema.methods.generateRefreshToken = async function () {
//     return jwt.sign(
//         {
//             id: this._id,
//             email: this.email,
//             role: this.role,
//         },
//         process.env.REFRESH_TOKEN_SECRET,
//         {
//             expiresIn: process.env.REFRESH_TOKEN_EXPIRY
//         }
//     )
// }

// matching admin password
collaboratorSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

    // next(error);



export const Collaborator = mongoose.model("collaborator", collaboratorSchema)