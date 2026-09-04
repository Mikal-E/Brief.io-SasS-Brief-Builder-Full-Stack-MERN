/* Requirements - Use at least three different data collections within the database (such as users, posts, or comments). Weight 5%
2 of 3 - This one Briefs.js */

import mongoose from "mongoose";

const briefSchema = new mongoose.Schema(

    {

        projectName: {
            type: String,
            required: true,
        },

        projectType: {
            type: String,
            required: true,
        },

        timeline: {
            type: String,
            required: true,
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        stakeholderName: {
            type: String,
        },

        stakeholderContact: {
            type: String,
        },

        targetAudience: {
            type: String,
            required: true,
        },

        geographicFocus: {
            type: String,
        },

        painPoints: {
            type: [String],
            default: [],
        },

        objectives: {
            type: String,
        },

        goals: {
            type: String,
        },

        toneVoice: {
            type: [String],
            default: [],
        },

        keyDeliverables: {
            type: [String],
            default: [],
        },

        milestones: {
            type: String,
        },

        additionalInformation: {
            type: String,
        },

        status: {
            type: String,
            required: true,
            enum: ["Not Started", "Active", "On Hold", "Completed", "Cancelled"],
            default: "Not Started",
        },

        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "TeamMember",
        }

    }

)

/* Requirements - Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable. Weight 5%
2 of 3 - This one Briefs.js*/

briefSchema.index({ status: 1 });
briefSchema.index({ user: 1 });

const Brief = mongoose.model("Brief", briefSchema);

export default Brief;