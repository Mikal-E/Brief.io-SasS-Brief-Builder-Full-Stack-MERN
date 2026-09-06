import express from "express";
import Activity from "../models/Activity.js";

const router = express.Router();

router
    .route("/")
    .get(async (req, res) => {

        try {

            const filter = {};

            if (req.query.read) {

                filter.read = req.query.read === "true";

            }

            const activities = await Activity.find(filter).populate("brief").populate("teamMember").sort({ createdAt: -1 });
            // const activities = await Activity.find(filter);
            res.json(activities);
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }
    }
)

    .post(async (req, res) => {

        try {

            const newActivity = new Activity(req.body);
            const savedActivity = await newActivity.save();
            res.status(201).json(savedActivity);
            
        } catch (error) {

            res.status(400).json({ message: error.message});
            
        }
    }
);

/* GET activity by ID */

router
    .route("/:id")
    .get(async (req, res) => {

        try {

            const activity = await Activity.findById(req.params.id);

            if(!activity) {

                return res.status(404).json({ message: "Activity not found"});

            }

            res.json(activity);
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }
    }
)

    .patch(async (req, res) => {

        try {

            const updatedActivity = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});

            if(!updatedActivity) {

                return res.status(404).json({ message: "Activity not found"});

            }

            res.json(updatedActivity);
            
        } catch (error) {

            res.status(400).json({ message: error.message});
            
        }
    }
)

    .delete(async (req, res) => {

        try {

            const deletedActivity = await Activity.findByIdAndDelete(req.params.id);

            if(!deletedActivity) {

                return res.status(404).json({ message: "Activity not found"});

            }

            res.json({ message: "Activity deleted successfully"});
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }
    }
);

export default router;