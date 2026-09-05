import express from "express";
import Brief from "../models/Brief.js"
import requireAuth from "../middleware/auth.js";
import generateBriefPdf from "../utils/generateBriefPdf.js";

const router = express.Router();

router
    .route("/")
    .get(requireAuth, async (req, res)=> {

        try {

            const filter = {};

            if (req.query.status) {

                filter.status = req.query.status;

            }

            const briefs = await Brief.find(filter);
            res.json(briefs);
 
        } catch (error) {

            res.status(500).json({ message: error.message});
 
        }
    }
)

/* The outer try/catch governs the brief save, and if it fails, nothing else runs. The inner try/catch isolates PDF generation specifically,
so a PDF failure never crashes the request or blocks the brief from being saved. It flips pdfEmailStatus to failed and the response still returns 201 with the saved brief. */

    .post(requireAuth, async (req, res) => {

        try {

            const newBrief = new Brief({ ...req.body, user: req.user.id });
            const savedBrief = await newBrief.save();

            let pdfEmailStatus = "sent";

            try {

                const pdfBuffer = await generateBriefPdf(savedBrief);
                // Nodemailer email step goes here

            } catch (pdfError) {

                pdfEmailStatus = "failed";

            }

            res.status(201).json({ brief: savedBrief, pdfEmailStatus });
 
        } catch (error) {

            res.status(400).json({ message: error.message});
 
        }
    }
);

/* GET brief by ID */

router
    .route("/:id")
    .get(requireAuth, async (req, res)=> {

        try {

            const brief = await Brief.findById(req.params.id);

            if (!brief) {

                return res.status(404).json({ message: "Brief not found" });

            }

            res.json(brief);
 
        } catch (error) {

            res.status(500).json({ message: error.message});
 
        }
    }
)

    .patch(requireAuth, async (req, res) => {

        try {

            const updatedBrief = await Brief.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});

            if (!updatedBrief) {

                return res.status(404).json({ message: "Brief not found" });

            }
            
            res.json(updatedBrief);

        } catch (error) {
            
            res.status(400).json({ message: error.message});

        }
    }
)

    .delete(requireAuth, async (req, res) => {

        try {

            const deletedBrief = await Brief.findByIdAndDelete(req.params.id);

            if (!deletedBrief) {

                return res.status(404).json({ message: "Brief not found" });

            }

            res.json({ message: "Brief deleted successfully" });
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }
    }
);

export default router;
