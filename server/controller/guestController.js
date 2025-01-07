import { GuestUser } from "../model/guestUserModel.js";
import jwt from "jsonwebtoken";

const loginGuest = async (req, res) => {
    try {
        // Generate a unique identifier for the guest user (e.g., using a timestamp or random string)
        const guestUniqueId = `guest-${Date.now()}`;

        // Define the payload for the JWT token
        const payload = {
            guestId: guestUniqueId, // Include a unique guest ID
            role: 'guest', // Define the role as 'guest'
            accessLevel: 'limited', // Set a limited access level for the guest
        };

        // Generate the JWT token for the guest
        const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        // Create a new guest user document in the database
        const newGuest = new GuestUser({
            gestUserUnique: guestUniqueId, // Use the unique guest ID
            userGuestToken: token, // Save the generated token in the database
        });

        // Save the guest user in the database
        await newGuest.save();

        // Return the generated token to the client
        res.status(200).json({ token, guestUniqueId });
    } catch (error) {
        // Handle any errors that occur
        console.error("Error in loginGuest:", error);
        res.status(500).json({ message: 'Error generating guest token', error: error.message });
    }
};

export {loginGuest};

