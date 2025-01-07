import mongoose, { Schema } from "mongoose";

// Define the schema for guest user
const guestUserSchema = new Schema({
    gestUserUnique: {
        type: String,
        required: true, // Ensure the guest unique ID is required
        unique: true, // Ensure the guest unique ID is unique across documents
    },
    userGuestToken: {
        type: String,
        required: true, // Ensure the token is stored
    },
    role: {
        type: String,
        default: 'guest', // Default role for a guest
    },
}, { timestamps: true });

// Create and export the GuestUser model
export const GuestUser = mongoose.model('GuestUser', guestUserSchema);
