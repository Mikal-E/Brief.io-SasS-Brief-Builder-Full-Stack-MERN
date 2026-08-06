import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* Register and Login routes: /register - checks for a duplicate email, creates a user, and issues a token. /login - checks the email, password, and issues a token. */

const router = express.Router();

router.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({ message: "Email already registered" });

        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.status(201).json({

            token,
            user: { id: newUser._id, name: newUser.name, email: newUser.email },

        });

    } catch (error) {

        res.status(400).json({ message: error.message });

    }
});

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(401).json({ message: "Invalid email or password" });

        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {

            return res.status(401).json({ message: "Invalid email or password" });

        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.json({

            token,
            user: { id: user._id, name: user.name, email: user.email },

        });

    } catch (error) {

        res.status(500).json({ message: error.message });
        
    }
});

export default router;
