import express from "express";
import TeamMember from "../models/TeamMember.js";

const router = express.Router();

router
    .route("/")
    .get(async (req, res) => {

        try {

            const teamMembers = await TeamMember.find();
            res.json(teamMembers);
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }
    }
)

    .post(async (req, res) => {

        try {

            const newTeamMember = new TeamMember(req.body);
            const savedTeamMember = await newTeamMember.save();
            res.status(201).json(savedTeamMember);
            
        } catch (error) {

            res.status(400).json({ message: error.message});

            
        }
    }
);

/* GET team member by ID */

router
    .route("/:id")
    .get(async (req, res) => {

        try {

            const teamMember = await TeamMember.findById(req.params.id);

            if (!teamMember) {

                return res.status(404).json({ message: "Team member not found" });

            }

            res.json(teamMember);
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }
    }
)

    .patch(async (req, res) => {

        try {

            const updatedTeamMember = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

            if (!updatedTeamMember) {

                return res.status(404).json({ message: "Team member not found" });

            }
            
            res.json(updatedTeamMember);
            
        } catch (error) {

            res.status(400).json({ message: error.message });
            
        }
    }
)

    .delete(async (req, res) => {

        try {

            const deletedTeamMember = await TeamMember.findByIdAndDelete(req.params.id);

            if (!deletedTeamMember) {

                return res.status(404).json({ message: "Team member not found" });

            }

            res.json({ message: "Team member deleted successfully"});
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }       
    }
);

export default router;