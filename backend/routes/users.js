import express from "express";
import User from "../models/User.js";
import requireAuth from "../middleware/auth.js";
import avatarUpload from "../config/avatarUpload.js";

/* users.js manages existing, already-authenticated user's data - updating profile fields, uploading an avatar, changing name/company/phone, etc. 
requireAuth runs first, confirming the user is logged in and setting req.user.id. avatarUpload.single("avatar") runs next and it intercepts the incoming file,
uploads it to Cloudinary, and attaches Cloudinary's response to req.file. req.file.path is the resulting hosted URL. The route then saves that URL
to the user's document and returns it to the frontend.

*/

const router = express.Router();

router.patch("/avatar", requireAuth, avatarUpload.single("avatar"), async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({ message: "No file uploaded." });

        }

        const user = await User.findByIdAndUpdate(

            req.user.id,
            { avatarUrl: req.file.path },
            { new: true }

        );

        res.json({ avatarUrl: user.avatarUrl });

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

});

export default router;